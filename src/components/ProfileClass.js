import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "",
                location: ""
            }
        }
    }
    
    async componentDidMount() {
        
        const data = await fetch("https://api.github.com/users/sidharthbhasin21")
        const json = await data.json();
        this.setState({
            userInfo : json
        })
        
        console.log(this.state.userInfo)
    }
    render(){
            return(
                <div>
                    <h1>This is the page of: {this.state.userInfo.name}</h1>
                    <img src= {this.state.userInfo.avatar_url}/>
                    <h2>Location: {this.state.userInfo.location}</h2>
                    
                </div>
            )
    }
}

export default ProfileClass