/*import React, { useEffect, useState } from 'react'
import "./PlanScreen.css"
import db from '../firebase';

function PlansScreen() {
    //asign the  object name form database 
    const [products, setProducts ] = useState ([]);
    useEffect (() => {
        db.colloction("products")
            .where ("active" ,"==" , true)
            .get ()
            .then((querySnapshot) =>{
                const products = {};
                querySnapshot.forEach((price) => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.colloction
                    ("prices").get();
                    priceSnap.docs.forEach((price) => {
                        products[products.Doc].prices = {
                            priceID : price.id,
                            priceData: price.data(),
                        };
                    });
                });
                setProducts(products);
            });
    }, [useEffect]);
  return (
    <div className="planScreens">
        {Object.entries(products).map(([productID,productData]) => {
            //add some logic to check if the user's subscription is active..
            return (
                <div className="plansScreens__plan">
                    <div className="palnScreen__info">
                        <h1>{productsData.name}</h1>
                        <h2>{productsData.description}</h2>
                    </div>
                    <button>Subscribe</button> 
                <div/>
            );
        })}
      
    </div>
  );
}

export default PlansScreen;
*/