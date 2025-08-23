// HiddenVisitorCounter.tsx
import { useEffect } from "react";

const HiddenVisitorCounter: React.FC = () => {
  useEffect(() => {
    // Only count once per user using localStorage
    if (!localStorage.getItem("visited")) {
      fetch("https://api.countapi.xyz/hit/ayushparwal-tech/visits")
        .then((res) => res.json())
        .catch((err) => console.error(err));
      localStorage.setItem("visited", "true");
    }
  }, []);

  return null; 
};

export default HiddenVisitorCounter;
