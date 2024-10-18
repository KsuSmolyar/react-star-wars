import React, { useEffect, useRef, VideoHTMLAttributes } from "react";
import styles from "./UiVideo.module.css";
import classNames from "classnames";
import video from "./video/han-solo.mp4";

type UiVideoType = VideoHTMLAttributes<HTMLVideoElement> & {
  src?: string;
  className?: string;
  speed?: number;
}
export const UiVideo = React.memo<UiVideoType>(({src, className, speed=1, ...props}) => {
  const classes = classNames(styles.video, className);

  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    if(videoRef.current) {
      videoRef.current.playbackRate = speed
    }
  }, [])

  return (
    <video 
      ref={videoRef}
      className={classes} 
      loop
      autoPlay
      muted
      {...props} 
      >
      <source src={src ?? video}/>
    </video>
  )
})
