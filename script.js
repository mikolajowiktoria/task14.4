var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    src: 'https://image.ibb.co/cTX83H/harry_potter_820x490.jpg',  
    desc: 'film o czarodzieju'
  },
  {
    id: 2,  
    title: 'Król Lew',
    src: 'https://image.ibb.co/hFZMOH/Powstanie_aktorska_wersja_Krola_Lwa_article.jpg',  
    desc: 'Film o królu sawanny'
  },
    {
    id: 3,
    title: 'Forrest Gump',
    src: 'https://image.ibb.co/bZk6qx/Pinterest2_1.jpg',    
    desc:  'Run Forrest RUN !'   
    }
];
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, 
    React.createElement('h2', {}, movie.title),
    React.createElement('img', {src: movie.src}),
    React.createElement('p', {}, movie.desc),
    React.createElement('p', {}, movie.year)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)   // doczep zmapowaną tablicę 'movies' []
  );



var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MovieSrc, {
                    src: this.props.movie.src
                })
            )
        )
    }
});

var MovieTitle = React.createClass ({
  propTypes: {
      title: React.PropTypes.string.isRequired,
  },
    
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDescription = React.createClass ({
  propTypes: {
      desc: React.PropTypes.string.isRequired,
  },
    
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    },
});

var MovieSrc = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
        React.createElement('img', {src: this.props.src})
      )
  },
});

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },
  render: function() {
      var MovieElements = this.props.movies.map(function(movie) {
          return React.createElement(Movie, {
              key: movie.id,
              movie: movie
          });
      });
      return React.createElement('ul', {}, MovieElements);
  }
});


var element = React.createElement(MovieList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));