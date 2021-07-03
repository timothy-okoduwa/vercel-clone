import React from "react";
import "./Dev.css";
import photo from "./vercel.png";

const Dev = () => {
  return (
    <div className="hol">
      <div className="yy">
        <div className="write">
          Developers love <text style={{ color: "blue" }}>Next.js</text>,the
          open source
          <br />
          React framework Vercel built together with
          <br />
          Google and Facebook Next.js powers the
          <br />
          biggest website like <text style={{ color: "blue" }}>Twilo</text>,for
          use cases in
          <br />
          <text style={{ color: "blue" }}>e-commerce</text>,
          <text style={{ color: "blue" }}>travel</text>,
          <text style={{ color: "blue" }}>news</text>,and{" "}
          <text style={{ color: "blue" }}>marketing</text>.
        </div>
        <div className="write2">
          Vercel is the best place to deploy any frontend
          <br />
          app. Start by deploying with zero configuration
          <br />
          to our <text style={{ color: "blue" }}>global edge network</text>.
          <text style={{ color: "blue" }}>scale dynamically</text>
          <br />
          to millions of pages without breaking a sweat.
        </div>
        <br />
      </div>
      <div className="hh">
        <div className="pho">
          <img src={photo} alt="image" />
        </div>
        <div className="con">
          <b className="b">Fast Refresh</b>
          <div className="rel">
            {" "}
            Reliable live-editing experience for your UI components.
          </div>
          <br />
          <br />
          <br />
          <b className="b">Flexible Data Fetching</b>
          <div className="rel">
            {" "}
            Connect your pages to any data source,headless CMS, or API and make
            it work in everyone’s dev environment..
          </div>
          <br />
          <br />
          <br />
          <b className="b">Edge on Localhost</b>
          <div className="rel">
            {" "}
            From caching to Serverless Functions, all our cloud primitives work
            perfectly on localhost.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;
