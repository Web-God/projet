import logo from './../Logo_Republique.png';
import arrowright from './../assets/img/arrow_right_thin.png';
import crossicon from './../assets/img/x_icon.png';
import { useEffect, useState } from 'react';
import medals from './Medals';
import shuffle from './Random'
const Leftside = (props) => {
    let [seconds, setSeconds] = useState(0);
    let [mins, setMins] = useState(0);
    const [stopclock, setStopclock]=useState(false);
    let [lucky, setLucky] = useState('');
    let [tip, setTip] = useState(false);
    let [start, setStart] = useState(false);
    let intervalId;

    // useEffect(() => {
    //     intervalId = setInterval(() => {
    //         setSeconds(seconds += 1);
    //         if (seconds >= 59) {
    //             seconds = 0;
    //             setMins(mins += 1);
    //         }

    //     }, 1000);
    // }, [])

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setSeconds(seconds + 1);
    //     }, 1000);
    //     // clearing interval
    //     return () => clearInterval(timer);
    // });
    function TimerPres() {
        setStart(start = true);
        setSeconds(0);
        setMins(0);

       intervalId = setInterval(() => {
            setSeconds(seconds += 1);
            if (seconds >= 59) {
                seconds = 0;
                setMins(mins += 1);
            }
            else if(stopclock){
                setSeconds(0);
                setMins(0);
                return
            }

        }, 1000);
        return() => clearInterval(intervalId)
    }
    function StopTimer() {
        setSeconds(0);
        setMins(0);
        setStopclock(true)
        clearInterval(intervalId)
    }
    // useEffect(() => {
    //     // clearInterval(intervalId);
    //     console.log("STOP")
    // })
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    function startGame() {
        // https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-1-shuffing-cards
        TimerPres()

        console.log("Start")
    }
    return (
        <div className="container__leftside">
            <img className="container__leftside-logo" src={logo} alt="" />
            <input
                onChange={()=>{
                    console.log("Timer change")
                }}
                className="container__leftside-clock" type="text" placeholder="00 : 09" value={mins + "  :  " + seconds} />
            <h1>Mr le Président</h1>
            <div className="content-btn">
                <div
                    onClick={startGame}
                    className="start" id="btnstart">Commencer</div>
                <div
                    onClick={startGame}
                    className="reset" id="reset"><img src={crossicon} alt="" /></div>
            </div>
            <div className="lucky-label">Je tente ma chance</div>
            <div className="content-btn">
                <input
                    onChange={(e) => {
                      setLucky(e.target.value);
                    }}
                className="lucky" id="lucky" type="text" name="lucky" minLength="4" maxLength="40" size="10" placeholder="Maradona" />
                <div
                onClick={(e)=>{
                        if (lucky === props.name) {
                            console.log(props.name);
                        }
                }}
                className="lucky-submit" id="lucky-submit"><img src={arrowright} alt="" /></div>
            </div>
            <div className="content-btn">
                <div className="tips" id="btntips">Un indice ?</div>
                <div
                onClick = {()=>{
                    setTip(tip = true);
                    if(tip === true){
                        console.log(props.indice.tip1)
                    }
                }
                }
                className="tips-submit" id="tips-submit"><img src={arrowright} alt="" /></div>
            </div>
        </div>
    )
}
export default Leftside
