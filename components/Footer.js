import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import styles from "../styles/footer.module.css";

export default function Footer() {
  const getDate = () => {
    const today = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = today.getDay();
    const dayOfWeekString = daysOfWeek[dayOfWeek];

    return dayOfWeekString;
  };
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__center}>
            <div className={styles.footer__icons}>
              <div>
                <AiFillGithub />
              </div>
              <div>
                <FiMail />
              </div>
              <div>
                <AiFillLinkedin />
              </div>
              <div>
                <AiFillTwitterCircle />
              </div>
            </div>
            <div>
              <span>Abel wanyonyi</span> | <span>Have a nice {getDate()}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
