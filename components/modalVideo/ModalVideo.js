import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./ModalVideo.module.scss";

export default function ModalVideo({className, children}) {
  return (
    <div className={classNames(styles.modalVideo, className)}>
      {children}
    </div>
  );
}

ModalVideo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
