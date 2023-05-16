import React from 'react';
import '../RightSide/rightSide.css';
import ShareCause from '../ShareCause/ShareCause';

function RightSide() {
  return (
    <div className='main-container'>
        <div className="recent-donation">
            <h3>RECENT DONATIONS</h3>
            <div className="recent-donation-container">
                <div className="recent-donation-image">
                    <img src="./Images/user.png" alt="user.png" />
                </div>
                <div className="recent-donation-details">
                    <h3 className='donation-price'>500 Rs.</h3>
                    <span className='donation-person'>Drishti</span> <span className='donation-time'>1 Hour ago</span>
                    <p>God bless you</p>
                </div>
            </div>
            <div className="recent-donation-container">
                <div className="recent-donation-image">
                    <img src="./Images/user.png" alt="user.png" />
                </div>
                <div className="recent-donation-details">
                    <h3 className='donation-price'>500 Rs.</h3>
                    <span className='donation-person'>Drishti</span> <span className='donation-time'>1 Hour ago</span>
                    <p>God bless you</p>
                </div>
            </div>
            <div className="recent-donation-container">
                <div className="recent-donation-image">
                    <img src="./Images/user.png" alt="user.png" />
                </div>
                <div className="recent-donation-details">
                    <h3 className='donation-price'>500 Rs.</h3>
                    <span className='donation-person'>Drishti</span> <span className='donation-time'>1 Hour ago</span>
                    <p>God bless you</p>
                </div>
            </div>
            <div className="recent-donation-container">
                <div className="recent-donation-image">
                    <img src="./Images/user.png" alt="user.png" />
                </div>
                <div className="recent-donation-details">
                    <h3 className='donation-price'>500 Rs.</h3>
                    <span className='donation-person'>Drishti</span> <span className='donation-time'>1 Hour ago</span>
                    <p>God bless you</p>
                </div>
            </div>
        </div>
        <div className="share-cause">
            <ShareCause/>
        </div>

    </div>
  )
}

export default RightSide