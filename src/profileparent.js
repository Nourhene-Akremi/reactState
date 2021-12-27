import React, { Component } from 'react'
import neonperson from './neonperson.jpg'
import Profile from './profile';
export default class profileparent extends Component {
    constructor(props){
        super(props)
        this.state={
               image:neonperson,
               title:"Welcome State and props",
               description:"This is super annoying",
               show:false,
        }
    }
toggle() {
    this.setState({show:!this.state.show}
    )
}
    render() {
        return (
            <div>
            {this.state.show ? 
            <Profile image={this.state.image} 
            title={this.state.title}
            description={this.state.description}/> 
            :null}
            <button onClick={()=>this.toggle()}>{this.state.show? "Hide":"Show"}</button>   
            </div>
        )
    }
}
