import React from 'react'
import axios from 'axios'

import SearchBar from '../components/SearchBar'
import ListItem from '../components/List'
import Pagination from '../components/Pagination'

class Dashboard extends React.Component {
  /* eslint-disable */
  state = {
    anchorEl: null,
    loading: false,
    error: null,
    characters: [],
    searchByName: ''
  }
  /* eslint-enable */

  componentDidMount () {
    this.load()
  }

  async load(url = 'https://rickandmortyapi.com/api/character') {
    this.setState({
      loading: true,
      error: null
    })

    try {
      const characters = (await axios.get(url)).data
      this.setState({
        loading: false,
        characters
      })
    } catch (e) {
      this.setState({
        loading: false,
        error: e.message
      })
    }
  }

  goToPage = queryParam => e => {
    this.load(queryParam)
  }

  detail = id => e => {
    this.props.history.push(`/detail/${id}`)
  }
  
  onChangeSearchName = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchByName = e => {
    const url = `https://rickandmortyapi.com/api/character/?name=${this.state.searchByName}`
    this.load(url)
  }

  render () {
    const { characters, loading, error } = this.state

    return (
      <div style={{ padding: '0 1em', width: '100%'}}>
        <SearchBar
          value={this.state.onClick}
          onChange={this.onChangeSearchName}
          onClick={this.searchByName}
        />
        <ListItem
          loading={loading}
          error={error}
          characters={characters}
          detail={this.detail}
        />
        <Pagination
          characters={characters}
          goToPage={this.goToPage}
        />
        <br />
      </div>
    )
  }
}

export default Dashboard