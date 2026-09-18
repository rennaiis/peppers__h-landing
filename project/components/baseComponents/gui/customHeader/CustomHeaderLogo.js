import React from "react";
import {image} from "../../../../utils/ps/frontend/src/url/baseUrl";
import styles from "./CustomHeader.module.scss";

export default function CustomHeaderLogo() {
  return (
    <div className={styles.customHeader__logo}>
      <img src={image("header/logo.svg")} />
    </div>
  );
}
