import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  author: {
    fontSize: '10px',
    paddingRight: '10px',
    fontWeight: 400,
    color: 'rgba(0,0,0,0.87)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  textarea: {
      fontWeight: 400,
      fontSize: '14px',
      border: 'none',
      width: '100%',
      outline: 'none',
      resize: 'none',
  },
  cancel: {
      float: 'right',
      clear: 'both',
      zIndex: 5,
      margin: '0px 5px 5px 0px',
      fontWeight: 400,
  },
  list: {
      width: '100%',
      maxHeight: 290,
      overflowY: 'auto',
      overflowX: 'visible',
  }

}))

export default useStyles
