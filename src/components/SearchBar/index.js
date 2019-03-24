import React from 'react'
import PropTypes from 'prop-types'
import { Paper, InputBase, IconButton } from '@material-ui/core'
import {Search as SearchIcon} from '@material-ui/icons'

import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '1em auto'
  },
  input: {
    marginLeft: 8,
    flex: 1
  }
}

const SearchBar = ({ classes, value, onChange, onClick  }) => (
  <Paper className={classes.root} elevation={1}>
    <InputBase
      className={classes.input}
      placeholder='Search by name'
      name='searchByName'
      value={value}
      onChange={onChange}
    />
    <IconButton onClick={onClick}>
      <SearchIcon />
    </IconButton>
  </Paper>
)

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchBar)