import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!options.repeat) observer.unobserve(element);
        } else if (options.repeat) {
          setIsInView(false);
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.repeat]);

  return [ref, isInView];
}

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollDirection, scrollY };
}

export function useCounter(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if ((!startOnView || isInView) && !hasAnimated.current) {
      hasAnimated.current = true;
      const num = parseInt(end);
      if (isNaN(num)) { setCount(end); return; }
      const step = num / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= num) { setCount(num); clearInterval(timer); }
        else setCount(Math.floor(current));
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration, startOnView]);

  return [ref, count];
}
