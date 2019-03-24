import React from 'react'
import axios from 'axios'

class Detail extends React.Component {
  /* eslint-disable */
  state = {
    character: {},
    loading: false,
    error: null
  }
  /* eslint-enable */

  componentDidMount () {
    this.load()
  }

  async load () {
    this.setState({
      loading: true,
      error: null
    })

    const {id} = this.props.match.params
    const url = `https://rickandmortyapi.com/api/character/${id}`

    try {
      const character = (await axios.get(url)).data
      this.setState({
        loading: false,
        character
      })
    } catch (e) {
      this.setState({
        loading: false,
        error: e.message
      })
    }
  }
 
  render() {
    const { loading, error, character} = this.state
    return (
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '5em 1em'
      }}>
        {loading && <p>Loading...</p>}
        {error && <p>¡error!: {error}</p>}
          <h1>{character.name}</h1>
          
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <img src={character.image} />
          <div style={{ marginLeft: '1em', color: '#757575'}}>
            <p>Gender <strong>{character.gender}</strong></p>
            <p>Species <strong>{character.species}</strong></p>
            <p>Type <strong>{character.type}</strong></p>
            <p>Status <strong>{character.status}</strong></p>
            <p>Origin <strong>{character.origin ? character.origin.name : null}</strong></p>
            <p>Location <strong>{character.location ? character.location.name : null}</strong></p>
            <p>Created <strong>{character.created}</strong></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail