import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Intro.module.scss";
import Icon from "../baseComponents/gui/icon/Icon";
import { intro } from "@/constants/copyright";
import { safeHTML } from "@/utils/ps/frontend";
import CustomButton from "../customButton/CustomButton";
import Picture from "../baseComponents/gui/picture/Picture";

export default function Intro({}) {
  const {header, topText, button1, bottomText, button2, bgItems, coins} = intro
  return (
    <section className={classNames(styles.intro)}>
      <div className={styles.intro__bg}>
        {...bgItems.map((item, index)=>{
          return(
            <div key={index} className={classNames(styles[`intro__bgItem_${item.mod}`], styles.intro__bgItem)}>
              <Picture {...item}/> 
            </div>
          )
        })}
        <div className={classNames(styles.intro__bgItem, styles.intro__bgItem_blackGr)}>
        </div> 
        <div className={classNames(styles.intro__bgItem, styles.intro__bgItem_blackGrSides)}>
        </div>    
        <div className={classNames(styles.intro__bgItem, styles.intro__bgItem_glowBlack)}></div>
        <div className={classNames(styles.intro__bgItem, styles.intro__bgItem_glowRed)}></div>
        <div className={classNames(styles[`intro__bgItem_${coins.mod}`], styles.intro__bgItem)}>
          <Picture {...coins}/> 
        </div>
      </div>
      <div className={styles.intro__content}>
        <header className={styles.intro__header}>
          <a href={header.huntLogo.href}><Icon name={header.huntLogo.icon} className={styles.intro__huntLogo}/></a>
          <a href={header.lotoLogo.href}><Icon name={header.lotoLogo.icon}  className={styles.intro__logo}/></a>          
          <div className={styles.intro__date}>
            {header.caption.map((item, index)=>(
              <div key={index} className={classNames(styles.intro__caption, styles[`intro__caption_${item.mod}`])}>{safeHTML(item.text)}</div>
            ))}
          </div>
        </header>
        <div className={styles.intro__topText}>
          {topText.map((item, index)=>(
            <p key={index} className={classNames(styles.intro__string, styles[`intro__string_${item.mod}`])}>
              {item.text}
            </p>
          ))}
          
        </div>
        <CustomButton {...button1} className = {classNames(button1?.className, 'customButton_red')}/>
        <div className={styles.intro__bottomText}>
          {bottomText.map((item, index)=>(
            <p key={index} className={classNames(styles.intro__string, styles[`intro__string_${item.mod}`])}>
              {item.text}
            </p>
          ))}
        </div>
        <CustomButton {...button2} className = {classNames(button2?.className, 'customButton_inversed')}/>


      </div>
    </section>
  );
}

Intro.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
