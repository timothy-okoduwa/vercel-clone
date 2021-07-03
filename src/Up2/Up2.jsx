import React from "react";
import "./Up2.css";
import tri from "./tri.png";
const Up2 = () => {
  return (
    <div className="morphy">
      <div className="content">
        <div className="triangle">
          <div className="inner">
            <img src={tri} style={{ height: "40px", width: "50px" }} />
          </div>
        </div>

        <div className="vercel">Vercel</div>
        <div className="holder1">Analytics</div>
        <div className="holder2">Customers</div>
        <div className="holder3">Pricing</div>
        <div className="another">Contact</div>
        <div className="another">Login</div>
        <div className="Sign">Sign up</div>
      </div>
    </div>
  );
};

export default Up2;
