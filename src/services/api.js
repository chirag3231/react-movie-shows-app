import axios from 'axios'

const apiKey = 'a18eb11e5c0d2317b18e0144f67b0d23'

export default {
  getMovies: (category) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`
    return axios.get(url).then(info => info.data)
  },
  getSearch: (query,type) => {
    const url = `https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=${apiKey}`
    return axios.get(url).then(info => info.data)
  },
  getTv: (category) => {
    const url = `https://api.themoviedb.org/3/tv/${category}?api_key=${apiKey}&language=en-US&page=1`
    return axios.get(url).then(info => info.data)
  },
}

