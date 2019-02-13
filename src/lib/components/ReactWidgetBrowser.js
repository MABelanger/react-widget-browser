import React from 'react';

import styles from './ReactWidgetBrowser.module.css';

export class ReactWidgetBrowser extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className={styles['div-green']}>
          {this.props.textProps}
        </div>
      );
    }
}


export default ReactWidgetBrowser;
