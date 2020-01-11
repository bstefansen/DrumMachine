import React from 'react';
import './App.css';

const codes = [{
  code: 81,
  key: "Q",
  str: "RP4_KICK_1.mp3"
}, {
  code: 87,
  key: "W",
  str: "Kick_n_Hat.mp3"
}, {
  code: 69,
  key: "E",
  str: "side_stick_1.mp3"
}, {
  code: 65,
  key: "A",
  str: "Brk_Snr.mp3"
}, {
  code: 83,
  key: "S",
  str: "Bld_H1.mp3"
}, {
  code: 68,
  key: "D",
  str: "Dry_Ohh.mp3"
}, {
  code: 90,
  key: "Z",
  str: "Chord_1.mp3"
}, {
  code: 88,
  key: "X",
  str: "Chord_2.mp3"
}, {
  code: 67,
  key: "C",
  str: "Chord_3.mp3"
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: "blue",
      display: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.playSound);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.playSound);
  }
  
  handleClick(e) {
    let btnId = "";
    for(let i = 0; i < codes.length; i++) {
      if(codes[i].key === e) {
        btnId = e;
        this.setState({
          display: codes[i].str
        });
      }
      console.log(btnId);
    }
    const sound = document.getElementById(btnId);
    sound.currentTime = 0;
    sound.play();
  }
  
  playSound(e) {
    let btnId = "";
    for(let i = 0; i < codes.length; i++) {
      if(codes[i].code === e.keyCode) {
        btnId = codes[i].key;
        this.setState({
          display: codes[i].str
        });
      }
      console.log(btnId);
    }
    const sound = document.getElementById(btnId);
    sound.currentTime = 0;
    sound.play();
  }
  
  render() {
    const bodyStyle = {
      backgroundColor: "silver",
      border: "solid 3px black",
      boxShadow: "2px 2px 10px black",
      borderRadius: "2em",
      width: "50%",
      height: "20em",
      margin: "auto",
      textAlign: "center",
      verticalAlign: "middle",
      color: "black",
    }
    const gridStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridColumnGap: "1em",
      gridRowGap: "1em",
      padding: "2em",
    }
    const buttonStyle = {
      backgroundColor: this.state.padStyle,
      color: "white",
      boxShadow: "2px 2px 10px black",
    }
    
    return (
      <div id="drum-machine" style={bodyStyle}>
        <div id="display">
          <h1 style={{marginTop: ".5em", fontWeight: "bold"}}>Drum Machine</h1>
          <div style={gridStyle}>
            <button id="1" className="drum-pad" onClick={() => this.handleClick("Q")} style={buttonStyle}>Q<audio id="Q" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio></button>
            <button id="2" className="drum-pad" onClick={() => this.handleClick("W")} style={buttonStyle}>W<audio id="W" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio></button>
            <button id="3" className="drum-pad" onClick={() => this.handleClick("E")} style={buttonStyle}>E<audio id="E" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"></audio></button>
            <button id="4" className="drum-pad" onClick={() => this.handleClick("A")} style={buttonStyle}>A<audio id="A" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"></audio></button>
            <button id="5" className="drum-pad" onClick={() => this.handleClick("S")} style={buttonStyle}>S<audio id="S" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"></audio></button>
            <button id="6" className="drum-pad" onClick={() => this.handleClick("D")} style={buttonStyle}>D<audio id="D" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"></audio></button>
            <button id="7" className="drum-pad" onClick={() => this.handleClick("Z")} style={buttonStyle}>Z<audio id="Z" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"></audio></button>
            <button id="8" className="drum-pad" onClick={() => this.handleClick("X")} style={buttonStyle}>X<audio id="X" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"></audio></button>
            <button id="9" className="drum-pad" onClick={() => this.handleClick("C")} style={buttonStyle}>C<audio id="C" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"></audio></button>
          </div>
          {this.state.display}
        </div>
      </div>
    );
  }
}

export default App;
