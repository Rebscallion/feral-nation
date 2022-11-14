import { useAxios } from 'use-axios-client'

import heroImage from '../img/eventHero.svg';

const baseURL = process.env.REACT_APP_WP_API_BASEURL

const AllEvents = () => {
    const endpoint = `${baseURL}event?_embed`
    const { data: events, error, loading } = useAxios({ url: endpoint })

    //check for returned news posts
    if (loading)
        return (
            <p>Loading...</p>
        )
    if (!events) return "No posts found"
    if (error) return "Error"

    const showEvents = events.map((event, index) => {
        // check if the featured image exists, if not then use a placeholder
        const GetImageOrPlaceHolder = () => {
            if (event._embedded['wp:featuredmedia']) {
                return (
                    <img src={event._embedded['wp:featuredmedia'][0].source_url} alt={event.title.rendered} />
                )
            } else {
                return (
                    <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="placeholder" />
                )
            }
        }

        return (
            <div id="event" key={index}>
                <GetImageOrPlaceHolder />
                <h3>{event.title.rendered}</h3>
                <hr></hr>
                <h4>{event.acf.date}</h4>
                <h4>{event.acf.location}</h4>
                <p>{event.acf.event_details}</p>
            </div>
        )
    })

    return (
        showEvents
    )
}

const Events = () => {
    return (
        <>
            <div id="event-hero"><img src={heroImage} alt="hero-img"></img></div>
            <div id="event-gallery">
                <h2>Upcoming Events</h2>
                <div id="gallery">
                    <AllEvents />
                </div>
            </div>
        </>
    )
}

export default Events