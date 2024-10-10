// import { createContext, useEffect, useRef, useState } from "react";
// import { songsData, todaysHits } from "../assets/assets";

//  export const PlayerContext = createContext();

// const PlayerContextProvider = (props)=>{

//     const audioRef = useRef();
//     const seekBg = useRef();
//     const seekBar = useRef();

//     const [track,setTrack] = useState(songsData[0]);
//     const [playBtnStatus,setPlayBtnStatus] = useState(false);
//     const [time,setTime] = useState({
//         currentTime:{
//             second:0,
//             minute:0
//         },
//         totalTime:{
//             second:0,
//             minute:0
//         }
//     })

//     const play =()=>{
//         audioRef.current.play();
//         setPlayBtnStatus(true)
//     }
//     const pause =()=>{
//         audioRef.current.pause();
//         setPlayBtnStatus(false)
//     }

//     const playWithId = async (id)=>{
//         // await setTrack(todaysHits[id]);
//         await setTrack(songsData[id]);
//         await audioRef.current.play();
//         setPlayBtnStatus(true);
//     }

//     const previous = async()=>{
//         if(track.id>0){
//             await setTrack(songsData[track.id-1]);
//             await audioRef.current.play();
//             setPlayBtnStatus(true);
//         }
//     }
//     const next = async()=>{
//         if(track.id<songsData.length-1){
//             await setTrack(songsData[track.id+1]);
//             await audioRef.current.play();
//             setPlayBtnStatus(true);
//         }
//     }

//     const seekControl = async(event)=>{
//        // console.log(event) // check in event-native event-offsetX

//         audioRef.current.currentTime = ((event.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)

//     }

//     const contextValue ={
//         audioRef,
//         seekBar,
//         seekBg,

//         track,setTrack,
//         playBtnStatus,setPlayBtnStatus,
//         time,setTime,

//         play,pause,

//         playWithId,
//         previous,next,
//         seekControl
//     }

    

//     useEffect(()=>{
//         setTimeout(()=>{
//             audioRef.current.ontimeupdate = () => {
//                 seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
//                 setTime({
//                     currentTime:{
//                         second:Math.floor(audioRef.current.currentTime%60),
//                         minute:Math.floor(audioRef.current.currentTime/60)
//                     },
//                     totalTime:{
//                         second:Math.floor(audioRef.current.duration%60),
//                         minute:Math.floor(audioRef.current.duration/60)
//                     }
//                 })
//             }
//         },1000)
//     }),[audioRef]

//     return (
//         <PlayerContext.Provider value ={contextValue}>
//             {props.children}
//         </PlayerContext.Provider>
//     )
// }

// export default PlayerContextProvider;





import { createContext, useEffect, useRef, useState } from "react";
import { songsData, todaysHits } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[9]);  // Default to songsData
    const [playBtnStatus, setPlayBtnStatus] = useState(false);
    const [currentSource, setCurrentSource] = useState('songsData'); // To track the current array
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 }
    });

    const play = () => {
        audioRef.current.play();
        setPlayBtnStatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayBtnStatus(false);
    };

    const playWithId = async (id, source = 'songsData') => {
        // Switch between the arrays based on the source
        if (source === 'songsData') {
            await setTrack(songsData[id]);
        } else if (source === 'todaysHits') {
            await setTrack(todaysHits[id]);
        }
        await audioRef.current.play();
        setPlayBtnStatus(true);
        setCurrentSource(source);  // Track which source is being played
    };

    const previous = async () => {
        if (track.id > 0) {
            const newId = track.id - 1;
            if (currentSource === 'songsData') {
                await setTrack(songsData[newId]);
            } else {
                await setTrack(todaysHits[newId]);
            }
            await audioRef.current.play();
            setPlayBtnStatus(true);
        }
    };

    const next = async () => {
        if (
            (currentSource === 'songsData' && track.id < songsData.length - 1) ||
            (currentSource === 'todaysHits' && track.id < todaysHits.length - 1)
        ) {
            const newId = track.id + 1;
            if (currentSource === 'songsData') {
                await setTrack(songsData[newId]);
            } else {
                await setTrack(todaysHits[newId]);
            }
            await audioRef.current.play();
            setPlayBtnStatus(true);
        }
    };

    const seekControl = async (event) => {
        audioRef.current.currentTime = ((event.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    };

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,

        track,
        setTrack,
        playBtnStatus,
        setPlayBtnStatus,
        time,
        setTime,

        play,
        pause,

        playWithId,
        previous,
        next,
        seekControl
    };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                });
            };
        }, 1000);
    }, [audioRef]);

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
