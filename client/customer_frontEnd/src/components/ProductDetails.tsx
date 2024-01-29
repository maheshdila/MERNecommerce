import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AxiosInstance from '../config/axiosInstance';

interface Product {
    _id: string,
    name: string,
    description: string,
    image: string,
    unitPrice: number,
    qtyOnHand: number
}

const ProductDetails: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await AxiosInstance.get(`/products/find-by-id/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div>
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <img src={product.image} alt={product.name} />
                    <p>Unit Price: ${product.unitPrice}</p>
                    <p>Quantity on Hand: {product.qtyOnHand}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductDetails;
