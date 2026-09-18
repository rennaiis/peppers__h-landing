import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Fact.module.scss";
import { safeHTML } from "@/utils/ps/frontend";
import Picture from "../baseComponents/gui/picture/Picture";

export default function Fact({mod, text, title, caption, bgItems}) {
  return (
    <div className={classNames(styles.fact, styles[`fact_${mod}`])}>
      <div className={styles.fact__bg}>
          {...bgItems.map((item, index)=>{
          return(
            <div key={index} className={classNames(styles[`fact__bgItem_${item.mod}`], styles.fact__bgItem)}>
              <Picture {...item}/> 
            </div>
          )
        })}

      </div>
      <div className={styles.fact__content}>
        <p className={styles.fact__text}>{safeHTML(text)}</p>
        <p className={styles.fact__title}>{safeHTML(title)}</p>
        <p className={styles.fact__caption}>{safeHTML(caption)}</p>
      </div>
    </div>
  );
}

Fact.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
