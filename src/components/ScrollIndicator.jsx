import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { animateScrollIndicator } from '../animations/gsapAnimations';

const ScrollIndicator = () => {
  const indicatorRef = useRef(null);

  useEffect(() => {
    animateScrollIndicator(indicatorRef);
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
    >
      <ChevronDown className="w-8 h-8 text-cyan-400" />
    </div>
  );
};

export default ScrollIndicator;
