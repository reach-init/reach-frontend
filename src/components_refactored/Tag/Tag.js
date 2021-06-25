import {
  Chip
} from '@material-ui/core'
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen'
import yellow from '@material-ui/core/colors/yellow'
import amber from '@material-ui/core/colors/amber'
import cyan from '@material-ui/core/colors/cyan'
import blue from '@material-ui/core/colors/blue'
import { useAuth0 } from '../../auth/react-auth'
import { useHistory } from 'react-router-dom'

const colors = [ green, yellow, pink, purple, deepPurple, lightBlue, lightGreen,  cyan,amber, blue]

export default function Tag({tag, color}) {
  const history = useHistory()
  const onTagClick = () => {
      const tag = '🍕'
      history.push('/tag/' + tag)
  }

  return (
    <Chip
         size="small"
        variant="outlined"
        clickable={true}
        style={{backgroundColor: colors[color][100], border:'0px', marginRight: '5px', 'font-size': '20px' }}
        key={tag}
        label={tag}
        onClick={onTagClick}
    />
    )

}
