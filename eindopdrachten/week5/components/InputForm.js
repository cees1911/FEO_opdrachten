import React from "react"
import ListSong from "./ListSong"

let songArray = []

class InputForm extends React.Component {
    constructor(){
        super()
        this.state = {                      
                songName: " ",
                artistName: " ",
                typeMusic: "",
                Rating: ""
            }
        
        this.handleChange = this.handleChange.bind(this)
        this.submitSong = this.submitSong.bind(this)
     }

     handleChange(event){
        
        this.setState({
            [event.target.name]: event.target.value
            })
            
        }
        
    submitSong(){
        //console.log(yhis.state.songName, this.state.artistName, this.state.typeMusic, this.state.Rating);

         songArray = [
         {
         songName: this.state.songName,
         artistName: this.state.artistName,
         typeMusic: this.state.typeMusic,
         Rating: this.state.Rating
         }  ]
       console.log("song array is", songArray) 
    }

    

         

    render() {
       

        return(
            <div>
                <input  type="text" 
                        name="songName" 
                        placeholder="song title" 
                        onChange={this.handleChange}/>
                <label> Name of the song: </label>
                <br />                
                <input  type="text" 
                        name="artistName"  
                        placeholder="artist name" 
                        onChange={this.handleChange}/>
                <label> Artist name: </label>        
                <br />                
                <select
                    value={this.state.typeMusic}
                    onChange={this.handleChange}
                    name="typeMusic">
                        <option value="">-type of music -</option>
                        <option value="Rock">Rock</option>
                        <option value="Blues">Blues</option>
                        <option value="Pop">Pop</option>
                </select>
                <label> Type of music</label>
                <br />                
                <select
                    value={this.state.Rating}
                    onChange={this.handleChange}
                    name="Rating">
                        <option vaulue="">- Rating -</option>
                        <option value="*">*</option>
                        <option value="**">**</option>
                        <option value="***">***</option>
                </select>
                <label> Rating</label>
                <br />

                <button onClick={() => this.submitSong()}>Submit Song</button>   

                <ListSong songs={this.songArray} />           
                    
            </div>  

           )
     
    }
}


export default InputForm