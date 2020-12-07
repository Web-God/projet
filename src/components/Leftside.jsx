import logo from './../Logo_Republique.png';
const Leftside = () =>{
    return (
        <div className="container__leftside">
            <img className="container__leftside-logo" src={logo} />
            <input className="container__leftside-clock" type="text" value="00 : 09" />
        </div>
    )
}
export default Leftside 