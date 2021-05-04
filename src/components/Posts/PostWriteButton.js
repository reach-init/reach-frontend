// - Import react components
import SvgCamera from '@material-ui/icons/PhotoCamera';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
// import PostWriteComponent from 'components/postWrite';
import UserAvatarComponent from '../User/UserAvatar';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import {useState} from 'react'
/**
 * Create component class
 */
import { makeStyles, useTheme} from '@material-ui/core/styles';
import { useAuth0 } from '../../auth/react-auth'

import { createStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';


const postWriteButtonStyles = () =>
createStyles();
const useStyles = makeStyles((theme) => ({
    postWritePrimaryText: {
        color: grey[400],
        cursor: 'text',
    },
    postWtireItem: {
        fontWeight: 200,
    },
}))
export function PostWriteButton(props) {
  const { loading, user } = useAuth0()

    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
     const toggleExpanded = () => {
         console.log("aicicicici")
      setExpanded(!expanded);
    }
    const handleOpenPostWrite = () => {
        const { openPostWrite } = props;
        if (openPostWrite) {
            openPostWrite();
        }
    };
    const { tag, displayWriting } = props;
    if (loading) {
        return <div>Loading profile</div>
      }
    const Small = (props) => (
            <div >
                
            <>
                <Paper   elevation={2}>
                    <ListItem className={classes.postWtireItem} button  onClick={() => toggleExpanded}>
                        <UserAvatarComponent
                        fileName={user.picture  }
                            fullName={props.fullName}
                            size={36}
                        />
                        <ListItemText
                        onClick={() => toggleExpanded()}
                            inset
                            primary={
                                <span className={classes.postWritePrimaryText}>
                                    {' '}
                                    {`What's happening? `}
                                </span>
                            }
                        />
                        <ListItemIcon>
                            <SvgCamera />
                        </ListItemIcon>
                    </ListItem>
    
                </Paper>
                <div style={{ height: '16px' }}></div>
            </>
       
    </div>)
     
     const Big = (props) => (
        <div >
            
        <>
            <Paper   elevation={2}>
                <ListItem className={classes.postWtireItem} button  onClick={() => toggleExpanded}>
                    <UserAvatarComponent
                        fullName={props.fullName}
                        fileName={props.avatar}
                        size={36}
                    />
                    <ListItemText
                    onClick={() => toggleExpanded()}
                        inset
                        primary={
                            <span className={classes.postWritePrimaryText}>
                                {' '}
                                {`What's ? `}
                            </span>
                        }
                    />
                    <ListItemIcon>
                        <SvgCamera />
                    </ListItemIcon>
                </ListItem>

            </Paper>
            <div style={{ height: '16px' }}></div>
        </>
   
</div>)
    return (
       expanded ? <Big/> : <Small/>
    )

    }

export default PostWriteButton;
