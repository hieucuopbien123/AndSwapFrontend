import React from "react";
import frame2 from "./Frame 2.png";
import frame3 from "./Frame 2 (1).png";
import group from "./Group 13.png";

function App() {
  return (
    <>
      <div style={{
        display: "inline-block", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", backgroundImage: `url(/Group13.png)`,backgroundSize: "contain", height: "fit-content", backgroundRepeat: "no-repeat", backgroundPosition: "center center", position: "relative"
      }}>
        <div style={{height: "72px", width: "72px", display: 'grid', placeItems: 'center', borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.09)"}}>
          <img src={frame2} style={{height: "48px", width: "48px"}}/>
        </div>
        <div style={{width: "5px", height: "900px", background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(46,229,139,0.4) 100%)"}}></div>
        <div style={{height: "72px", width: "72px", display: 'grid', placeItems: 'center', borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.09)"}}>
          <img src={frame3} style={{height: "48px", width: "48px"}}/>
        </div>
        <div style={{position: "absolute", top: "140px", transform: "translateX(calc(50% + 50px))"}}>
          <div style={{border: "1px solid #2EE58B", borderRadius: "20px", padding: "20px", paddingBottom: "10px"}}>
            <div>Q2 - 2023</div>
            <ul>
              <li>Create and build community</li>
              <li>Landing page</li>
              <li>Start AMM Testnet</li>
              <li>Start Retroactive testnet</li>
              <li>Landing page</li>
              <li>Start AMM Testnet</li>
            </ul>
          </div>
        </div>
        <div style={{position: "absolute", top: "500px", transform: "translateX(calc(50% + 50px))"}}>
          <div style={{border: "1px solid #2EE58B", borderRadius: "20px", padding: "20px", paddingBottom: "10px"}}>
            <div>Q2 - 2023</div>
            <ul>
              <li>Create and build community</li>
              <li>Landing page</li>
              <li>Start AMM Testnet</li>
              <li>Start Retroactive testnet</li>
              <li>Landing page</li>
              <li>Start AMM Testnet</li>
            </ul>
          </div>
        </div>
        <div style={{position: "absolute", top: "300px", transform: "translateX(calc(-50% - 50px))"}}>
          <div style={{border: "1px solid #2EE58B", borderRadius: "20px", padding: "20px", paddingBottom: "10px"}}>
            <div>Q2 - 2023</div>
            <ul>
              <li>Create and build community</li>
              <li>Landing page</li>
              <li>Start AMM Testnet</li>
              <li>Start Retroactive testnet</li>
              <li>Landing page</li>
              <li>Start AMM Testnet</li>
            </ul>
          </div>
        </div>
        <div style={{position: "absolute", top: "700px", transform: "translateX(calc(-50% - 50px))"}}>
          <div style={{border: "1px solid #2EE58B", borderRadius: "20px", padding: "20px", paddingBottom: "10px"}}>
            <div>Q2 - 2023</div>
            <ul>
              <li>Create and build community</li>
              <li>Landing page</li>
              <li>Start AMM Testnet</li>
              <li>Start Retroactive testnet</li>
              <li>Landing page</li>
              <li>Start AMM Testnet</li>
            </ul>
          </div>
        </div>
        <div style={{position: "absolute", top: "180px", transform: "translateX(calc(50% - 6px))"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{borderRadius: "50%", backgroundColor: "#2EE58B", width: "12px", height: "12px", position: "relative"}} className="shadowgreen"></div>
            <div style={{width: "44px", height: "2px", backgroundColor: "#2EE58B"}}></div>
          </div>
        </div>
        <div style={{position: "absolute", top: "540px", transform: "translateX(calc(50% - 6px))"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{borderRadius: "50%", backgroundColor: "#2EE58B", width: "12px", height: "12px", position: "relative"}} className="shadowgreen"></div>
            <div style={{width: "44px", height: "2px", backgroundColor: "#2EE58B"}}></div>
          </div>
        </div>
        <div style={{position: "absolute", top: "340px", transform: "translateX(calc(-50% + 6px))"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{width: "44px", height: "2px", backgroundColor: "#2EE58B"}}></div>
            <div style={{borderRadius: "50%", backgroundColor: "#2EE58B", width: "12px", height: "12px", position: "relative"}} className="shadowgreen"></div>
          </div>
        </div>
        <div style={{position: "absolute", top: "740px", transform: "translateX(calc(-50% + 6px))"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{width: "44px", height: "2px", backgroundColor: "#2EE58B"}}></div>
            <div style={{borderRadius: "50%", backgroundColor: "#2EE58B", width: "12px", height: "12px", position: "relative"}} className="shadowgreen"></div>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
