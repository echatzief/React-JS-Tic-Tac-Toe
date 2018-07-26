import React,{Component} from 'react';
import './Winner.css';

class WinnerModal extends Component{
  render(){
    return(
      <div>
        <div id="WinnerMod" style={{display:this.props.display}} className="winnerModal">
          <div className="theText">
            <h1 className="textStyle" >Congratulations !! </h1>
            <h1 className="textStyle" >Winner is: {this.props.winner}</h1>
            <button type="button" className="closeBut" onClick={this.props.hide} style={{color:'white'}}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WinnerModal;
