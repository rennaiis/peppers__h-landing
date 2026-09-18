import React from "react";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import { footer } from "@/constants/copyright";
import { safeHTML } from "@/utils/ps/frontend";
import Icon from "../icon/Icon";
import Picture from "../picture/Picture";
import CustomButton from "@/components/customButton/CustomButton";

export default function Footer({}) {
  const {text, social, app} = footer
  return(
    <footer className={styles.footer}>
        <div className={styles.footer__bg}></div>
        <div className={styles.footer__content}>
          <div className={styles.footer__socials}>
            <div className={styles.footer__caption}>{safeHTML(social.caption)}</div>
            <Icon className={styles.footer__logo} name={social.logo}/>
            <div className={styles.footer__socialLinks}>
              {social.links.map((item)=>(
                <CustomButton {...item}/>
              ))}
            </div>
          </div>
          <div className={styles.footer__load}>
            <div className={styles.footer__info}>
              <div className={styles.footer__how}>{safeHTML(app.caption)}</div>
              <CustomButton {...app.button}/> 
            </div>
            <div className={styles.footer__qr}>
              <Picture {...app.qr}/>
            </div>
          </div>
          <div className={styles.footer__text}>{safeHTML(text)}</div>
        </div>
    </footer>
  )
   
}
