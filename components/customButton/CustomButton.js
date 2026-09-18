import React, {forwardRef, useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../baseComponents/gui/button/Button";
import Icon from "../baseComponents/gui/icon/Icon";
import styles from "./CustomButton.module.scss";
import {safeHTML} from "@PS/frontend";
import {useButtonControl} from "@/components/customButton/utils/hooks/useButtonControl";

const CustomButton = forwardRef(function (
  {
    className,
    children,
    text,
    img,
    icon,
    type = "button",
    onClick: click,
    disabled,
    tag,
    href,
    target,
    timeout,
    eventsData,
    events,
    preventDefault,
    stopPropagation,
    ...rest
  },
  ref,
) {
  const {onClick, isDisabled} = useButtonControl({
    onClick: click,
    timeout,
    preventDefault,
    stopPropagation,
    events,
    eventsData,
  });

  const customButtonClasses = (className ?? "")
    .split(" ")
    .filter(className => className.includes("customButton"))
    .map(className => styles[className]);

  const otherClasses = (className ?? "").split(" ").filter(className => !className.includes("customButton"));

  return (
    <Button
      ref={ref}
      type={type}
      className={classNames(styles.customButton, ...otherClasses, ...customButtonClasses)}
      onClick={onClick}
      disabled={isDisabled || disabled}
      tag={tag}
      href={href}
      target={target}
      {...rest}
    >
      <div className={classNames(styles.customButton__border, styles.customButton__border_right)} />
      <div className={classNames(styles.customButton__border, styles.customButton__border_full)} />
      <div className={classNames(styles.customButton__border, styles.customButton__border_bottom)} />
      {children ?? (
        <div className={styles.customButton__block}>
          
          {(img || icon) && (
            <div className={styles.customButton__image}>
              {img && <img src={img} />}
              {icon && <Icon name={icon} />}
            </div>
          )}
          {text && <div className={styles.customButton__text}>{safeHTML(text)}</div>}
        </div>
      )}
    </Button>
  );
});

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CustomButton;
