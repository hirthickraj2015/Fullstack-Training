import React from "react";
class Formula extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a:1,b:2,c:3,d:4
        }
    }
    changea =()=> {
        this.setState({...this.state,a:"9"});
    }
    changeb =()=>{
        this.setState({...this.state,b:"12"});
    }
    changec =() =>{
        this.setState({...this.state,c:"15"});
    }
    changed =() =>{
        this.setState({...this.state,d:"18"});
    }
    changeall =()=>{
        this.setState({...this.state,a:"11",b:"17",c:"13",d:"14"});
    }
    render() {
        return(
        <div>
            <center>
                <h1>Formula</h1>
                <br />
                <span> A:{this.state.a} </span>
                <span> B:{this.state.b} </span>
                <span> C:{this.state.c}</span>
                <span> D:{this.state.d}</span>
                <br />
            
                <button onClick={this.changea}>Change A</button>
                <button onClick={this.changeb}>Change B</button>
                <button onClick={this.changec}>Change C</button>
                <button onClick={this.changed}>Change D</button>
                <button onClick={this.changeall}>Change All</button>
                <br />
                <h2>It Calculates A^2+B^2+C^2+D^2</h2>
                <br />
                <h1>{this.state.a*this.state.a+this.state.b*this.state.b+this.state.c*this.state.c+this.state.d*this.state.d-(2*this.state.a+2*this.state.b+2*this.state.c+2*this.state.d)}</h1>
            </center>
        </div>)
    }
}
export default Formula;