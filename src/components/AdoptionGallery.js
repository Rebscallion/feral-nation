import { useAxios } from 'use-axios-client'
import { Link } from 'react-router-dom'

const baseURL = process.env.REACT_APP_WP_API_BASEURL

const AllAdopts = () => {
    const endpoint = `${baseURL}cat_profile?_embed`
    const { data: adoptPosts, error, loading } = useAxios({ url: endpoint })

    //check for returned news posts
    if (loading)
        return (
            <p>Loading...</p>
        )
    if (!adoptPosts) return "No posts found"
    if (error) return "Error"

    const showadoptPosts = adoptPosts.map((post, index) => {
        // check if the featured image exists, if not then use a placeholder
        const GetImageOrPlaceHolder = () => {
            if (post._embedded['wp:featuredmedia']) {
                return (
                    <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
                )
            } else {
                return (
                    <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="placeholder" />
                )
            }
        }

        console.log(adoptPosts);

        return (
            <div id="post" key={index}>
                <Link to={`cat_profile/${post.id}`}>
                    <GetImageOrPlaceHolder />
                    <h3>{post.title.rendered}</h3>
                </Link>
            </div>
        )
    })

    return (
        showadoptPosts
    )
}

const Adoptables = () => {
    return (
        <>
            <div id="to-adopt">
                <h2>Coming Up for Adoption</h2>
                <div id="gallery">
                    <AllAdopts />
                </div>
            </div>
        </>
    )
}

export default Adoptables