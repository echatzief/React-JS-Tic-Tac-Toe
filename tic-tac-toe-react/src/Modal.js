import React,{Component} from 'react';
import './ModalCSS.css';

class Modal extends Component{
  render(){
    return(
      <div id="myModal" className="modal" style={{display:this.props.display}}>
        <div className="modal-content">
          <div>
            <p className="title">Set up the Game</p>
            <div className="set">
              <input type="text" className="form-control inputGet" id="playerOneName" onChange={this.props.playerOneNameChange} placeholder="Username"/>
              <button className="chooseSide" onClick={this.props.playerOneSymbolChange} id="X" >X</button>
              <button className="chooseSide" onClick={this.props.playerOneSymbolChange} id="O" >O</button>
              <input type="text" className="form-control inputGet" id="playerTwoName" onChange={this.props.playerTwoNameChange} placeholder="Username"/>
              <button className="chooseSide" id="X" onClick={this.props.playerTwoSymbolChange} >X</button>
              <button className="chooseSide" id="O" onClick={this.props.playerTwoSymbolChange} >O</button>
              <div>
                <button className="goBut"   onClick={this.props.openModal} >Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
