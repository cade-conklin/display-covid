import React from 'react';
import './index.css';
class Card extends React.Component {
    render() {
      return (
        <div className="card" onClick={this.clickFunction}>
          <div className="container">
            <h4><b>{this.props.state_abbreviation}</b></h4>
            <p>{this.props.state_full_name}</p>
          </div>
          {/* TODO */}
        </div>
      );
    }
    clickFunction() {
      alert(this.props.state_abbreviation, this.props.state_full_name);
    }
  }

  export default Card;