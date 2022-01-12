import React from "react";
import Mapbox from "../Mapbox/mapbox";
import "./model.scss";
import CloseSvg from "../Assets/cross.svg";


const Model = (props) => {
  const {
    name,
    flags,
    capital,
    region,
    subregion,
    population,
    borders,
    languages,
    latlng
  } = props.modelData;
 
  return (
    <div className="Model-Container">
        <div className="Model-Container-close"><img src={CloseSvg} alt="close Modle" onClick={() => props.closeModel(false)} /></div>
      <div className="Model-Container-model">
        <ul className="Model-Container-model-text">
          <div className="Model-Container-model-text-name">
            <span className="Model-Container-model-text-name-official">
              {name.official}
            </span>{" "}
            <div className="Model-Container-model-text-name-flag">
              <img src={flags.svg} alt={name.common} />
              <span>{name.common}</span>{" "}
            </div>
          </div>
          <li>Capitol: {capital}</li>
          <li>Region: {region}</li>
          <li>Subregion: {subregion}</li>
          <li>Poputaltion: {population}</li>
          <li>Languages: {Object.values(languages).map((e)=> <span> {e} </span>)}</li>
          <li>
            Borders:{" "}
            {borders ? borders.map((e, el) => <span>{e} </span>) : "NA"}
          </li>
        </ul>
        <div className="Model-Container-model-map">
        <Mapbox lat={latlng[0]} lng={latlng[1]}/>
        </div>
      </div>
    </div>
  );
};

export default Model;
