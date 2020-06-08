import React, { Component } from 'react'
import './Content.css'
import Aux from './Auxilliary'
import  {ReactTypeformEmbed}  from 'react-typeform-embed'
import Popup from './Popup'

// home page content 
class Content extends Component {
  constructor(props) {
    super(props)
    this.openFormHandeler = this.openFormHandeler.bind(this)
  }

  // Handler to open the form
  openFormHandeler() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return(

      <Aux>
        <div className='text'>
          <div class="line-1 anim-typewriter">
            <h1>Simply Neuroscience</h1>
          </div>
          <p>Pursuing the brain and
            unlocking the future, 
            one neuron at a time. 
          </p>
          <Popup></Popup>
        </div>
      </Aux>
    )
  }
}

export default Content;
