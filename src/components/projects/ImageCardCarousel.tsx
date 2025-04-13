'use client';
import React, { useEffect, useState, createContext } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image, { ImageProps } from 'next/image';

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title?: string;
  category?: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className='relative w-full'>
        <div
          className='flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-2 [scrollbar-width:none] md:py-4'
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              'absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l'
            )}
          ></div>

          <div
            className={cn(
              'flex flex-row justify-start gap-4 pl-4',
              'mx-auto max-w-7xl' // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: 'easeOut',
                    once: true,
                  },
                }}
                key={'card' + index}
                className='rounded-3xl last:pr-[5%] md:last:pr-[33%]'
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className='mr-10 flex justify-end gap-2'>
          <button
            className='relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50'
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className='h-6 w-6 text-gray-500' />
          </button>
          <button
            className='relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50'
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ChevronRight className='h-6 w-6 text-gray-500' />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
  cardSize = {
    height: 'h-80',
    mdHeight: 'md:h-[40rem]',
    width: 'w-56',
    mdWidth: 'md:w-96',
  },
}: {
  card: Card;
  index: number;
  layout?: boolean;
  cardSize?: {
    height?: string;
    mdHeight?: string;
    width?: string;
    mdWidth?: string;
  };
}) => {
  return (
    <motion.div
      layoutId={layout ? `card-${card.title}` : undefined}
      className={cn(
        'relative z-10 flex flex-col items-start justify-start overflow-hidden rounded-3xl bg-neutral-900',
        cardSize?.height,
        cardSize?.width,
        cardSize?.mdHeight,
        cardSize?.mdWidth
      )}
    >
      <div className='pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent' />
      <div className='relative z-40 p-8'>
        {card.category && (
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className='text-left font-sans text-sm font-medium text-white md:text-base'
          >
            {card.category}
          </motion.p>
        )}

        {card.title && (
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className='mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl'
          >
            {card.title}
          </motion.p>
        )}
      </div>
      <BlurImage
        src={card.src}
        alt={card.title || ''}
        fill
        className='absolute inset-0 z-10 object-cover'
      />
    </motion.div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        'transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading='lazy'
      decoding='async'
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt ? alt : 'Background of a beautiful view'}
      {...rest}
    />
  );
};
