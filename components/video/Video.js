import React, { useEffect, useRef, useState } from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Video.module.scss";
import { video } from "@/constants/copyright";
import { safeHTML } from "@/utils/ps/frontend";
import CustomButton from "../customButton/CustomButton";
import Player from "../baseComponents/gui/player/Player";

export default function Video() {
  const {title, button, pauseButton, videoSrc, videoPreviewSimple} = video
  const [play, setPlay] = useState(false)
  const videoRef = useRef(null)
  useEffect(()=>{
    const current = videoRef.current
    if (!current) return

    const observer = new IntersectionObserver(
      ([entry])=>{
        if (entry.isIntersecting){
          setPlay(true)
        }
      }, 
      {threshold: 1}
    )

    observer.observe(current)
    return () => observer.disconnect()
  }, [])
  return (
    <section className={styles.video}>
      <div className={styles.video__bg}></div>
      <div className={styles.video__content}>
        <h2 className={styles.video__title}>{safeHTML(title)}</h2>
        <div
            ref={videoRef}  
            className={styles.video__video}>
            <Player 
              video={videoSrc}
              preview={videoPreviewSimple}
              play={play}
              onPlayChange={setPlay}
            />
            <CustomButton {...pauseButton} 
            className={classNames(pauseButton?.className, styles.video__pause, {[styles.video__pause_hidden]:play})}
            onClick={()=>{
              setPlay(true)
            }}
            />
        </div>
        <CustomButton {...button} className={classNames(button?.className, styles.video__button, 'customButton_whiteRed', 'customButton_high')}/>
      </div>
    </section>
  );
}

Video.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
