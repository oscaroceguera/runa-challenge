import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import { Paper} from '@material-ui/core'

const styles = theme => ({
  card: {
    margin: '1em',
    [theme.breakpoints.down('xs')]: {
      width: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '350px',
    },
    [theme.breakpoints.up('md')]: {
      width: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '220px',
    },
    transition:'.3s',
    '&:hover': {
      opacity: 0.7,
      cursor: 'pointer'
    }
  },
  listContainer: {
    maxWidth: '1020px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  imageContainer: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '350px',
    },
    [theme.breakpoints.up('md')]: {
      height: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '220px',
    }
  },
  image: {
    position: 'relative',
    borderRadius: '4px',
    [theme.breakpoints.down('xs')]: {
      width: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '350px',
    },
    [theme.breakpoints.up('md')]: {
      width: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '220px',
    }
  },
  name: {
    position: 'absolute',
    bottom: '-17px',
    background: 'rgb(0,0,0,0.6)',
    color: 'white',
    left: 0,
    right: 0,
    padding: '1em'
  },
  itemInfo: {
    color: '#757575', fontSize: '12px'
  }
})

const Info = ({styles, title, value}) => (
  <p className={styles}>
    {title} <strong>{value}</strong>
  </p>
)

const Item = ({item, detail, classes}) => (
  <Paper
    className={classes.card}
    elevation={1}
    onClick={detail(item.id)}
  >
    <div className={classes.imageContainer}>
      <img className={classes.image} src={item.image} alt={item.name} />
      <p className={classes.name}>{item.name}</p>
    </div>
    <div style={{padding: '0 .5em'}}>
      <Info styles={classes.itemInfo} title='Status' value={item.status} />
      <Info styles={classes.itemInfo} title='Species' value={item.species} />
      <Info styles={classes.itemInfo} title='Gender' value={item.gender} />
      <Info styles={classes.itemInfo} title='Origin' value={item.origin.name} />
    </div>
  </Paper>
)

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

const CustomItem = withStyles(styles, {withTheme: true})(Item)

const ListItem = ({loading, error, characters, classes, detail}) => (
  <div className={classes.listContainer}>
    {loading && <p>Loading...</p>}
    {error && <p>¡error!: {error}</p>}
    {(!loading && !error) && characters.results
      ? characters.results.map(item => {
        return (<CustomItem key={item.id} item={item} detail={detail} />)
      })
      : null}
  </div>
)

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(ListItem)