import { useEffect } from "react";

const useIntersectionObserver = (
  selectorOrRef,
  threshold = 0.5,
  className = "animate"
) => {
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: threshold, // Trigger when 50% of the element is in view by default
    };

    // Helper function to handle the logic
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the class when the element is in view
          entry.target.classList.add(className);
          observer.unobserve(entry.target); // Stop observing after animation trigger
        }
      });
    };

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, options);

    // If we get a ref, we observe the single element, else observe all matching elements
    if (selectorOrRef.current) {
      observer.observe(selectorOrRef.current);
    } else {
      // Observe all elements that match the selector
      const elements = document.querySelectorAll(selectorOrRef);
      elements.forEach((element) => {
        observer.observe(element);
      });
    }

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [selectorOrRef, threshold, className]); // Dependency array ensures it re-runs if any value changes
};

export default useIntersectionObserver;
