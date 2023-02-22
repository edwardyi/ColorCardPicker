import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    let colorSettings =
      "$bg_color:#f0a\n$theme_color:#fba\n$button_color:#0fb\n$btn_color:#afb\n";

    this.onTxtChange = this.onTxtChange.bind(this);
    this.processTxt = this.processTxt.bind(this);
    this.state = {
      txtSetting: colorSettings,
      colorCards: this.processTxt(colorSettings)
    };
  }

  processTxt(val = "") {
    let settings = val ? val.split("\n") : this.state.txtSetting.split("\n");
    let colorCards = [];
    for (let i = 0; i < settings.length; i++) {
      let name = settings[i].split(":")[0];
      let code = settings[i].split(":")[1];
      if (name.indexOf("color") > 0) {
        colorCards.push({
          name: name,
          code: code,
          cssObject: {
            backgroundColor: code
          }
        });
      }
    }
    return colorCards;
  }

  onTxtChange(e: Event) {
    this.setState({
      txtSetting: e.target.value,
      colorCards: this.processTxt()
    });
  }

  getCards() {
    return this.state.colorCards.map((card, key) => {
      // console.log(card);
      return (
        <li key={key} className="col-sm-4 color-cards">
          <div className="block" style={card.cssObject} />
          <div className="info">
            <div className="name">{card.name}</div>
            <div className="code">{card.code}</div>
          </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Color Picker Tools</h1>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <textarea
              defaultValue={this.state.txtSetting}
              onChange={this.onTxtChange}
              onBlur={this.onTxtChange}
              onKeyUp={this.onTxtChange}
            />
          </div>
          <div className="col-sm-8">
            <ul className="row">{this.getCards()}</ul>
          </div>
        </div>
        <div className="footer">
          Credit To {}
          <a
            className="align-right"
            href="https://www.youtube.com/watch?v=P_Q76_hV1L4"
          >
            Boss, CODING please.
          </a>
        </div>
      </div>
    );
  }
}

export default App;
