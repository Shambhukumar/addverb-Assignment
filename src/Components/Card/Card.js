import "./Card.scss";
const Card = (props) =>{
    const {name, flags} = props.contry;
    return(
      <div className='Card' onClick={()=> props.ModdleToggle(props.contry)}>
          <div className="Card-flag"><img src={flags.svg} alt={name.common+" Flag"} /></div>
          <div className="Card-name">{name.common}</div>
      </div>
    )
  }

  export default Card;