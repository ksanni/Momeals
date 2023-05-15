import React from "react";
import '../Navbar2/navbar2.css'

 function Navbar2() {
  return (
    <div class="navbar2-wrapper">
      <div class="navbar2-logo">
        <img src="./Images/Logo.png" alt="Logo.png" />
      </div>
      <div class="navbar2-list">
        <ul>
          <li>Lunchello</li>
          <li>Our Story</li>
          <li>Causes</li>
          <li>Food Warrior</li>
        </ul>
      </div>
      <div class="navbar2-menu">
        <div class="navbar2-menuBar">
          <ul>
            <li>Menu</li>
            <li>Menu</li>
          </ul>
        </div>
        <div class="navbar2-joinBtn">
          <button>Join Us</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar2
