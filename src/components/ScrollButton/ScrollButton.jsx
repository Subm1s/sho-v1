import React, { useEffect, useState } from "react";
import {AiFillCaretUp} from 'react-icons/ai'

import s from "./ScrollButton.module.css";

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
  
      <div
        onClick={() => {
          scrollToTop();
        }}
        className={
          showScrollButton ? [s.topButton, s.show].join(" ") : s.topButton
        }
      >
        <AiFillCaretUp size={32}/>
      </div>
    
  );
};

export default ScrollButton;
