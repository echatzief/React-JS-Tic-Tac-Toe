import React,{Component} from 'react';


class Box extends Component{
  render(){
    return(
      <div className={this.props.boxClass} id={this.props.boxId} onClick={this.props.makeMove} >
          <h4 id={this.props.boxId} style={{fontSize:'100px',width:'100px',height:'100px',marginLeft:'50px',marginTop:'30px'}}>{this.props.element}</h4>
      </div>
    );
  }
}


export default Box;
