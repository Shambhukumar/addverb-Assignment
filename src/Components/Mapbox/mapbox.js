import React, {useEffect} from 'react'
import mapboxgl from 'mapbox-gl';
import "./mapbox.scss";


const Mapbox = (props) => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZnNkZnNkZnNkZnNkZiIsImEiOiJja3k5ejl3aG8wMGlzMzBvZDlxcXR4MmlxIn0.Xm2GKen9Sx6Zh4WNl1mAtA';
        const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [props.lng, props.lat],
        zoom: 6.5 
        });
    }, [props])
   

    return (
        <div id='map'>
            
        </div>
    )
}

export default Mapbox
