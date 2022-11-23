import React, { useState } from 'react'
import { Graph } from '../Components/Graph';
import { ProductRadar } from '../Components/ProductRadar';

const Scrape = () => {
  const [Categ, setCateg] = useState("T.V")
  const categories=["All","Best Seller","T.V","Electronics","Fashion","Mobiles","Bean Bag","Furniture","Tablet","Books","Movie Ticket","Groceries","Home Furnishing","Jewely","Footwear & Shoes","Clothing & Apparel"];
  const Descpoint=["Resolution: HD Ready (1366x768) | Refresh Rate: 50 hertz","Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices","Sound output: 10 Watts Output I 2 Speakers | DTS Virtual:X | Sound Type : Down Firing","Smart TV Features: Web OS Smart TV | Wi-Fi | Home Dashboard | Screen Mirroring | Mini TV Browser | Multi-Tasking | Office 365, Set WXHXD (with Stand ) mm - 739 x 472 x 168","Display: Active HDR | Display Type: Flat | BackLight Module: Slim LED","Warranty Information: 1 Year LG India Comprehensive Warranty and additional 1 year Warranty is applicable on panel/module from the date of purchase","Installation : For requesting installation/wall mounting/demo of this product once delivered, please directly call LG support (Please visit LG Website for Toll Free Numebrs) and provide product's model name as well as seller's details mentioned on the invoice"]
  return (
    <div className="analytics">
      <div className="heading">
        <div>

        <h2>Hi! User &#128075;</h2>
        <p>Choose from handpicked Bestseller categories</p>
        </div>
        <div className="Graph">
          <p>Most Selling Products on dominant Ecommerce</p>
          <Graph/>
        </div>
      </div>
      <div className="mainsection">
        <div className="searchbar">
          <p>Search product here for comparison!</p>
          <input type="text" placeholder='Search'/>
          {/* <i class="fa fa-search"></i> */}
        </div>
        <div className="categories">
          {categories.map((category)=>
          <button onClick={()=>setCateg(category)} >
            {category}
          </button>
          )}
          
          <p>Current Category: <span> {Categ}</span></p>
        </div>
        
        <div className="productdetail">
          <h2>LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC</h2>
          <h4>Comapany: L.G</h4>
          <p>Product Detail</p>
          <p>This LG Smart TV comes equipped with a host of impressive features to delight your senses. While its Dynamic Color Enhancer produces vivid and lifelike colors on the screen, the LG WebOS feature lets you watch shows and movies from your favourite streaming services, such as Netflix and Disney+Hotstar. Also, the DTX Virtual:X technology delivers multi-dimensional sound to ensure an immersive listening experience.</p>
          <ul>
            {
              Descpoint.map((point)=>
                <li>{point}</li>
              
              )
            }
          </ul>
          <div className="price">
          <h2>Price on Amazon: 13390</h2>
          <h2>Price on Flipcart: 13390</h2>
          <p>Current Price Difference : 0</p>
          </div>
          <div className="Analytics">
            <p>Performance based on Review</p>
            <ProductRadar/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scrape