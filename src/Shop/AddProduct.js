import React, { useState } from 'react';
import './shop.css';

export default function AddProduct({ setProducts }) {
    const allColors = ['black', 'white', 'red', 'green', 'blue'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', '36', '37', '38', '39', '40', '41', '42', '43'];
    const [newProduct, setNewProduct] = useState({
        type: '',
        gender: '',
        name: '',
        color: '',
        size: '',
    });

    newProduct.defaultProps = {
        type: '',
        gender: '',
        name: '',
        color: 'black',
        size: 'XS',
    }

    const isDisabled = (newProduct.type === '' || newProduct.gender === '' || newProduct.name === '' || newProduct.color === '' || newProduct.size === '');

    return (
        <div className='form'>
            <h3>Add product</h3>
            <label className="required">Product type</label>
            <input onChange={(event) => {
                setNewProduct((product) => ({ ...product, type: event.target.value }));
            }}
            />

            <label>Is it premium?</label>
            <div>
                <input className="checkbox" type="checkbox" onClick={() => {
                    if (newProduct.isPremium === "yes") {
                        setNewProduct((product) => ({ ...product, isPremium: "no" }))
                    } else {
                        setNewProduct((product) => ({ ...product, isPremium: "yes" }))

                    }
                }}
                />
                <label className="isPremium">yes</label>
            </div>

            <label className="required">Gender</label>
            <div>
                <input className="checkbox" type="radio" name="radioButton" onClick={() => {
                    setNewProduct((product) => ({ ...product, gender: "female" }))
                }}
                />
                <label className="gender">female</label>
            </div>
            <div>
                <input className="checkbox" type="radio" name="radioButton" onClick={() => {
                    setNewProduct((product) => ({ ...product, gender: "male" }))
                }}
                />
                <label className="gender">male</label>
            </div>
            <div>
                <input className="checkbox" type="radio" name="radioButton" onClick={() => {
                    setNewProduct((product) => ({ ...product, gender: "other" }))
                }}
                />
                <label className="gender">other</label>
            </div>

            <label className="required">Add name</label>
            <input onChange={(event) => {
                setNewProduct((product) => ({ ...product, name: event.target.value }));
            }} />

            <label className="required">Add colour</label>
            <select onClick={(event) => {
                setNewProduct((product) => ({ ...product, color: event.target.value }));
            }}>
                {allColors.map((color, index) => {

                    return <option value={color} key={index}>{color}</option>
                })}
            </select>

            <label className="required">Add size</label>
            <select onClick={(event) => {
                setNewProduct((product) => ({ ...product, size: event.target.value }));
            }}>
                {sizes.map((size, index) => {
                    return <option value={size} key={index}>{size}</option>
                })}
            </select>

            <button disabled={isDisabled} type="submit" className='addButton' onClick={() => {
                setProducts((allProducts) => ([...allProducts, newProduct]));
            }}>Add</button>
        </div>
    )
}