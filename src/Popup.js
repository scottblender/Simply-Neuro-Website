import React, { Component } from 'react';
import * as typeformEmbed from'@typeform/embed'

class Popup extends Component {

    componentDidMount() {
        const popup = typeformEmbed.makePopup(
            'https://chinmayibalusu.typeform.com/to/y8ouTz',
            {
                mode: 'popup',
                autoClose: 3000,
                hideHeaders: true,
                hideFooter: true,
                onSubmit: function() {
                    console.log('Typeform successfully submitted')
                }
            }
        )

        document.getElementById('bt-popup').addEventListener('click', function() {
            popup.open();
        })
    }

    render() {
        return (
            <div>
                <button id="bt-popup" class="my-button">Learn more...</button>
            </div>
        )
    }
    
}

export default Popup;