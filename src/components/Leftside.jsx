import logo from './../Logo_Republique.png';
import arrowright from './../assets/img/arrow_right_thin.png';
import crossicon from './../assets/img/x_icon.png';
import { useEffect, useState } from 'react';
const Leftside = () => {
    let [seconds, setSeconds] = useState(0);
    let [mins, setMins] = useState(0);
    let intervalId;
    function TimerPres() {
        setSeconds(0);
        setMins(0);
        intervalId = setInterval(() => {
            setSeconds(seconds += 1);
            if (seconds >= 59) {
                seconds = 0;
                setMins(mins += 1);
                console.log("Sec", seconds);
                console.log("Min", mins)
            }

        }, 1000);
        // useEffect(()=>{
        //     intervalId = setInterval(() => {
        //         setSeconds(seconds += 1);
        //         if (seconds >= 59) {
        //             seconds = 0;
        //             setMins(mins += 1);
        //             console.log("Sec", seconds);
        //             console.log("Min", mins)
        //         }

        //     }, 1000);
        // },[])
    }
    function StopTimer() {
        useEffect(() => {
            clearInterval(intervalId);
            console.log("STOP")
        })
    }

    return (
        <div className="container__leftside">
            <img className="container__leftside-logo" src={logo} alt="" />
            <input
                onChange={()=>{
                    console.log("Timer change")
                }}
                className="container__leftside-clock" type="text" placeholder="00 : 09" value={mins + "  :  " + seconds} />
            <div className="content-btn">
                <div
                    onClick={TimerPres}
                    className="start" id="btnstart">Commencer</div>
                <div
                    onClick={TimerPres}
                        // console.log('Stop Timer');
                    
                    className="reset" id="reset"><img src={crossicon} alt="" /></div>
            </div>
            <div className="lucky-label">Je tente ma chance</div>
            <div className="content-btn">
                <input
                    onChange={() => {
                        console.log("Submit President")
                    }}
                className="lucky" id="lucky" type="text" name="lucky" minLength="4" maxLength="40" size="10" placeholder="Maradona" />
                <div className="lucky-submit" id="lucky-submit"><img src={arrowright} alt="" /></div>
            </div>
            <div className="content-btn">
                <div className="tips" id="btntips">Un indice ?</div><div className="tips-submit" id="tips-submit"><img src={arrowright} alt="" /></div>
            </div>
        </div>
    )
}
export default Leftside
