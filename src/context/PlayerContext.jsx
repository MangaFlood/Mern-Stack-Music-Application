import React, { createContext, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

// Create a new context
export const PlayerContext = createContext();

// Define the provider component
const PlayerContextProvider = (props) => {
    // Define the context value

    const audioRef = useRef();
    const seekbg = useRef();
    const seekBar = useRef();
    
    const [track, setTrack] = useState(songsData[0]);
    const [playing, setPlaying] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            seconds: 0,
            minutes: 0,
        },
        totalTime: {
            seconds: 0,
            minutes: 0,
        }
    });



    // logic for the functioning of the play and pause button

    const start = () => {
        audioRef.current.play();
        setPlaying(true);
    }
    const stop = ()=> {
        audioRef.current.pause();
        setPlaying(false);
    }



    // logic to play any song of your choice by selection it

    const playById = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlaying(true);
    }



    // logic for the functioning of the previous and next button

    const previous = async () => {
        if(track.id > 0){
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlaying(true)
        }
    }
    const next = async () => {
        if(track.id < songsData.length - 1){
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlaying(true)
        }
    }



    // logic for the suffle button

    const suffle = async () => {
        await setTrack(songsData[Math.floor(Math.random() * songsData.length)])
        await audioRef.current.play();
        setPlaying(true);
    }



    // logic for the functioning of the loop button

    const loop = () => {
        if (playing == true){
            audioRef.current.loop();
        }
    }


    // Sidebar Play Logic

    const sideBrPlay = async (e) => {
        console.log(e)
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekbg.current.offsetWidth)*audioRef.current.duration
    }

    
    const contextValue = {
        // Add any state or functions you want to provide to the context

        audioRef,
        seekbg,
        seekBar,
        track, setTrack,
        playing, setPlaying,
        time, setTime,
        start, stop,
        playById,
        previous,next,
        suffle,
        loop,
        sideBrPlay
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
