import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Rules.module.scss";
import { rules } from "@/constants/copyright";
import { safeHTML } from "@/utils/ps/frontend";
import CustomButton from "../customButton/CustomButton";
import Rule from "../rule/Rule";
import { baseConsumers } from "@/utils/ps/core";

export default function Rules() {
  const {title,caption, link, list} = rules
  return (
    <section className={styles.rules}>
      <div className={styles.rules__bg}></div>
      <div className={styles.rules__content}>
        <h2 className={styles.rules__title}>{safeHTML(title)}</h2>
        <p className={styles.rules__caption}>{safeHTML(caption)}</p>
        <div className={styles.rules__cards}>
          {list.map((item, index)=>(
            <Rule {...item}/>
          ))}
        </div>
        <CustomButton {...link} 
        className={classNames(link?.className)}
        onClick={()=>baseConsumers.modalOpen({type: 'mapModal'})}
        
        />
      </div>
    </section>
  );
}

Rules.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
