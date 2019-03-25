import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchCharacter} from '../reducers/character'

class Detail extends React.Component {
  componentDidMount () {
    const { id } = this.props.match.params
    const url = `https://rickandmortyapi.com/api/character/${id}`
    this.props.fetchCharacter(url)
  }

  render() {
    const { loading, error, character} = this.props
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
          <img src={character.image} alt={character.image} />
          <div style={{ marginLeft: '1em', color: '#757575'}}>
            <p>Gender <strong>{character.gender}</strong></p>
            <p>Species <strong>{character.species}</strong></p>
            <p>Type <strong>{character.type}</strong></p>
            <p>Status <strong>{character.status}</strong></p>
            <p>
              Origin
              <strong>
                {character.origin
                  ? character.origin.name
                  : null
                }
              </strong>
            </p>
            <p>
              Location
              <strong>
                {character.location
                  ? character.location.name
                  : null}
              </strong>
            </p>
            <p>Created <strong>{character.created}</strong></p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state.character })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchCharacter
  }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Detail)