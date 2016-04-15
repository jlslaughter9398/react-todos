var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function() {
    return(
        <h1 className="red">Hello! React!!!</h1>
    )
  }
});

ReactDOM.render(<Hello />, document.querySelector('.container'));
