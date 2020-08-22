import React from "react";
import "./styles.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>今日のえさ</h1>
        <img src="../public/ranchu.png" alt="ranchu" />
        <br />
        <Button variant="primary" onClick={this.select_shop}>
          君に決めた！
        </Button>
        <Select />
      </React.Fragment>
    );
  }
}

// dbアクセス、店の名前、駅からの時間、星の数、ジャンルを表示したい
select_shop = () => {
  console.log("hi");
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      esa: "何にしようかな〜"
    };
  }

  render() {
    return <p>{this.state.esa}</p>;
  }
}
