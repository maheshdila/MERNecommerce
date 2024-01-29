interface DefaultCardData {
    thumbnail: string,
    title: string,
    description: string
    price: number | undefined
}
function DefaultCard(props:DefaultCardData){
    return (
    <div className="card" style={{width: "18rem",height:'30rem' , marginTop:'1rem'}}>
        <div style={{ height: '18rem', objectFit: 'cover', }}>
            <img  src={props.thumbnail} className="card-img-top" alt="..." style={{ height: '18rem', objectFit: 'cover', }} />
        </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <h5 className="card-title_price">{props.price}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
    </div>
)}
export default DefaultCard;