const Rightside = (props) =>{
    return (
        <div className="container__rightside">
            <h1 className="title">Mr le Président</h1>
            <input className="container__rightside-score" type="text" placeholder="1000 points" />
            <div className="container__rightside-tips">{props.indice}</div>

        </div>
    )
}
export default Rightside
