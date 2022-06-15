import styles from "./Background.module.css";
import React from "react";
import cover from './images/cover.jpg';

const Background = (props) => {
  return (
    <article
      className={styles.article}
      style={{ backgroundImage:`url(${props.pic})` }}
    >
      <h1 className={styles.header}>{props.text}</h1>
    </article>
  );
};

export default Background;