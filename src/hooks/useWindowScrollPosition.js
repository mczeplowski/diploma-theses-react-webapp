import { useState, useEffect } from 'react';
import debounce from 'debounce';

function useWindowScrollPosition() {
  const [position, setPosition] = useState(0);

  const set = debounce(() => setPosition(window.scrollY), 10);

  useEffect(() => {
    window.addEventListener('scroll', set);
    return () => window.removeEventListener('scroll', set);
  }, [set]);

  return [position];
}

export default useWindowScrollPosition;
