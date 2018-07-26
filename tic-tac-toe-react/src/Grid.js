import React,{Component} from 'react';
import './GridCSS.css';
import Box from './Box';
class Grid extends Component{
  render(){
    var width=this.props.cols*200;
    var rowArr=[];
    for(var i=0;i<this.props.rows;i++){
      for(var j=0;j<this.props.cols;j++){
        var boxClass="box";
        var boxId=i+"_"+j;
        rowArr.push(<Box boxClass={boxClass}  element={this.props.theGrid[i][j]} makeMove={this.props.makeMove} key={boxId} boxId={boxId}/>);
      }
    }

    return(
      <div className="grid" style={{width:width}}>
        {rowArr}
      </div>
      );
  }
}
export default Grid;
