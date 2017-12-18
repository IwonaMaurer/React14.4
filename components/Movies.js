var Movies = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function() {
    var movies = this.props.movies.map(function(movie) {
        return React.createElement(Movies, {movies: title, key: movies.id});
    });

    return (
      React.createElement('ul', {className: 'moviesList'}, movies)
    );
  }
});
