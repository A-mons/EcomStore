import React from 'react';
import Rating from '../components/Rating';
import data from '../data';
import { Link } from 'react-router-dom';

export default function ProductScreen(props) {
    const product = data.products.find((prd) => prd._id === props.match.params.id)
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <div>
            <Link to="/">Back To Result</Link>
            <div className="row top">
                <div className="col-2">
                    <img className='large' src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li><h1>{product.name}</h1></li>
                        <li><Rating rating={product.rating} numReview={product.numReview} /></li>
                        <li>Price : ${product.price}</li>
                        <li>Description :<p>{product.description}</p></li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='row'>
                                    <div>Price</div>
                                    <div classname='price'>${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ?
                                            (<span className='success'>In Stock</span>)
                                            :
                                            (<span className='failure'>Unavailable</span>)
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className='primary block'>Add To Cart</button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}