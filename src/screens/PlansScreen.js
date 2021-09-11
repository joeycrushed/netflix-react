import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import db from '../firebase'
import './PlansScreen.css'
import  { loadStripe } from '@stripe/stripe-js'

function PlansScreen() {

    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser)

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

    const loadCheckout = async (priceId) => {
        const docRef = await db
            .collection('customers')
            .doc(user.uid)
            .collection('checkout_session')
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,

            });

            docRef.onSnapshot(async(snap) => {
                const { error, sessionId } = snap.data()

                if (error) {
                    alert(`An error occured: ${error.message}`)
                }
                if (sessionId) {
                    const stripe = await loadStripe(
                        'sk_test_51JXorYG0KEQXDnR8NN27QTUm78r1DWkn0PiMKR51vEymHUnXeLcPAJheIIAPsNHJlYRTi6qzFCxi6Bsxlaeqrsdc00a850Lc7k'
                    )
                    stripe.redirectToCheckout({ sessionId })
                }
            })
    }

    return (
        <div className="plansScreen">
            {Object.entries(products).map(([productID, productData]) => {
                // add some logic to check if user sub is active
                return (
                    <div className="plansScreen__plan">
                        <div className="plansScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen
