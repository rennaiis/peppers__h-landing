import React from "react";
import * as PropTypes from "prop-types";
import styles from "./CustomMenu.module.scss";
import classNames from "classnames";
import PE from "@/components/baseComponents/gui/pElement/PElement";
import {settingsAnimationBase} from "@/components/baseComponents/helpers/transition/animations";

export default function CustomMenuItem(props) {
  const show = props.show;
  return (
    <PE.li
      animation={"siteCustomMenuItem"}
      className={classNames(styles.customMenu__item, {
        [styles[`customMenu__item_${props?.index + 1}`]]: props?.index + 1,
      })}
      {...props.attr}
      onClick={props.onClick}
    >
      <a className={styles.customMenu__itemLink} href={props.href}>
        {props.text}
      </a>
    </PE.li>
  );
}

CustomMenuItem.propTypes = {
  className: PropTypes.string,
  attr: PropTypes.object,
  href: PropTypes.string,
  text: PropTypes.string,
};
