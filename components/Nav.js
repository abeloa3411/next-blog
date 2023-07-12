import Link from "next/link";
import React from "react";
import styles from "../styles/nav.module.css";
import { AiOutlineCode } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

export default function Nav({ toggle }) {
  return (
    <>
      <header className={styles.header__container}>
        <div className={styles.header__center}>
          <div>
            <h3>
              <span>
                <Link href="/" className={styles.logo}>
                  Abel{" "}
                  <span className={styles.logo__icon}>
                    <AiOutlineCode />
                  </span>
                </Link>
              </span>
            </h3>
          </div>
          <div className={styles.nav__container}>
            <nav>
              <ul className={styles.header__list}>
                <li className={styles.header__list__items}>
                  <Link href="/projects">Projects</Link>
                </li>
                <li className={styles.header__list__items}>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.bars} onClick={toggle}>
            <FaBars />
          </div>
        </div>
      </header>
    </>
  );
}
