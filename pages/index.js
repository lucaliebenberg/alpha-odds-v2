import React from "react";

//INTERNAL IMPORT
import {
  About,
  // ArrowUp,
  Banner,
  // Blog,
  // Client,
  Contact,
  Distribution,
  // Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  // TimeLine,
  TokenSale,
  Booking
} from "../Components/index";
import { useStateContext } from "../Context/index";

const index = () => {
  const {
    transferNativeToken,
    updateTokenSupplySale,
    buyToken,
    currentHolder,
    tokenSale,
    tokenHolders,
    nativeToken,
    balance,
    address,
    setAddress,
    connectWallet,
    loader,
  } = useStateContext();
  return (
    <div class="v_dark" style={{ overflowX: 'hidden' }}>
      <Header
        address={address}
        setAddress={setAddress}
        connectWallet={connectWallet}
      />
      
      <Banner
        transferNativeToken={transferNativeToken}
        updateTokenSupplySale={updateTokenSupplySale}
        buyToken={buyToken} 
        tokenSale={tokenSale}
      />

       {/* About */}
       <Distribution /> 

      {/* Token Sale */}
      <TokenSale buyToken={buyToken} tokenSale={tokenSale} />
      
      <Footer />

      {loader && <Loader />}

    </div>
  );
};

export default index;