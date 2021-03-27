import React from "react";
import styles from "./Header.module.scss";

const header = () => (
  <header>
    <ul className={styles.navList}>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
)

export default header;