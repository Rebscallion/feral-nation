import { useParams } from "react-router-dom"
import { useAxios } from 'use-axios-client'

const baseURL = process.env.REACT_APP_WP_API_BASEURL

const CatProfile = () => {
    const params = useParams();
    const id = params.id;
    const endpoint = `${baseURL}cat_profile/${id}?_embed`

    const { data: profile, error, loading } = useAxios({
        url: endpoint
    })

    if (loading)
        return (
            <p>Loading...</p>
        )
    if (!profile) return "No posts found"
    if (profile.length === 0) return "No results found!";
    if (error) return "Error"

    console.log(profile);

    const Personalities = () => {
        //grab all genre taxonomie endpoints
        const taxonomayEndpoint = profile._links["wp:term"][1].href;

        //grab genre taxonomies
        const { data: taxonomies, error, loading } = useAxios({
            url: taxonomayEndpoint
        })
        if (loading) return "Loading...";
        if (!taxonomies) return "No data...";
        if (taxonomies.length === 0) return "No results found!";
        if (error) return "Error!";

        console.log(taxonomies);
        const renderedTaxonomies = taxonomies.map((profile, index) => {
            return (
                <span className="personality-pill" key={index}>
                    {profile.name}
                </span>
            )
        })

        return renderedTaxonomies
    }

    const Breed = () => {
        //grab all genre taxonomie endpoints
        const taxonomayEndpoint = profile._links["wp:term"][0].href;

        //grab genre taxonomies
        const { data: taxonomies, error, loading } = useAxios({
            url: taxonomayEndpoint
        })
        if (loading) return "Loading...";
        if (!taxonomies) return "No data...";
        if (taxonomies.length === 0) return "No results found!";
        if (error) return "Error!";

        console.log(taxonomies);
        const renderedTaxonomies = taxonomies.map((profile, index) => {
            return (
                <h5 key={index}>
                    {profile.name}
                </h5>
            )
        })

        return renderedTaxonomies
    }

    return (
        <div id="profile">
            <div className="content">
                <img src={profile._embedded['wp:featuredmedia'][0].source_url} alt={profile.title.rendered} />
                <div id="bio">
                    <div id="name-box">
                        <h3>{profile.title.rendered}</h3>
                        <Personalities />
                    </div>
                    <div id="breed"><h5>Breed:</h5><Breed /></div>
                    <h4>Adopt from {profile.acf.location}</h4>
                    <p id="content" dangerouslySetInnerHTML={{ __html: profile.acf.profile }} />
                </div>
            </div>
        </div>
    )
}

export default CatProfile