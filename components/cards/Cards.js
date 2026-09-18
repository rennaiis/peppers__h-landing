import React, { useState } from "react";
import * as PropTypes from "prop-types";
import styles from "./Cards.module.scss";
import { cards } from "@/constants/copyright";
import Card from "../card/Card";
import CustomButton from "../customButton/CustomButton";

export default function Cards() {
  const {button, list} = cards
  const [openedCard, setOpenedCard] = useState (null)
  const handleClick = (mod) => {
    if (mod == openedCard){
      setOpenedCard(null)
    }else{
      setOpenedCard(mod)
    }
  }

  return (
    <section className={styles.cards}>
      <div className={styles.cards__bg}></div>
      <div className={styles.cards__content}>
        <div className={styles.cards__container}>
          {list.map((card, index)=>(
            <Card 
              {...card} 
              handleClick={handleClick}
              isOpened={openedCard === card.mod}
            />
          ))}
        </div>
        <CustomButton {...button}/>
      </div>
      
    </section>
  );
}

Cards.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
