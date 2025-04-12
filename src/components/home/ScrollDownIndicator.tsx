'use client';

import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/icons/LottieScrollDown.json';

export const ScrollDownIndicator = () => {
  return (
    <div className='relative z-10 flex justify-center'>
      <Lottie loop animationData={lottieJson} play style={{ width: 80, height: 80 }} />
    </div>
  );
};
