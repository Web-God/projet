import logo from './../Logo_Republique.png';
import logo2 from './../logo-yellow.jpg';
import arrowright from './../assets/img/arrow_right_thin.png';
import crossicon from './../assets/img/x_icon.png'
const Leftside = () =>{
    return (
        <div className="container__leftside">
            <img className="container__leftside-logo" src={logo} alt="" />
            <input className="container__leftside-clock" type="text" placeholder="00 : 09" value="" />
            <div className="content-btn">
            <div className="start" id="btnstart">Commencer</div><div className="start-submit" id="start-submit"><img src={crossicon} alt="" /></div>
            </div>
                <div className="lucky-label">Je tente ma chance</div>
            <div className="content-btn">
                <input className="lucky" id="lucky" type="text" id="lucky" name="lucky" minlength="4" maxlength="40" size="10" placeholder="Maradona" />
                <div className="lucky-submit" id="lucky-submit"><img src={arrowright} alt="" /></div>
            </div>
            <div className="content-btn">
            <div className="tips" id="btntips">Un indice ?</div><div className="tips-submit" id="tips-submit"><img src={arrowright} alt="" /></div>
            </div>
        </div>
    )
}
export default Leftside