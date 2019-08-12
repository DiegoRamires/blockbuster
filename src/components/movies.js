import React, { Component } from 'react';
import Pagination from './common/pagination'
import ListGroup from './common/listGroup'
import MoviesTable from './moviesTable'
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import { paginate } from '../utils/paginate'

class movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4
  }

  componentDidMount() {
    const genres = [{ name: "All Genres"}, ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }

  handleDelete = (movie) => {
    console.log(movie)
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({ movies })
  }

  handleLike = (movie) => {
    console.log('like clicked', movie)
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movies[index] }
    movies[index].liked = !movies[index].liked
    this.setState({ movies })
  }

  handlePageChange = page => {
    // console.log(page)
    this.setState({ currentPage: page })
  }

  handleGenreSelect = genre => {
    // console.log(genre)
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }

  render() {
    const { length: count } = this.state.movies
    const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state

    if (count === 0) return (
      <p>There are no movies in the database</p>
    )

    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies

    const movies = paginate(filtered, currentPage, pageSize)

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default movies;