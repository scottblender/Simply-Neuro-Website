import React, { Component } from 'react'
import './Content.css'
import Aux from './Auxilliary'
import  {ReactTypeformEmbed}  from 'react-typeform-embed'

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
      <h1>Simply Neuroscience</h1>
      <p>Pursuing the brain, Pursuing the brain, 
        unlocking the future, 
        one neuron at a time. 
      </p>
      <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://chinmayibalusu.typeform.com/to/y8ouTz"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
      <button onClick={this.openFormHandeler}>Learn more...</button>
    </div>
    </Aux>
    )
  }
}

export default Content;
