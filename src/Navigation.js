import React, {Component} from 'react'
import Aux from './Auxilliary'
import Menu from './Menu'
import BurgerIcon from "./BurgerIcon";
import Popup from "reactjs-popup";

// navigation component 
class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = {
            displayData : [props.children]
        };
    }

    contentStyle = {
        background: "rgba(255,255,255,0",
        width: "80%",
        border: "none"
    };

    // renders content 
    render(){
        let onScreenDisplay = this.state.displayData
        return(
            <Aux>
                <Popup
                    modal
                    overlayStyle={{ background: "rgb(12,85,94)" }}
                    transition={{animation: "fade left", duration: 5000 }}
                    contentStyle={this.contentStyle}
                    closeOnDocumentClick = {false}
                    trigger = {open => <BurgerIcon open={open}></BurgerIcon>}
                >
                {close => <Menu close={close} />}
                </Popup>
           
            {onScreenDisplay}
            </Aux>
        )
    }
}
export default Navigation;