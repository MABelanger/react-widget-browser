import React, { Component } from 'react';

import ReactWidgetBrowser from '../lib/components/ReactWidgetBrowser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactWidgetBrowser
          textProps={'hello my ReactWidgetBrowser dev'}
        />
      </div>
    );
  }
}

export default App;
