import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Video.module.scss";
import { video } from "@/constants/copyright";
import { safeHTML } from "@/utils/ps/frontend";
import CustomButton from "../customButton/CustomButton";
import Picture from "../baseComponents/gui/picture/Picture";

export default function Video() {
  const {title, button, videoPreview, pauseButton} = video
  return (
    <section className={styles.video}>
      <div className={styles.video__bg}></div>
      <div className={styles.video__content}>
        <h2 className={styles.video__title}>{safeHTML(title)}</h2>
        <div  className={styles.video__video}>
          <Picture {...videoPreview} />
          <CustomButton {...pauseButton} className={classNames(pauseButton?.className, styles.video__pause)}/>
        </div>
        <CustomButton {...button} className={classNames(button?.className, styles.video__button, 'customButton_whiteRed', 'customButton_high')}/>
      </div>
    </section>
  );
}

Video.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
