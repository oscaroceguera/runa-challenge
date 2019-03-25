import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchCharacters} from '../reducers/characters'

import SearchBar from '../components/SearchBar'
import ListItem from '../components/List'
import Pagination from '../components/Pagination'

class Dashboard extends React.Component {
  state = { searchByName: '' }

  componentDidMount () {
    this.props.fetchCharacters('https://rickandmortyapi.com/api/character')
  }

  goToPage = queryParam => e => {
    this.props.fetchCharacters(queryParam)
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
    this.props.fetchCharacters(url)
  }

  render () {
    const { characters, loading, error } = this.props

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

const mapStateToProps = state => ({ ...state.characters })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchCharacters
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)