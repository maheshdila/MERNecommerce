function DefaultCard(){
    return (
    <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Description of the product goes here.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-success">Buy Now</button>
                </div>
            </div>
    </div>
)}
export default DefaultCard;