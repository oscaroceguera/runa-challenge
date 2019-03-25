import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import { Button} from '@material-ui/core'

const styles = {
  listContainer: {
    maxWidth: '1020px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}

const ButtonCustom = ({characters, goToPage, direction}) => {
  return (
    characters.info
      ? characters.info[direction]
        ? (
          <Button
            color='primary'
            onClick={goToPage(characters.info[direction])}
          >
            {direction}
          </Button>)
        : null
      : null
  )
}

const Pagination = ({classes, characters, goToPage}) => (
  <div className={classes.listContainer}>
    <ButtonCustom
      characters={characters}
      goToPage={goToPage}
      direction='prev'
    />
    <ButtonCustom
      characters={characters}
      goToPage={goToPage}
      direction='next'
    />
  </div>
)

Pagination.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Pagination)
