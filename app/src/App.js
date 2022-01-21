import React, {useEffect, useState} from 'react';
import './App.scss';
import CandyMachine from './CandyMachine';
import doggos from './assets/doggos.gif';
import Navbar from './Navbar/Navbar';

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const {solana} = window;
      
      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found");
  
          const response = await solana.connect({ onlyIfTrusted: true});
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom wallet!')
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;
  
    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const renderNotConnectedContainer = () => (
    <button
      className='cta-button connect-wallet-button'
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  )
  
  useEffect(() => {
    const onLoad = async () => {
      checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, [])

  return (
    <div className='App'>
      <Navbar />
      <div className='main'>
          <div className='main--text'>
              <h1>TOO LATE TO SAVE DEADIE</h1>
              <p>We are sorry to tell you this but there is no other way. 
              Deadie is gone due to climate change and if we do nothing soon 
              his friends will join him. We think the best way to remember him 
              is as he would have wanted, by having one of his many photos as 
              a profile picture. Don't miss our March 15 release!</p>
          </div>
          <div className='main--showcase'>
              <div className='main--showcase--box'>
                <img src={doggos} className='main--showcase--image'></img>
                <h2 className='main--showcase--text'>SPECIAL</h2>
              </div>
              <div className='main--showcase--box'>
                <img src={doggos} className='main--showcase--image'></img>    
                <h2 className='main--showcase--text'>RARE</h2>
              </div>
              <div className='main--showcase--box'>
                <img src={doggos} className='main--showcase--image'></img>  
                <h2 className='main--showcase--text'>UNCOMMON</h2>
              </div>    
          </div>
          {!walletAddress && renderNotConnectedContainer()}
            {/* Check for walletAddress and then pass in walletAddress */}
          {walletAddress && <CandyMachine walletAddress={window.solana} />}
      </div>
    </div>
    );
};

export default App;
