import React from 'react';
import './Highlights.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Highlights = () => {
  return (
    <div className="highlights">
      <div className="container">
        <div className="all_highlights">
          <div className="row">
            <div className="col"> 
              <div className="free_shipping border-start-0 ps-0">
              <div className="icone"> <i className="fas fa-shipping-fast"></i> </div>
                <div className="free_shipping_info">
                  <h5>Free Shipping</h5>
                  <p>Free for $50+ orders</p>
                </div>
              </div>
            </div>

            <div className="col"> 
              <div className="free_shipping">
              <div className="icone"> <i className="fas fa-undo"></i> </div>
                <div className="free_shipping_info">
                  <h5>Easy Returns</h5>
                  <p>14 Days easy return</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="free_shipping">
              <div className="icone"> <i className="fas fa-headset"></i> </div>
                <div className="free_shipping_info">
                  <h5>Fast Support</h5>
                  <p>24/7 Customer support</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="free_shipping border-bottom-0">
              <div className="icone"> <i className="fas fa-tags"></i> </div>
                <div className="free_shipping_info">
                  <h5>Member Discount</h5>
                  <p>Discount for elite members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
