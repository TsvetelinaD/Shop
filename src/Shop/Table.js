import React from 'react';
import {
    Link
} from "react-router-dom";
import './shop.css';
import AddProduct from './AddProduct.js';

export default function Table({ allProducts, setProducts }) {

    return (
        <div>
            <table>
                <caption>Products</caption>
                <tbody>
                    <tr>
                        <th>Type</th>
                        <th>Colour</th>
                        <th>Size</th>
                        <th>Details</th>
                    </tr>
                    {allProducts.map((p, index) => {
                        return <tr key={index}>
                            <td>{p.type}</td>
                            <td>{p.color}</td>
                            <td>{p.size}</td>
                            <td>
                                <Link to={`/product/${index}`} >
                                    Show
                                </Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <AddProduct allProducts={allProducts} setProducts={setProducts} />
        </div >
    )
}