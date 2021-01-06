import React from "react";
import styles from "./styles.module.css";

export default function Warning({ title }) {
  return (
    <div className={styles.warning__header}>
      <p className={styles.article}>Упс! Щось пішло не так</p>
      <p className={styles.article__title}>{title}</p>
    </div>
  );
}
