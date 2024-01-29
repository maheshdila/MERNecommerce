// ProductDetails.js
import { useParams } from 'react-router-dom';
const  ProductDetails:React.FC =()=>{
    const { id } = useParams();
    // Now 'id' contains the value of the 'id' parameter from the URL
    console.log('Product ID:', id);

    return(
        <>
          <h1>ProductDetails</h1>
        </>
    )
}

export default ProductDetails;