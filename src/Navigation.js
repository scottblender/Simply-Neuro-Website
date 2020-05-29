import React, {Component} from 'react'
import Aux from './Auxilliary'
import './Navigation.css'
import Menu from './Menu'

class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = {
            openNav : false,
            displayData : [props.children]
        };
    }
    render(){
        const openNavigation = this.state.openNav
        let navItems;
        let onScreenDisplay = this.state.displayData
        if(openNavigation){
            navItems =  
            <Menu></Menu> 
            onScreenDisplay = <div></div>
        }
        return(
            <Aux>
            <span onClick={() => this.setState({openNav:!this.state.openNav})}>
            <div className={openNavigation ? "burger-menu open" : "burger-menu"}>
            <div className="bar1" key="b1" />
            <div className="bar2" key="b2" />
            <div className="bar3" key="b3" />
            </div>
            </span>
             {navItems} 
             {onScreenDisplay}
               </Aux>
        )
    }
}
export default Navigation;