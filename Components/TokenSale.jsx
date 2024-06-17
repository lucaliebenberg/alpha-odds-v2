import React, { useState, useEffect } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { useStateContext } from "../Context/index";
import { ethers } from "ethers";


const TokenSale = ({ buyToken, tokenSale }) => {
  const [nToken, setNToken] = useState(1);
  const { buyShares, createPredictionMarketContract } = useStateContext();
  const [description, setDescription] = useState("");
  const [endTimestamp, setEndTimestamp] = useState("");
  const [price, setPrice] = useState("");
  const [contractIndex, setContractIndex] = useState(0);
  const [outcome, setOutcome] = useState(true);
  const [amount, setAmount] = useState("");

  const handleBuyShares = () => {
    buyShares(contractIndex, outcome, ethers.utils.parseEther(amount));
  };

  return (
    <section id="predictionMarket" style={{ backgroundColor: '#242421' }} data-z-index="1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Prediction Market
              </h4>
              <p className="text-center">Wallets are needed to be connected before entering the prediction market</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
              <div className="tk_countdown text-center animation token_countdown_bg" data-animation="fadeIn" data-animation-delay="1s">
                <div method="post" name="enq" className="field_form">
                  <div className="row">
                    <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                      <input
                        type="radio"
                        required="required"
                        id="yes"
                        className="form-control"
                        onChange={() => setOutcome(true)}
                        name="outcome"
                      /> Yes
                      <input
                        type="radio"
                        required="required"
                        id="no"
                        className="form-control"
                        onChange={() => setOutcome(false)}
                        name="outcome"
                      /> No
                      <input
                        type="number"
                        required="required"
                        placeholder="Amount"
                        id="amount"
                        className="form-control"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="tk_counter_inner">
                  <a onClick={handleBuyShares} className="btn btn-default btn-radius animation" data-animation="fadeInUp" data-animation-delay="1.4s">
                    Buy Shares
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Optionally add more UI elements */}
        </div>
      </div>
    </section>
  );
};

export default TokenSale;
