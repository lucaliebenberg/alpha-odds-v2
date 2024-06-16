import React, { useState, useEffect } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";

const TokenSale = ({ buyToken, tokenSale }) => {
  const [nToken, setNToken] = useState(1);
  // const [percentage, setPercentage] = useState();

  // useEffect(() => {
  //   const calculatePercentage = () => {
  //     const tokenSold = tokenSale?.tokenSold ?? 0;
  //     const tokenTotalSupply = tokenSale?.tokenTotalSupply * 1 ?? 1;

  //     console.log(tokenSold);
  //     console.log(tokenTotalSupply);

  //     const percentageNew = (tokenSold / tokenTotalSupply) * 100;
  //     console.log(percentageNew);

  //     if (tokenTotalSupply === 0) {
  //       console.error(
  //         "Token sale balance is zero, cannot calculate percentage."
  //       );
  //     } else {
  //       setPercentage(percentageNew);
  //       console.log(`Percentage sold: ${percentageNew}%`);
  //     }
  //   };

  //   // Call the calculatePercentage function immediately when the component mounts
  //   calculatePercentage();

  //   const timer = setTimeout(calculatePercentage, 2000);

  //   return () => clearTimeout(timer);
  // }, [tokenSale]);

  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [selectedContractIndex, setSelectedContractIndex] = useState(0);
  const [contracts, setContracts] = useState([]);
  const [outcome, setOutcome] = useState(null);
  const [amount, setAmount] = useState(0);

  // useEffect(() => {
  //   const loadWeb3 = async () => {
  //     if (window.ethereum) {
  //       const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
  //       setProvider(web3Provider);
  //       const contractInstance = new ethers.Contract(contractAddress, abi, web3Provider.getSigner());
  //       setContract(contractInstance);
  //     }
  //   };
  //   loadWeb3();
  // }, [contractAddress, abi]);

  const fetchContracts = async () => {
    if (contract) {
      const contractCount = await contract.numContracts();
      const contractList = [];
      for (let i = 0; i < contractCount; i++) {
        const contractDetails = await contract.getContract(i);
        contractList.push(contractDetails);
      }
      setContracts(contractList);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, [contract]);

  const handleBuyShares = async () => {
    if (contract && amount > 0 && outcome !== null) {
      await contract.buyShares(selectedContractIndex, outcome, {
        value: ethers.utils.parseUnits(amount.toString(), "ether"),
      });
    }
  };

  return (
    <section
      id="prediction-market"
      style={{ backgroundColor: "#242421" }}
      data-z-index="1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Prediction Market
              </h4>
              <p className="text-center">
                Wallets are needed to be connected before entering the prediction market
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="prediction_market res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
              <div
                className="market_details text-center animation"
                data-animation="fadeIn"
                data-animation-delay="1s"
              >
                <div className="field_form">
                  <div className="row">
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <label htmlFor="contract-select">Select Contract:</label>
                      <select
                        id="contract-select"
                        className="form-control"
                        onChange={(e) => setSelectedContractIndex(e.target.value)}
                      >
                        {/* {contracts.map((contract, index) => (
                          <option key={index} value={index}>
                            {contract.description}
                          </option>
                        ))} */}
                      </select>
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <label>Select Outcome:</label>
                      <div>
                        <input
                          type="radio"
                          id="yes"
                          value={true}
                          name="outcome"
                          onChange={() => setOutcome(true)}
                        />
                        <label htmlFor="yes">Yes</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="no"
                          value={false}
                          name="outcome"
                          onChange={() => setOutcome(false)}
                        />
                        <label htmlFor="no">No</label>
                      </div>
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <input
                        type="number"
                        required="required"
                        placeholder="Amount (cUSD)"
                        id="amount"
                        min={1}
                        className="form-control"
                        onChange={(e) => setAmount(e.target.value)}
                        name="amount"
                      />
                    </div>
                  </div>
                </div>
                <div className="market_action">
                  <button
                    onClick={handleBuyShares}
                    className="btn btn-default btn-radius animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.4s"
                  >
                    Buy Shares <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSale;
