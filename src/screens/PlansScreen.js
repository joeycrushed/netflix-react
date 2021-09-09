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
            
        </div>
    )
}

export default PlansScreen
