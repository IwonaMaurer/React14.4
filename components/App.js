
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 3,
    title: 'Gwiezdne wojny',
    desc: 'opis',
    src: 'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 4,
    title: 'Milczenie owiec',
    desc: 'opis',
    src: 'http://imgur.com/n8OYCzR.png'                     
  }
];

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
       // React.createElement(Movie, {movies: movie}),
        React.createElement(Movies, {movies: movies}, {})
      )
    );
  }
});


