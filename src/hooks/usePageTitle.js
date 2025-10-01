import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `Alphas Creative - ${title}`;
    
    // Update favicon if needed
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = `${process.env.PUBLIC_URL || ''}/logo.webp`;
    
    // Cleanup function to restore previous title when component unmounts
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default usePageTitle;