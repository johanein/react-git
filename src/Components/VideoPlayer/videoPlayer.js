
import React, { memo, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import styles from './videoPlayer.module.css'

const VideoPlayer = memo((props)=>{
    const [msg, setMsg] = useState('here it will come')

    const callBackFunction = (msg)=>() => {
        setMsg(msg)
    }
    
    return (
        <>
        <ReactPlayer 
        url='https://youtu.be/28ZbeLWmfiQ?list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM' 
        width = {720}
        height = {480}
        controls 
        // playing
        onReady={callBackFunction('onReady')}
        onStart={ callBackFunction('onStart')}
        onPlay={ callBackFunction('onPlay')}
        onProgress={ callBackFunction('onProgress')}
        onDuration={ callBackFunction('onDuration')}
        onPause={ callBackFunction('onPause')}
        onBuffer={ callBackFunction('onBuffer')}
        onBufferEnd={ callBackFunction('onBufferEnd')}
        onSeek={ callBackFunction('onSeek')}
        onEnded={ callBackFunction('onEnded')}
        onError={ callBackFunction('onError')}
        onEnablePIP={ callBackFunction('onEnablePIP')}
        onDisablePIP={ callBackFunction('onDisablePIP')}
        />
        <h1 id={styles.h1Tag}>{msg}</h1>
        </>
    )
})

export default VideoPlayer
