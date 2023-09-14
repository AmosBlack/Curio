import React from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import TranslatedAudio from './translatedAudio';
import './video.css'
// import { Comments } from '.././comments/Comments';

const Player = (props) => {
  const { vidId } = useParams();
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
    // event.target.player.mute()

  }

  const stateChange = (e) => {
    let yt = e.target
    let mAudio = document.getElementById('translatedAudio')
    if (mAudio) {
      mAudio.currentTime = yt.getCurrentTime()
    }
  }

  const playvid = (e) => {
    let yt = e.target
    let mAudio = document.getElementById('translatedAudio')
    if (mAudio) {
      mAudio.load()
      mAudio.currentTime = yt.getCurrentTime()
      mAudio.play()
    }
  }

  const stopvid = () => {
    let mAudio = document.getElementById('translatedAudio')
    if (mAudio) {
      mAudio.pause()
    }
  }

  const playbackchange = (e) => {
    let yt = e.target
    let mAudio = document.getElementById('translatedAudio')
    if(mAudio)
    mAudio.playbackRate = yt.getPlaybackRate()
  }

  return <>
        <div className='youtube'>
          <YouTube onPlaybackRateChange={playbackchange} videoId={vidId} onPlay={playvid} onPause={stopvid} onEnd={stopvid} opts={opts} onStateChange={stateChange} onReady={_onReady} />
          <TranslatedAudio/>
        </div> 
          {/* <Comments /> */}
        </>


}
export default Player;