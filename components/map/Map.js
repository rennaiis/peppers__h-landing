import React, { useCallback } from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Map.module.scss";
import CustomModal from "../baseComponents/gui/customModal/CustomModal";
import CustomButton from "@/project/components/customButton/CustomButton";
import { baseConsumers } from "@/utils/ps/core";
import { mapModal } from "@/constants/copyright";
import Picture from "../baseComponents/gui/picture/Picture";
import Icon from "../baseComponents/gui/icon/Icon";

export default function Map({className}) {
  const close = useCallback(()=>{
    baseConsumers.modalClose({type: "mapModal"});
  },[])
  const {title, caption, mapPic, addresses, closeButton} = mapModal
  return (
    <CustomModal className={classNames(styles.mapModal, className)} onClickOutside={close}>
        
        <div className={styles.map__bg}></div>
        <div className={styles.map__content}>
          <CustomButton 
              className='customButton_close' 
              onClick = {close} 
              icon = 'closeButton'
          >
            <Icon name={closeButton} className={styles.map__close}/>
          </CustomButton>
          <h2 className={styles.map__title}>{title}</h2>
          <p className={styles.map__caption}>{caption}</p>
          <div className={styles.map__container}>
            <div className={styles.map__mapPicture}>
              <Picture {...mapPic}/>
            </div>
            <div className={styles.map__search}>
              <input type="text" placeholder="Введи адрес" className={styles.map__input}/>
              <div className={styles.map__adresses}>
                {addresses.map((item)=>(
                  <p className={styles.map__adress}>{item.address}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
    </CustomModal>
  );
}

Map.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
