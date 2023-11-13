import React, { useState } from "react";
import Container from "../../components/Layout/Container";
import s from "./Contacts.module.css";
import axios from "axios";

import { AiOutlineInstagram } from "react-icons/ai";

import shoLogo from "../../assets/shoContacts.png";

const chatId = "-1001833017736";
const botId = "6566798444:AAFhIBP8Tw-JmOhh0Og4LZgsuP_q4Zf9Wgs";

const Contacts = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [isShow, setIsShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate number
    const numberRegex = /^(?:\+380|0)[\d()\- ]*(?:\d[\d()\- ]*){9}$/;

    if (!numberRegex.test(number)) {
      alert("Номер телефону некоректний");
      return;
    }

    const data = {
      text: `Нова заявка: \nІм'я: ${name} \nНомер: ${number}`,
    };

    try {
      await axios.post(
        `https://api.telegram.org/bot${botId}/sendMessage?chat_id=${chatId}`,
        data
      );
    } catch (error) {
      console.error("Помилка при відправці запиту:", error.message);
    }
    setName("");
    setNumber("");
    setIsShow(true);
  };

  return (
    <section className={s.contacts}>
      <Container>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>contacts.</h2>
          <p className={s.quote}>
            “Ідеальний маркетинг не виглядає як маркетинг.” — Tom Fishburne.
            Тому ми пропонуємо вам те, ШО працює! 
          </p>
        </div>
        <div className={s.formSection}>
          <div className={s.sectionContacts}>
            <div className={s.contactsWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="724"
                height="321"
                viewBox="0 0 724 321"
                fill="none"
                className={s.contactsBackground}
              >
                <path
                  d="M0.5 0.5H723.5V249.103L0.5 320.448V0.5Z"
                  stroke="#F4FF25"
                />
              </svg>

              <ul className={s.contactsList}>
                <li className={s.contactsListItem}>
                  <a
                    href="tel:+380800218870"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.contactsLink}
                    aria-label="Посилання на номер телефону"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="42"
                      viewBox="0 0 33 42"
                      fill="none"
                    >
                      <path
                        d="M31.28 32.1255L23.557 26.1547C23.2565 25.9283 22.9049 25.7839 22.5341 25.7345C22.1632 25.685 21.7849 25.7322 21.4332 25.8716C21.4052 25.8821 21.3779 25.8946 21.3516 25.909L15.9058 28.8898C15.7904 28.9308 15.6674 28.9418 15.5478 28.9219C15.4282 28.9021 15.3157 28.8519 15.2202 28.776C12.5888 26.6138 10.2343 22.7506 9.4927 19.3796C9.46708 19.2576 9.47121 19.1305 9.50471 19.0097C9.53821 18.8888 9.60005 18.7779 9.68468 18.6869L14.6477 14.7843C14.6712 14.7657 14.6932 14.7447 14.7153 14.7238C14.9873 14.454 15.1912 14.1195 15.3086 13.7505C15.4261 13.3815 15.4533 12.9895 15.3879 12.6099L13.5492 2.78616C13.4653 2.2907 13.2277 1.83934 12.8721 1.49986C12.5166 1.16039 12.0622 0.951122 11.5773 0.903493C9.20485 0.69553 6.82645 1.38896 4.88637 2.85426C2.94629 4.31956 1.5772 6.45653 1.03482 8.86602C-2.2932 23.5139 6.48207 38.0384 20.5975 41.2454C22.9173 41.7777 25.3586 41.4155 27.4656 40.2264C29.5725 39.0373 31.201 37.1027 32.0469 34.7839C32.2144 34.3099 32.2303 33.7951 32.0921 33.3161C31.9539 32.837 31.669 32.4195 31.28 32.1255ZM30.6437 34.2656C29.9261 36.2291 28.5455 37.8665 26.76 38.8717C24.9745 39.8769 22.9065 40.1812 20.9424 39.7275C7.63511 36.7041 -0.639918 23.0076 2.49756 9.19836C2.95419 7.15701 4.1117 5.34563 5.75367 4.10287C7.39564 2.86012 9.40966 2.27107 11.4192 2.44587C11.4488 2.45063 11.4781 2.45729 11.5069 2.46581C11.6509 2.49987 11.7813 2.57738 11.8816 2.68857C11.9819 2.79977 12.0477 2.93969 12.0706 3.09072L13.8983 12.912C13.9185 13.0315 13.9112 13.1548 13.8769 13.2718C13.8426 13.3887 13.7824 13.4962 13.701 13.5855L8.74025 17.4867C8.71636 17.5072 8.6929 17.5258 8.67041 17.5486C8.38958 17.8293 8.1823 18.1789 8.06859 18.5637C7.95489 18.9486 7.93858 19.3556 8.02126 19.7456C8.84326 23.4821 11.3529 27.602 14.2676 29.9982C14.5719 30.2439 14.9339 30.403 15.3182 30.4599C15.7026 30.5168 16.0962 30.4696 16.4608 30.3229L16.5406 30.2851L21.991 27.3093C22.1021 27.2698 22.2203 27.258 22.3358 27.2749C22.4513 27.2918 22.5608 27.3368 22.6554 27.4064L30.3752 33.3825C30.5066 33.4785 30.6037 33.6164 30.6521 33.7755C30.7005 33.9347 30.6976 34.1066 30.6437 34.2656Z"
                        fill="#FCF4FF"
                      />
                    </svg>
                    080 02 18 870
                  </a>
                </li>
                <li className={s.contactsListItem}>
                  <a
                    href="https://www.instagram.com/sho_vn/?hl=uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.contactsLink}
                    aria-label="Посилання на сторінку в Instagram"
                  >
                    <AiOutlineInstagram size={40} />
                    sho_vn
                  </a>
                </li>
                <li className={s.contactsListItem}>
                  <a
                    href="mailto:sho.marketing.ua@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.contactsLink}
                    aria-label="Посилання на електронну пошту"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="41"
                      viewBox="0 0 40 41"
                      fill="none"
                    >
                      <path
                        d="M32.3914 7.09961H7.60807C6.503 7.09961 5.4432 7.5386 4.66179 8.32C3.88039 9.1014 3.44141 10.1612 3.44141 11.2663V29.3829C3.44141 30.488 3.88039 31.5478 4.66179 32.3292C5.4432 33.1106 6.503 33.5496 7.60807 33.5496H32.3914C33.4965 33.5496 34.5563 33.1106 35.3377 32.3292C36.1191 31.5478 36.5581 30.488 36.5581 29.3829V11.2663C36.5581 10.1612 36.1191 9.1014 35.3377 8.32C34.5563 7.5386 33.4965 7.09961 32.3914 7.09961ZM7.60807 8.76628H32.3914C33.0223 8.76446 33.6301 9.00296 34.0914 9.43329C34.5527 9.86363 34.8328 10.4535 34.8747 11.0829C30.7581 13.2829 26.6247 15.4663 22.4914 17.6663C21.9322 18.0167 21.3406 18.3125 20.7247 18.5496C20.2412 18.645 19.743 18.6364 19.2631 18.5243C18.7832 18.4123 18.3326 18.1993 17.9414 17.8996C15.5747 16.6496 13.2081 15.3829 10.8581 14.1329C8.95807 13.1329 7.02474 12.1163 5.12474 11.0996C5.16339 10.4675 5.44195 9.87394 5.90349 9.44027C6.36504 9.0066 6.97475 8.76552 7.60807 8.76628ZM34.8914 29.3829C34.8914 30.046 34.628 30.6819 34.1592 31.1507C33.6903 31.6196 33.0544 31.8829 32.3914 31.8829H7.60807C6.94503 31.8829 6.30915 31.6196 5.84031 31.1507C5.37147 30.6819 5.10807 30.046 5.10807 29.3829V12.9913C9.04141 15.0579 12.9581 17.1579 16.8914 19.2413C17.5942 19.6721 18.3507 20.0084 19.1414 20.2413C20.2987 20.4294 21.4848 20.1863 22.4747 19.5579C24.8914 18.2913 27.2914 17.0079 29.7081 15.7413C31.4414 14.8079 33.1581 13.9079 34.8914 12.9913V29.3829Z"
                        fill="white"
                      />
                    </svg>
                    sho.marketing.ua@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.formWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="724"
                height="654"
                viewBox="0 0 724 654"
                fill="none"
                className={s.formBackground}
              >
                <path d="M0 66L724 0V654H0V66Z" fill="#541866" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="337"
                height="507"
                viewBox="0 0 337 507"
                fill="none"
                className={s.formBackgroundMobile}
              >
                <path d="M0 46.6733L337 0V507H0V46.6733Z" fill="#541866" />
              </svg>
              <form
                action=""
                className={s.mainFrom}
                onSubmit={(e) => handleSubmit(e)}
              >
                <h3 className={s.formTitle}>Залишити заявку</h3>
                <p className={s.formLabel} htmlFor="name">
                  Заповніть форму і ми зв'яжемося з вами для обговорення деталей
                </p>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Ваше ім'я"
                  className={s.inputName}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="Номер телефону"
                  className={s.inputNumber}
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
                <button
                  className={s.submitButton}
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Зв'язатись з нами
                </button>
              </form>
            </div>
          </div>
          <div className={s.shoLogo}>
            <img src={shoLogo} alt="" />
          </div>
        </div>
      </Container>
      <div
        className={isShow ? [s.backdrop, s.open].join(" ") : s.backdrop}
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        <div className={s.modal}>
          <p className={s.modalText}>Заявку надіслано ✅</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
