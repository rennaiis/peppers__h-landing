import React, { useRef } from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Facts.module.scss";
import CustomButton from "../customButton/CustomButton";
import { facts } from "@/constants/copyright";
import Carousel from "../baseComponents/gui/carousel/Carousel";
import Fact from "../fact/Fact";
import { safeHTML } from "@/utils/ps/frontend";

export default function Facts() {
  const {button, list, arrowLeft, arrowRight, title, arrowLeftM, arrowRightM} = facts
  const leftArrowRef = useRef(null)
  const rightArrowRef = useRef(null)
  const settings = {
    slidesPerView: 1.1, 
    centeredSlides: true,
    modules: [],
    spaceBetween: 20, 
    loop: true,
    breakpoints: {
      1025: {
        slidesPerView:4,
        centeredSlides: false,
        spaceBetween: 20, 
      }
    }
    
  }
  return (
    <section className={styles.facts}>
      <div className={styles.facts__bg}></div>
      <div className={styles.facts__content}>
        <h2 className={styles.facts__title}>{safeHTML(title)}</h2>
        <div className={styles.facts__carousel}>
          <Carousel 
            itemsData={list}
            item={Fact}
            prevRefNavigation={leftArrowRef}
            nextRefNavigation={rightArrowRef}
            settings={settings}
          />
          <div className={styles.facts__arrows}>
            <CustomButton ref={leftArrowRef} {...arrowLeft}/>
            <CustomButton ref={rightArrowRef} {...arrowRight}/>
            <CustomButton ref={leftArrowRef} {...arrowLeftM}/>
            <CustomButton ref={rightArrowRef} {...arrowRightM}/>
          </div>
        </div>
        <CustomButton {...button} className={classNames(button?.className, 'customButton_white', 'customButton_high')}/>
      </div>
    </section>
  );
}

Facts.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
