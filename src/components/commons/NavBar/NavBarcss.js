import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  const fontColor = theme.palette.common.white
  const textColor = fade(theme.palette.common.black, 1)
  const iconColor = fade(theme.palette.common.black, 0.55)

  const obj = {
    appBar: {
      // zIndex: theme.zIndex.drawer + 1,
      background: fontColor
    },
    grow: {
      flexGrow: 1
    },
    root: {
      background: fontColor
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: textColor,
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    title: {
      color: textColor,
      // display: 'none'
      // ,
      // [theme.breakpoints.up('sm')]: {
      display: 'block'
      // }
    },
    search: {
      color: textColor,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch'
      }
    },

    sectionDesktop: {
      color: iconColor,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'space-evenly'
      }
    },
    offset: theme.mixins.toolbar,
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    }
  }
  return obj
})

export default useStyles
