import React,{ Component } from 'react'
export default class profile extends Component {
    constructor(props){
        super(props);
        this.state={count:0};
    }
    componentDidMount(){
    this.timer=setInterval(()=>this.setState({count:this.state.count+1}),1000)}
    render() {
        return (
            <div>
             <img className='myimage' src={this.props.image} alt="picture"/>
              <p className="title">{this.props.title}</p>
              <description className='description'>{this.props.description}</description>
              <p>
                  {this.state.count}
              </p>
            </div>
        )
    }
}
