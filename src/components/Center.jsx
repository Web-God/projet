import jim from './President'
let numPres = Math.floor(Math.random()*25);

const Center = ()=>{ 
    return(
        <div className="container__center center_img" style={{backgroundImage: "url("+ jim[numPres].src +")", backgroundRepeat  : 'no-repeat'}}>
            <div className="title_president">
                {jim[numPres].name}


            </div>
            {/* <img className="center_img" src={jim[numPres].src} alt="" /> */}
        </div>
    )
}
export default Center