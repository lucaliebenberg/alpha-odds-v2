import React from "react";
import { BsArrowRight } from "react-icons/bs";

// GOVERNACE SECTION
const Distribution = () => {
  return (
    <section id="about"  style={{ backgroundColor: '#242421' }}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="text_md_center">
              <img
                class="animation"
                data-animation="zoomIn"
                data-animation-delay="0.2s"
                src="assets/images/foundation-banner.png"
                alt="aboutimg2"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div>
              <h4
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                About the Prediction Market
              </h4>
              <p
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                This is a market based on the outcome of the Celo DeFi and Trading hackathon. The updated prediction market is regarding whether Alpha Odds will receive prize funding for their 2nd iteration submission. The YES outcome will be executed if ALPHA ODDS does receive a v2 submission prize. The NO outcome will be executed if ALPHA ODDS does not.
              </p>
              <p
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                Once the prediction market reaches the due date, an event will fire off that rewards the wallet owners who betted on the correct outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;