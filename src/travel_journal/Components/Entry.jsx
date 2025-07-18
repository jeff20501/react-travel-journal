import locationPng from './images/location-1132647_1280.png'

export function Entry(props){

    return(
        <article className="location-info">
            <section>
                <img className="location-image" src={props.entry.img.src} alt={props.entry.img.alt}></img>
            </section>
            <section className="additional-info">
                <div className='location'>
                    <div>
                        <img className='location-png'   src={locationPng}></img>
                        <p className='location-name'><a href={props.entry.link}>{props.entry.country}</a></p>
                    </div>
                    <a target='_blank' href={props.entry.googleMapsLink}>
                        View on Google Maps:    
                    </a>
                </div>
                <h2>{props.entry.title}</h2>
                <p className='dates'>{props.entry.dates}</p>
                <p>{props.entry.text}</p>
            </section>
        </article>
    )

}