import React from 'react'


class ListItem extends React.Component {
    constructor(props) {
      super(props);
      
    }



    render(){

        return (
         <li>
             {this.props.title}
         </li>
        )
    }
        

}
export default ListItem
