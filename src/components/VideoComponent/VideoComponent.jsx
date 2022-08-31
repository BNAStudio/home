import React, { useRef } from 'react'
// import PropTypes from 'prop-types'
import css from './VideoComponent.module.css'

const VideoComponent = () => {
    const URL = "./public/assets/videos/lluvia.mp4"
    const videoIntro = useRef()
    const setPlayBack = () => {
        videoIntro.current.playbackRate = 0.7
    }
    return (
        <>
            <video
                ref={ videoIntro }
                onCanPlay={ setPlayBack }
                className={ css.videoComponent }
                type="video/mp4"
                muted
                autoPlay
                loop>
                    <source 
                        src={ URL }
                        id="video-intro" />
            </video>
        </>
    )
}

VideoComponent.propTypes = {
    
}

export default VideoComponent