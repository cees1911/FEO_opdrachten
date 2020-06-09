import React from "react"
import InputForm from "./InputForm"
//import ListSong from "./ListSong"

class Container extends React.Component {

    constructor() {
        super()
        this.state = {
            iets: []
        }
    }

    render(){

        return(
        <div>
            <InputForm />
        </div>
        )    
    }
}


export default Container