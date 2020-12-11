import React, { useState ,useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase'
function App() {
  const[reels,setReels]=useState([]);
  useEffect(() => {
      db.collection('reels').onSnapshot(snapshot =>(
        setReels(snapshot.docs.map(doc => doc.data()
        ))
      ))
      }, [])
  return (
    <div className="App">
        <div className="app__top">
          <img
          className="app__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
          alt=""
          ></img>
        </div>
        <div className="app__title">
        <h1>Instagram Reels Clone with REACT JS</h1>
        </div>
        <div className="app__videos">
          {reels.map(({url,shares,channel,likes,avatarSrc,song}) =>(
            <VideoCard url={url}
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song}  />
          ))}
        </div>
    </div>
  );
}

export default App;
