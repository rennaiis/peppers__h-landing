import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Card.module.scss";
import Icon from "../baseComponents/gui/icon/Icon";
import { safeHTML } from "@/utils/ps/frontend";
import Table from "../table/Table";
import Picture from "../baseComponents/gui/picture/Picture";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"; 

export default function Card({isOpened, bgItems, handleClick, mod, icon, cover, title, ol, text, boldText, fact, ul, table, ulIcon}) {
  return (
    <div className={classNames(styles[`card_${mod}`], styles.card, {[styles.card_opened]: isOpened})} onClick={()=>handleClick(mod)}>
      <div className={styles.card__body}>
        <div className={styles.card__bg}>
          <MouseParallaxContainer 
            globalFactorX={0.5}
            globalFactorY={0.5}
            containerStyle={{width: '100%', height: '100%'}}
            useWindowMouseEvents={true}>
            {bgItems?.map((item, index)=>{
              return(
                <MouseParallaxChild  
                factorX={0.1 + 0.1 * index} 
                factorY={0.1 + 0.1 * index} 
                key={index} 
                className={classNames(styles[`card__bgItem_${item.mod}`], 
                styles.card__bgItem)}>
                  <Picture {...item}/> 
                </MouseParallaxChild>
              )
            })}
          </MouseParallaxContainer>
        </div>
        <div className={styles.card__content}>
          {title && <h3 className={styles.card__title}>{safeHTML(title)}</h3>}
          {ol &&
            <ol className={styles.card__ol}>
              {ol.map((item, index)=>(
                <li key={index}>{safeHTML(item)}</li>
              ))}
            </ol>
          }
          {text && <div className={styles.card__text} >{safeHTML(text)}</div>}
          {boldText && <div className={styles.card__boldText}>{safeHTML(boldText)}</div>}
          {fact &&
          <div className={styles.card__fact}>
            <Icon name={fact.icon} className={styles.card__factIcon}/>
            <div  className={styles.card__factContent}>
                <h4 className={styles.card__factTitle}>{safeHTML(fact.title)}</h4>
                <p  className={styles.card__factText}>{safeHTML(fact.text)}</p>
                <p  className={styles.card__factCaption}>{safeHTML(fact.caption)}</p>
            </div>
          </div>}
          {ul && 
            <ul className={styles.card__ul}>
              {ul.map((item, index)=>(
                <li key={index}>
                  <Icon name={ulIcon} className={styles.card__listIcon}/>  
                  {safeHTML(item)}
                </li>
              ))}
            </ul>
          }
          { table && <Table {...table}/>
          }
        </div>
      </div>
      <div className={classNames(styles.card__cover)}>
        <div className={styles.card__coverBg}></div>
        <div className={styles.card__coverContent}>
          <Icon name={icon} className={styles.card__coverIcon}/>
          <h2 className={styles.card__coverTitle}>{safeHTML(cover)}</h2>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
