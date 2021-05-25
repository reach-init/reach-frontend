import {
  Chip
} from '@material-ui/core'

import { useAuth0 } from '../../auth/react-auth'
import { useHistory } from 'react-router-dom'

export default function Tag({tag}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()
  const history = useHistory()

  const onTagClick = () => {
      history.push('/tag/' + tag)
  }

  return (
    <Chip
        size="small"
        variant="outlined"
        clickable={true}
        style={{ margin: '5px' }}
        key={tag}
        label={tag}
        onClick={onTagClick}
    />
    )

}
