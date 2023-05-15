import React from "react";
import '../Container1/container1.css'
export default function Container1() {
  return (
    <div class="container-wrapper">
      <div class="section1-para">
        <p>
          {" "}
          India, the land of abundant agricultural resources, is facing a
          startling reality. Despite being the second-largest producer of food
          on the planet, it is ranked a dismal 107th out of 121 countries in
          terms of food hunger crises. The situation is alarming, to say the
          least. Adding fuel to the fire is the fact that every year, a whopping
          70 million tonnes of food, valued at a staggering 95000 crores, goes
          to waste. That's nearly half the amount of the value of food security
          that the Indian government provides for its impoverished citizens.
          It's a grave concern that demands urgent attention. There are numerous
          factors that contribute to food wastage in India, including climate
          disasters, poor infrastructure, and distribution systems. However, we
          will focus on the avoidable factors.
        </p>
        <p class="section1-para-second">
          There are numerous factors that contribute to food wastage in India,
          including climate disasters, poor infrastructure, and distribution
          systems. However, we will focus on the avoidable factors.
        </p>
      </div>
      <div class="section2-form">
        <div class="form-part1">
          <h3>Join Us</h3>
        </div>
        <div class="form-part2">
          <p>
            Become a food warrior and rescue leftover food and save lives of
            millions
          </p>
          <div class="form-part2-input">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Mob. No." />
            <button>JOIN US</button>
          </div>
        </div>
      </div>
    </div>
  );
}
