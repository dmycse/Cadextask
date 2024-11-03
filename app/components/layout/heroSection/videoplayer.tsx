"use client";

import {useState, useEffect} from "react";
import ReactPlayer from 'react-player/youtube'
import { YOUTUBE } from "@/app/components/constants";

export default function VideoPlayer() {

  let [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
      {isClient && 
        <>
          <ReactPlayer
            width="100%"
            height="100%"
            url={YOUTUBE.VIDEO}
            controls={true}
            light={true}
            pip={true}
          />
          <source src={YOUTUBE.VIDEO} type="video/mp4" />
        </>
      }
    </>
  );
};