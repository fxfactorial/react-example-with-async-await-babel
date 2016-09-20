'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// REMEMBER to do {} since button.jsx doesn't do
// export default
import {Button} from './button';

class Page extends React.Component {
  render () {
    return (
      <div>
	Hello World
	<Button/>
      </div>
    );
  }
};

ReactDOM.render(<Page/>,
		document.getElementById('cont'));
