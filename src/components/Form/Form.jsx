import React, { useState } from "react";
import Container from "../Layout/Container/Container";
import s from "./Form.module.css";
import axios from "axios";

const chatId = "-1001833017736";
const botId = "6566798444:AAFhIBP8Tw-JmOhh0Og4LZgsuP_q4Zf9Wgs";

const Form = () => {
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
    <section className={s.section}>
      <Container>
        <h3 className={s.formTitle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="724"
            height="209"
            viewBox="0 0 724 209"
            fill="none"
            className={[s.svgBgDesktop, s.svgBgShow].join(" ")}
          >
            <path
              d="M0.5 0.5H723.5V138.046L0.5 208.449V0.5Z"
              stroke="#F4FF25"
            />
          </svg>
          Питання?
        </h3>
        <div className={s.formWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="724"
            height="654"
            viewBox="0 0 724 654"
            fill="none"
            className={s.svgBgDesktop}
          >
            <path d="M0 66L724 0V654H0V66Z" fill="#541866" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="337"
            height="435"
            viewBox="0 0 337 435"
            fill="none"
            className={s.svgBgMobile}
          >
            <path d="M0 42.8188L337 0V435H0V42.8188Z" fill="#541866" />
          </svg>
          <form
            action=""
            className={s.mainFrom}
            onSubmit={(e) => handleSubmit(e)}
          >
            <label className={s.formLabel} htmlFor="name">
              Заповніть форму і ми зв'яжемося з вами для обговорення деталей
            </label>
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
      </Container>
    </section>
  );
};

export default Form;
