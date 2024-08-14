import LocationIcon from '../images/location_icon.png';

export default function Card({place}){
    return(
        <section className="card-style">
            <div className="image-container-style">
                <img className="image-style" src={place.imageUrl} />
            </div>
            <div className="card-info-style">
                <div className="card-title-style">
                    <img className="loc-icon-style" src={LocationIcon} />
                    <p>{place.location}</p>
                    <p><a className="google-maps-style" href={place.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <div className="card-body-style">
                    <h1>{place.title}</h1>
                    <p>{place.startDate} - {place.endDate}</p>
                    <p>{place.description}</p>
                </div>
            </div>
        </section>
    )
}