import React, {Component} from 'react';

/**
 * Root component for the application.
 */
class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

App.propTypes = {
  // children: React.PropTypes.element.isRequired
};

export default App;
