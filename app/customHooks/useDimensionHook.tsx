import { useState, useEffect } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

const useDimension = (): Dimensions => {
    const [dimensions, setDimensions] = useState<Dimensions>({
      width: 0,
      height: 0,
    });
  
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  
    useEffect(() => {
      // Initial dimensions on mount
      updateDimensions();
  
      // Event listener to update dimensions on window resize
      window.addEventListener('resize', updateDimensions);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }, []); // Empty dependency array ensures the effect runs only on mount and unmount
  
    return dimensions;
  };
  
  export default useDimension;