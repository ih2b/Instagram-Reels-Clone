import React ,{useRef, useState} from 'react'
import './VideoCard.css'
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';
function VideoCard(props) {
    const videoRef = useRef(null);
    const [isVideoPlaying,setIsVideoPlaying]= useState(false);
    const onVideoPress = () =>{
        if(isVideoPlaying){
            //stop
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }else{
            //play
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }
    return (
        <div className='videoCard'>
            <VideoHeader />
            <video 
            ref={videoRef}
            onClick={onVideoPress}
            className='videoCard__player'
            src={props.url}
            alt='IG reel video'
            loop >
            </video>
            <VideoFooter
            channel={props.channel}
            likes={props.likes}
            shares={props.shares}
            avatarSrc={props.avatarSrc}
            song={props.song} />
        </div>
    )
}

export default VideoCard
