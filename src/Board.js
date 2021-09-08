import React from 'react';
import './index.css';
import Card from './Card';
class Board extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        first_name: "",
        last_name: "",
        full_name: "",
        team_name: "",
        doneAPI: false,
      };
    }

    renderCard(i) {
      return(
          <Card state_abbreviation={"OR"} state_full_name={"Oregon"}/>
      );
    }

    clickFunction() {
      alert("Clicked");
    }

    myfunction() {
      fetch('http://localhost:5000/api')
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            console.log(Object.keys(data).length);
            for (let i = 0; i < data.length; i++) {
              console.log(data[i]);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    createTable = () => {
        let table = []
        if (!this.state.doneAPI) {
          this.myfunction();
        }
    
        // Outer loop to create parent
        for (let i = 0; i < 50; i++) {
          let children = []
          console.log("Herer");
            children.push(this.renderCard(i))
          //Create the parent and add the children
          table.push(<div className="board-row">{children}</div>)
        }
        return table
      }

    render() {
      const status = 'COVID DATA FOR UNITED STATES';
  
      return (
        <div>
          <div className="status">{status}</div>
          {this.createTable()}
        </div>
      );
    }
  }

  export default Board;