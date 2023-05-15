import React from "react";
import "../Navbar1/navbar1.css";
export default function Navbar1() {
  return (
    <div>
      <div className="navbar1-wrapper">
        <div className="navbar1-email">
          <p>help@momeals.in</p>
        </div>
        <div className="navbar1-handsHelp">
          <ul>
            <li>
              <img
                src="./Images/Handshake Heart.png"
                alt="Handshake Heart.png"
              />
            </li>
            <li>
              <p>One Hand For Others</p>
            </li>
          </ul>
        </div>
        <div class="navbar1-social">
          <ul>
            <li>
              <img
                src="./Images/Phone.png"
                className="navbar1-phonePng"
                alt="Phone.png"
              />
            </li>
            <li>
              <img src="./Images/Instagram.png" alt="Instagram.png" />
            </li>
            <li>
              <img src="./Images/WhatsApp.png" alt="WhatsApp.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
