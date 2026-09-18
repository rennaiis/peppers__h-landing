import React, {useEffect, useRef, useState} from "react";
import CustomButton from "../../../customButton/CustomButton";
import button from "../../../customButton/CustomButton.module.scss";
import CustomProgress from "../customProgress/CustomProgress";
import styles from "./Player.module.scss";
import classNames from "classnames";

const Player = React.forwardRef(function Player({onPlayChange, play, isActive, video, audio, openModal, type, preview}, ref) {
  const [isPlay, setIsPlay] = useState(false);
  const [isStarted, setIsStarted] = useState(false)
  const [volume, setVolume] = useState(0);
  const [timeLine, setTimeLine] = useState(0);

  const audioRef = useRef();

  const timeRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (play) {
      setTimeout(() => {
        setIsStarted(true)
        setIsPlay(play);
      }, 200);
    } else {
      setIsPlay(play);
    }
  }, [play]);

  useEffect(() => {
    if (!isActive) setIsPlay(false);
  }, [isActive]);

  useEffect(() => {
    const target = videoRef.current || audioRef.current;

    if (!target) return;

    target.volume = volume;
  }, [volume]);

  useEffect(() => {
    const target = videoRef.current || audioRef.current;

    if (!target) return;

    if (isPlay) target.play();
    else target.pause();
  }, [isPlay]);

  useEffect(() => {
    let isUnmounted;

    const target = videoRef.current || audioRef.current;

    if (!target) return;

    requestAnimationFrame(update);

    return () => {
      isUnmounted = true;
    };

    function update() {
      if (isUnmounted) return;

      const {currentTime, duration} = target;

      const cDate = new Date(currentTime * 1000);
      const dDate = new Date(duration * 1000);

      setTimeLine(currentTime / duration);

      if (timeRef.current)
        timeRef.current.innerHTML = `${String(cDate.getMinutes()).padStart(2, "0")}:${String(
          cDate.getSeconds(),
        ).padStart(2, "0")}/${String(dDate.getMinutes()).padStart(2, "0")}:${String(dDate.getSeconds()).padStart(
          2,
          "0",
        )}`;

      requestAnimationFrame(update);
    }
  }, []);

  useEffect(() => {
    if (audio) {
      if (isPlay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlay]);

  useEffect(() => {
    if (audio) {
      audioRef.current.addEventListener("ended", () => {
        setIsPlay(false);
      });
    }
  }, []);

  return (
    <div
      className={classNames(styles.player, {
        [styles.player_audio]: audio,
      })}
      ref={ref}
    >
      {video && (
        <div className={classNames(styles.player__content)}>
          <video
            poster={preview}
            key={video}
            ref={videoRef}
            preload={"metadata"}
            src={`${video}`}
            playsInline={true}
            onEnded={() => {
              setIsPlay(false);
              setIsStarted(false)
              if(onPlayChange){
                onPlayChange(false)
              }
              if(videoRef.current){
                videoRef.current.load()
              }
            }}
          />
        </div>
      )}
      {audio && <audio src={audio} style={{display: "none"}} ref={audioRef} />}
      <div className={classNames(styles.player__controls, {[styles.player__controls_hidden]: !isStarted})}>
        <CustomButton
          className={classNames('customButton_player', styles.player__button, styles.player__button_play)}
          isIcon={"true"}
          img={
            isPlay
              ? "http://sb.peppers-studio.ru/storybook-images/player/pause.svg"
              : "http://sb.peppers-studio.ru/storybook-images/player/play.svg"
          }
          onClick={() => setIsPlay(!isPlay)}
        />
        <div className={classNames(styles.player__line)}>
          <CustomProgress
            progressChanged={progress => {
              const target = videoRef.current || audioRef.current;
              if (!target) return;
              target.currentTime = target.duration * progress;
            }}
            isVertical={false}
            value={timeLine}
          />
        </div>
        <CustomButton
          className={classNames('customButton_player', styles.player__button, styles.player__button_stop)}
          isIcon={"true"}
          img={"http://sb.peppers-studio.ru/storybook-images/player/stop.svg"}
          onClick={() => {
            const target = videoRef.current || audioRef.current;
            target.currentTime = 0;
            target.load()
            setIsPlay(false);
            setIsStarted(false);
            if (onPlayChange){
              onPlayChange(false)
            }
          }}
        />
        <div ref={timeRef} className={classNames(styles.player__time)}>
          {"00:00/00:00"}
        </div>
      </div>
    </div>
  );
});
export default Player;
Player.propTypes = {};
