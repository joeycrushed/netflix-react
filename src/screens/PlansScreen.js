import React, { useState, useEffect } from 'react'
import db from '../firebase'

function PlansScreen() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        db.collection('products').where('active', '==', true)
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection
                ("prices").get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceID : price.id,
                        priceData : price.data()
                    }
                })
            });
            setProducts(products)
        })
    }, [])

    console.log(products)
    // 1.17.47

    return (
        <div className="plansScreen">
            {Object.entries(products).map(([productID, productData]) => {
                // add some logic to check if user sub is active
                return (
                    <div className="plansScreen__plan">
                        <div className="plansScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                            <button>
                                Subscribe
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen
