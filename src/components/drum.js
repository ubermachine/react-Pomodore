import React  from 'react'
const DrumSounds = [
    {
        keyPressed:'Q',
        key: 'Chord-1',
        keyCode: 81,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
        keyPressed: 'W',
        key: 'Chord-2',
        keyCode: 87,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
        keyPressed: 'E',
        key: 'Chord-3',
        keyCode: 69,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
        keyPressed: 'A',
        key: 'Shaker',
        keyCode: 65,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
        keyPressed: 'S',
        key: 'Open-HH',
        keyCode: 83,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
        keyPressed: 'D',
        key: 'Closed-HH',
        keyCode: 68,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
        keyPressed: 'Z',
        key: 'Punchy-Kick',
        keyCode: 90,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
        keyPressed: 'X',
        key: 'Side-Stick',
        keyCode: 88,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
        keyPressed: 'C',
        key: 'Snare',
        keyCode: 67,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
];
const DRUMC=(props) => {

    const drumBuilder = props.sounds.map(item => {
        return (
            <div className='drum-pad' id={item.key} key={item.key} onClick={props.handleClick} >
                {item.keyPressed}
                <audio src={item.url} className='clip' id={item.keyPressed} key={item.keyPressed} />
            </div>
        );
    });

    return (
        <div id='drum-container'>
            {drumBuilder}
        </div>
    )
}

class Drum extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:'Click or press key'
        }

        this.playSound=this.playSound.bind(this)
    }

    playSound(event){

        const drumKey = DrumSounds.find(item => (item.keyCode === event.keyCode || item.keyPressed === event.target.innerText));
        const sound = document.getElementById(drumKey.keyPressed);
        sound.play()
        this.setState(
          {
          current: drumKey.key
        });  
      }
        componentDidMount() {
            document.addEventListener('keydown', this.playSound);
          }
          componentWillUnmount() {
            document.removeEventListener('keydown', this.playSound);
          }

    
    render(){
        return(
            <div id='drum-machine'>
                <DRUMC sounds={DrumSounds} handleClick={this.playSound}/>
                <div id="display">{this.state.current}</div>
            </div>
        )
    }
}

  

export default Drum;

