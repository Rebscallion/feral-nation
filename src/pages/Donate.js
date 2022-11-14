import { useAxios } from 'use-axios-client'


const baseURL = process.env.REACT_APP_WOO_BASEURL

const Donate = () => {
    const endpoint = `${baseURL}products/?_embed`

    const { data: products, error, loading } = useAxios({ url: endpoint })

    if (loading)
        return (
            <p>Loading...</p>
        )
    if (!products) return "No data found"
    if (products.length === 0) return "No products found";
    if (error) return "Error"

    console.log(products);
    const showProducts = products.map((product, index) => {
        return (
            <div id="donate-page" key={index}>
                <div id="give-little">
                    <div id="product-img"><img src={product.images[0].src} alt={product.name} /></div>
                    <h2>{product.name}</h2>
                    <div id="description" dangerouslySetInnerHTML={{ __html: product.description }} />
                    <a href={product.add_to_cart.url} className="button">{[product.add_to_cart.text]}</a>
                </div>
            </div>
        )
    })

    return showProducts
}

export default Donate