
  var Movie = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {},
          React.createElement('h1', {}, 'Tytuł' + this.props.movie.title),
          React.createElement('p', {}, 'Opis' + this.props.movie.desc),
          React.createElement('img', {src: this.props.movie.src})
        )
      )
    },
  });


