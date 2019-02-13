import React from 'react';

import styles from './ReactWidgetBrowser.module.css';

export class ReactWidgetBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    handleErrors() {
      throw new Error();
    }
    render() {
      return (
        <div>
          <div className={styles['div-green']}>
            {this.props.textProps}
          </div>
          <button onClick={this.handleErrors}>throw new Error()</button> and look at the browser console that source.map is working and is binded to the es6 code.
        </div>
      );
    }
}


export default ReactWidgetBrowser;
