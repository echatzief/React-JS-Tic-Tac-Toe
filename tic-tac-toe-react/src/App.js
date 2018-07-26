import React,{Component} from 'react';
import Modal from './Modal';
import Grid from './Grid';
import WinnerModal from './WinnerModal';
import './ModalCSS.css';

class App extends Component{

  constructor(){
    super();

    this.cols=3;
    this.rows=3;


    this.state=({
      display:'block',
      playerOneName:'Player 1',
      playerOneSymbol:'X',
      playerTwoName:'Player 2',
      playerTwoSymbol:'O',
      turn:'',
      winnerDis:'none',
      winnerName:'',
      theGrid:Array(this.rows).fill().map(() => Array(this.cols).fill())
    });
    this.openModal=this.openModal.bind(this);
  }

 //-----------------------------------SETUP USERS -----------------------------------------//
 playerOneNameChange =(event) =>{
   if(event.target.value!==''){
     this.setState({playerOneName: event.target.value});
   }
   else{
     this.setState({playerOneName: 'Player 1'});
   }
 }
 playerOneSymbolChange =(event)=>{
   this.setState({playerOneSymbol: event.target.id});
 }

 playerTwoNameChange = (event) =>{
   if(event.target.value!==''){
     this.setState({playerTwoName: event.target.value});
   }
   else{
     this.setState({playerTwoName: 'Player 2'});
   }
 }
 playerTwoSymbolChange = (event) =>{
     this.setState({playerTwoSymbol: event.target.id});
 }
 //-----------------------------------SETUP USERS -----------------------------------------//

//----------------------------------- SHOW SETTINGS --------------------------------------//
  openModal(){
    if(this.state.display==='block'){
      this.setState({display:'none'});
    }
    else{
        this.setState({display:'block'});
    }
  }

 WinnerModal = ()=>{
   if(this.state.winnerDis==='block'){
     this.setState({winnerDis:'none'});
   }
   else{
       this.setState({winnerDis:'block'});
   }
 }
//----------------------------------- SHOW SETTINGS --------------------------------------//

play =() =>{
  //Pick Random Turn
  var min = 0;
  var max = 2;
  var rand =  min + (Math.random() * (max-min));

  if(Math.floor(rand)===0){
      this.setState({
        turn:'X'
      })
  }
  else{
    this.setState({
      turn:'O'
    })
  }

  //Check the symbols and fix it
  if(this.state.playerOneSymbol===this.state.playerTwoSymbol){
    this.setState({playerTwoSymbol: 'O',playerOneSymbol:'X'});
  }
}

checkIfWin = ()=>{
  var board=arrayClone(this.state.theGrid);

  //Row
  for(var i=0;i<this.rows;i++){
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '\0'){

      if(board[i][0]===this.state.playerOneSymbol){
        this.setState({winnerName:this.state.playerOneName});
        this.WinnerModal();
      }
      else{
        this.setState({winnerName:this.state.playerTwoName});
        this.WinnerModal();
      }
      this.clear();
      this.play();
    }
  }

  //Cols
  for(i=0;i<this.rows;i++){
    if (board[0][i] === board[1][i] &&board[1][i] === board[2][i] && board[0][i] !== '\0'){

      if(board[0][i]===this.state.playerOneSymbol){
        this.setState({winnerName:this.state.playerOneName});
        this.WinnerModal();
      }
      else{
        this.setState({winnerName:this.state.playerTwoName});
        this.WinnerModal();
      }
      this.clear();
      this.play();
    }
  }

  //Diagonial
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '\0'){
    if(board[0][0]===this.state.playerOneSymbol){
      this.setState({winnerName:this.state.playerOneName});
      this.WinnerModal();
    }
    else{
      this.setState({winnerName:this.state.playerTwoName});
      this.WinnerModal();
    }
    this.clear();
    this.play();
  }

  //Diagonial
  if (board[0][2] === board[1][1] &&board[1][1] === board[2][0] &&board[0][2] !== '\0'){

    if(board[0][2]===this.state.playerOneSymbol){
      this.setState({winnerName:this.state.playerOneName});
      this.WinnerModal();
    }
    else{
      this.setState({winnerName:this.state.playerTwoName});
      this.WinnerModal();
    }
    this.clear();
    this.play();
  }
}

componentDidMount(){
  this.play();
  setInterval(this.checkIfWin, 10);
  this.initialize();
}
makeMove =(e) =>{

  var cloneArr=arrayClone(this.state.theGrid);


  //Then put the element
  const getID=e.target.id;
  var splitID=getID.split("_");

  //alert("getID: "+getID);
  //Get i,j
  var i=splitID[0];
  var j=splitID[1];

  cloneArr[i][j]=this.state.turn;


  if(this.state.turn==='X'){
    this.setState({
        theGrid:cloneArr,
        turn:'O'
    });
  }
  else{
    this.setState({
        theGrid:cloneArr,
        turn:'X'
    });
  }
}

initialize =()=>{
  var cloneArr=arrayClone(this.state.theGrid);

  for(var i=0;i<this.rows;i++){
    for(var j=0;j<this.cols;j++){
      cloneArr[i][j]='\0';
    }
  }
    this.setState({
        theGrid:cloneArr,
    });
}

//Reset the state
clear =() =>{
  this.setState({
    turn:'',
    theGrid:Array(this.rows).fill().map(() => Array(this.cols).fill())
  });
  this.initialize();
  this.play();
}

  render(){
    return(
      <div>
        <WinnerModal display={this.state.winnerDis} hide={this.WinnerModal} winner={this.state.winnerName}/>
        <h1 style={{margin:'25px',top:0,color:'#0179b2'}} >{this.state.playerOneName} : {this.state.playerOneSymbol}</h1>
        <h1 style={{margin:'25px',top:0,color:'#0179b2'}} >{this.state.playerTwoName} : {this.state.playerTwoSymbol}</h1>
        <h1 style={{margin:'25px',top:0,color:'#0179b2'}} >Turn : {this.state.turn}</h1>
        <Modal display={this.state.display} openModal={this.openModal}
        playerOneNameChange={this.playerOneNameChange} playerOneSymbolChange={this.playerOneSymbolChange}
        playerTwoNameChange={this.playerTwoNameChange} playerTwoSymbolChange={this.playerTwoSymbolChange}
        />
        <div>
          <button className="mainBut" onClick={this.play} >New</button>
        </div>
        <div>
          <button className="mainBut" onClick={this.clear}>Clear</button>
        </div>
        <div>
          <button className="mainBut" onClick={this.openModal}>Setting</button>
        </div>
        <div>
          <Grid rows={this.rows} cols={this.cols} theGrid={this.state.theGrid}   makeMove={this.makeMove}/>
        </div>
      </div>
      );
  }
}

export default App;

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}
