

var GalleryItem = React.createClass({
propTypes: {
    image: React.PropTypes.object.isRequired,
  },  

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});
var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});

ReactDOM.render(element, document.getElementById('app'));




var Movie = React.createClass({ 
  propTypes: {
    movie_id: React.PropTypes.object.isRequired,
  },  

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.movie_id.id)
      )
    )
  },
});
var   movie_id = {
 id:  1
};

 var element = React.createElement(Movie, {movie_id: movie_id},);
 ReactDOM.render(element, document.getElementById('app'));

//MovieTitle

 var MovieTitle = React.createClass({ 
  propTypes: {
    movie_title: React.PropTypes.object.isRequired,
  },  

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.movie_title.title)
      )
    )
  },
});
var   movie_title = {
 title:  'Gwiezdne wojny'
};

 var element = React.createElement(MovieTitle, {movie_title: movie_title},);
 ReactDOM.render(element, document.getElementById('app'));



 //MovieDescription

 var MovieDescription  = React.createClass({ 
  propTypes: {
    movie_description: React.PropTypes.object.isRequired,
  },  

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.movie_description.description)
      )
    )
  },
});
var   movie_description = {
  description:  'opis'
};

 var element = React.createElement(MovieDescription, {movie_description: movie_description},);
 ReactDOM.render(element, document.getElementById('app'));


 //MoviesList
 var MoviesList  = React.createClass({ 
  propTypes: {
    movie_list: React.PropTypes.object.isRequired,
  },  

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.movie_list.list)
      )
    )
  },
});
var   movie_list = {
  list:  'lista'
};

 var element = React.createElement(MoviesList, {movie_list: movie_list},);
 ReactDOM.render(element, document.getElementById('app'));
