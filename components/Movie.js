
  var Movie = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {},
          React.createElement('h1', {}, 'Tytuł' + this.props.title),
          React.createElement('p', {}, 'Opis' + this.props.desc),
          React.createElement('img', {src: this.props.src})
        )
      )
    },
  });

 
