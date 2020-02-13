import ListItem from "./listItem";
import React from 'react';
class Series extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          series: []
          
      }
    }

    async componentDidMount(){
        // fetch to the API
        const url = "http://localhost:5000/api/series/"

        const response = await fetch(url);
        const myJson = await response.json();
        console.log(myJson);
        
        this.setState({ series: myJson.map((item, index )=>
            {
                return <ListItem key={`somekey_${index}`} {...item }/>
            })})
    }
    

    render(){

        return (
            <div className="stuff">
                <ul className="other">
               {
                   this.state.series
               }
                </ul>
            </div>
        )
        };

}
export default Series
