import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../styles/sidebar.module.css";

export default function Sidebar({ active, toggle }) {
  return (
    <>
      <div
        className={
          active ? styles.sidebar__container__show : styles.sidebar__container
        }
      >
        <div className={styles.sidebar__inner__container}>
          <div className={styles.sidebar__icon} onClick={toggle}>
            <FaTimes />
          </div>
          <div className={styles.sidebar__nav}>
            <nav>
              <ul className={styles.sidebar__list}>
                <li className={styles.sidebar__list__items} onClick={toggle}>
                  <Link href="/blog" scroll>
                    Blog
                  </Link>
                </li>
                <li className={styles.sidebar__list__items} onClick={toggle}>
                  <Link href="/projects">Projects</Link>
                </li>
                <li className={styles.sidebar__list__items} onClick={toggle}>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
