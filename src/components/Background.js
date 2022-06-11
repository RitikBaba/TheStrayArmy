import styles from "./Background.module.css";
import React from "react";
import cover from './images/cover.jpg';

const Background = () => {
  return (
    <article
      className={styles.article}
      style={{ backgroundImage:`url(${cover})` }}
    >
      <h1 className={styles.header}>React Is Awesome</h1>
    </article>
  );
};

export default Background;