
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-right' | 'fade-in-left' | 'slide-in-bottom';
  threshold?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in',
  threshold = 0.2,
  id
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationStyles = {
    'fade-in': 'opacity-0 translate-y-4',
    'fade-in-right': 'opacity-0 -translate-x-8',
    'fade-in-left': 'opacity-0 translate-x-8',
    'slide-in-bottom': 'opacity-0 translate-y-16',
  };

  const visibleClass = isVisible ? 
    'opacity-100 translate-x-0 translate-y-0' : 
    animationStyles[animation];

  const delayClass = delay ? `delay-[${delay}ms]` : '';

  return (
    <div
      ref={sectionRef}
      id={id}
      className={cn(
        'transition-all duration-700 ease-out',
        visibleClass,
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
