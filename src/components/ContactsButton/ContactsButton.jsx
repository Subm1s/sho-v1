import React, { useState } from "react";
import s from "./ContactsButton.module.css";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const ContactsButton = () => {
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isBigScreen = useMediaQuery({ minWidth: 940 });

  const iconSize = 34;

  return (
    <div className={isShow ? [s.fab, s.open].join(" ") : s.fab}>
      <div
        onClick={() => {
          setIsShow(!isShow);
          setIsOpen(false);
        }}
      >
        <AiOutlinePhone size={iconSize} />
        <div className={s.yellowCircle}></div>
        <div className={s.violetCircle}></div>
      </div>
      <div className={s.menu}>
        <button>
          <a href="mailto:sho.marketing.ua@gmail.com">
            <AiOutlineMail size={iconSize} />
          </a>
        </button>
        <button>
          {isBigScreen ? (
            <div className={s.contactDesktop} onClick={()=>{setIsOpen(!isOpen)}}>
              <AiOutlinePhone size={iconSize} />

              <p className={isOpen ? [s.show, s.contactDesktopText].join(" ") : s.contactDesktopText}>+380800218870</p>
            </div>
          ) : (
            <a href="tel:+380800218870">
              <AiOutlinePhone size={iconSize} />
            </a>
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactsButton;
