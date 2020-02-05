import React  from 'react'
let decflag=0
let zerflag=0
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:'',
            nextip:'',
            func:'',
            output:0
        }
            this.getInput=this.getInput.bind(this)
        
    
    }
    getInput(event){
        const numtest=/[\d]/
        const dec=/[.+]/
        const functest=/[/*\-+]/
        const zertest=/^0/
        if(numtest.test(event.target.innerHTML)){
            if(this.state.current[0]=='0' && event.target.innerHTML=='0'){
                this.setState({
                    current:this.state.current
                })
               
            }else{this.setState({
                current:this.state.current+event.target.innerHTML
            })}

                
        }else if(dec.test(event.target.innerHTML) && decflag==0){
            decflag=1
            this.setState({
                current:this.state.current+event.target.innerHTML
            })
        
            
        }else if(functest.test(event.target.innerHTML)){

        
    }

    }
    render(){
        return (
            <div id="caldisplay">
            <button onClick={this.getInput} id="clear">C</button>
            <button id="equals" onClick={this.getInput}>=</button>
            <div id="display">{this.state.current}</div>
            <button onClick={this.getInput} id="one">1</button>
            <button onClick={this.getInput} id="two">2</button>
            <button  onClick={this.getInput} id="three">3</button>
            <button  onClick={this.getInput} id="four">4</button>
            <button  onClick={this.getInput} id="five">5</button>
            <button  onClick={this.getInput} id="six">6</button>
            <button  onClick={this.getInput} id="seven">7</button>
            <button  onClick={this.getInput} id="eight">8</button>
            <button  onClick={this.getInput} id="nine">9</button>
            <button  onClick={this.getInput} id="zero">0</button>
            <button  onClick={this.getInput} id="add">+</button>
            <button   onClick={this.getInput} id="subtract">-</button>
            <button   onClick={this.getInput} id="multiply">*</button>
            <button   onClick={this.getInput} id="divide">/</button>
            <button  onClick={this.getInput}  id="decimal">.</button>
            <button id="equals" onClick={this.getInput}>=</button>
            
            </div>
        )
    }
}




export default Calculator;

