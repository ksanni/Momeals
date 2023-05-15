import React from 'react'
import '../LeftSide/leftSide.css'
import RightSide from '../RightSide/RightSide'

function LeftSide() {
  return (
    <div className='Container-wrapper'>
        <div className="section1">
            <div className="section1-heading">
                <h1>WHY IT HAPPENS?</h1>
            </div>
            <div className="content-wrapper">
                <ul>
                    <li className='content-wrapper-count'>1.</li>
                    <li><h3>Lack of appropriate planning</h3></li>
                </ul>
                <p>Food wastage often occurs due to purchasing or preparing too much food. When one purchases or prepares more food than is needed, the excess food on the plate ends up going to waste. Leftovers and partially used food also contribute to the food that goes to waste. At times, partially used food is put at the back of the fridge and never reused. Excess purchases can also pass their expiration dates, leading to food that looks, tastes, and smells bad and eventually becomes waste.</p>                
                 
            </div>
            
              <div className="content-wrapper">
                <ul>
                    <li className='content-wrapper-count'>2.</li>
                    <li><h3>Purchase and preparation of too much food</h3></li>
                </ul>
                <p>One of the primary contributors to food wastage is the lack of appropriate planning by consumers. Sometimes people purchase excessive amounts of food without adequately planning when and how it will be prepared and consumed. Coupled with busy schedules, people may change their food preparation plans or forget to use the food on time, leading to food wastage. Expiry of food can also occur due to lack of appropriate planning, and badly prepared food may be discarded, adding to the food waste.</p>
                
            </div>
            <div className="content-wrapper">
                 <ul>
                    <li className='content-wrapper-count'>3.</li>
                    <li><h3>Over-preparation of food in restaurants, hotels, and the foodservices industry</h3></li>
                </ul>
                <p>Restaurants, hotels, and the foodservice industry tend to over-prepare/produce food. While the intention is good in anticipating high customer volume and avoiding running out of the menu, over-preparation often leads to wastage if all the food goes unsold. “Overproduction in the foodservice industry is the leading cause of food wastage, according to DC Central Kitchen, an organization committed to reducing food wastage”.
                The kitchens often produce amounts thought to be enough but most of it is actually not needed, as they lack the ability to quantify the average amount of food consumed.
                Some managers believe producing food in large batches minimizes costs, but in actual fact, it results in more waste as compared to cooking to order or cooking in small batches.
                </p>                
            </div>
            <div className="content-wrapper">
                <ul>
                    <li className='content-wrapper-count'>4.</li>
                    <li><h3>Excess orders while dining out</h3></li>
                </ul>
                <p>Sometimes people order more food than they need while dining out. This is called excess ordering, and it leads to a lot of food being thrown away. It can happen because people think they're hungrier than they actually are, or some restaurants serve very large portions. To help reduce food waste, we need to be careful about how much food we order and eat while dining out.</p>
            </div>
            <div className="content-wrapper">
                <ul>
                    <li className='content-wrapper-count'>5.</li>
                    <li><h3>Lack of knowledge about food storage and preservation</h3></li>
                </ul>
                <p>Lack of knowledge about food storage and preservation can result in spoilage, overbuying, misunderstanding expiration dates, poor storage, and not using leftovers creatively. To prevent these issues and reduce waste, it's important to learn proper techniques for storing and preserving food. Doing so can help us save money and protect the environment as well.</p>                
            </div>
           
           
           
        </div>
        <div className="leftSide-section2">
            <RightSide/>
        </div>
    </div>
  )
}

export default LeftSide