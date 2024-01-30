import {useNavigate} from "react-router-dom";

interface DefaultCardData {
    _id:string,
    thumbnail: string,
    title: string,
    category:string
    description: string,
    price: number | undefined
}
function DefaultCard(props:DefaultCardData){
    const navigate = useNavigate();
    const redirectToProductDetails = (category,id) => {
        navigate(`/ProductDetails/${category}/${id}`);
    };
    return (

    <div className="card"
        onClick={()=>{
            redirectToProductDetails(props.category, props._id,);
        }}
        style={{width: "18rem",
        height:'36srem' ,
        marginInlineEnd:'0',
        margin:'2rem',
        cursor:'pointer',
        transition: 'transform 0.3s',
        }}
         onMouseOver={(e) => {
             e.currentTarget.style.transform = 'scale(1.1)';
         }}
        // Reset transform on hover out
         onMouseOut={(e) => {
             e.currentTarget.style.transform = 'scale(1)';
         }}>

        <div style={{ height: '18rem', objectFit: 'cover', }}>
            <img  src={props.thumbnail} className="card-img-top" alt="..." style={{ height: '18rem', objectFit: 'cover', }} />
        </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text" style={{ maxHeight: '6rem', overflow: 'hidden' }}>{props.description}</p>
                <h5 className="card-title_price">Rs.{props.price}.00</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary" >Add to Cart</button>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
    </div>
)}
export default DefaultCard;