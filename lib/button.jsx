'use strict';

import React from 'react';

class Button extends React.Component {

  async do_request(e) {
    let query =
	'https://api.bitcoinaverage.com' +
	'/ticker/global/USD';
    let nonsense = "https://foo.bar";
    try {
      let pulled = await fetch(query);
      let body = await pulled.json();
      console.log(body);

      await fetch(nonsense);

    } catch (e) {
      console.log("Exception raised:", e);
      console.log('Logic continued');
    }
  }

  render () {
    let s = {color:'red'};
    return (
      <p style={s}
	 onClick={this.do_request.bind(this)}>
	Click Me
      </p>
    );
  }
};


// Remember to put wrap in {}
export {Button};
