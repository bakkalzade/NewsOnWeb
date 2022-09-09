import { render } from "@testing-library/react";
import { Component } from "react";
import axios from "axios";

class Home extends Component {
  
  render() {
    return (
      <div>
        <div className="container">

          <h4 className="center">Home</h4>
          <p>söz gümüşse sükut altındır.</p>

        </div>
      </div>)
  }

};

export default Home;