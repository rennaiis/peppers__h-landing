import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Fact.module.scss";
import { safeHTML } from "@/utils/ps/frontend";
import Picture from "../baseComponents/gui/picture/Picture";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"; 

export default function Fact({mod, back, text, title, caption, bgItems}) {
  return (
    <div className={classNames(styles.fact, styles[`fact_${mod}`])}>
      <div className={styles.fact__bg}>
         { back && <div  className={classNames(styles[`fact__bgItem_${back.mod}`], styles.fact__bgItem)}>
            <Picture {...back}/>
          </div>}
         <MouseParallaxContainer 
          globalFactorX={0.4}
          globalFactorY={0.4}
          containerStyle={{width: '100%', height: '100%'}}
          useWindowMouseEvents={true}>
          {...bgItems.map((item, index)=>{
          return(
            <MouseParallaxChild
              factorX={0.1 + 0.1 * index} 
              factorY={0.1 + 0.1 * index} 
              key={index} 
              className={classNames(styles[`fact__bgItem_${item.mod}`], styles.fact__bgItem)}>
              <Picture {...item}/> 
            </MouseParallaxChild>
          )
         })}
        </MouseParallaxContainer>
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
