import React from "react";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <>
      <header className={styles.header__container}>
        <div className={styles.header__center}>
          <div>
            <h3>Abel Wanyonyi</h3>
          </div>
          <div>
            <nav>
              <ul className={styles.header__list}>
                <li className={styles.header__list__items}>
                  <a>Blogs</a>
                </li>
                <li className={styles.header__list__items}>
                  <a>Projects</a>
                </li>
                <li className={styles.header__list__items}>
                  <a>About</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
