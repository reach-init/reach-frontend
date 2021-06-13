import React, { Component, Fragment , useState} from 'react';
import SvgCamera from '@material-ui/icons/PhotoCamera';
import classNames from 'classnames';
import ListItem from '../../commons/Drawer/node_modules/@material-ui/core/ListItem';
import ListItemIcon from '../../commons/Drawer/node_modules/@material-ui/core/ListItemIcon';
import ListItemText from '../../commons/Drawer/node_modules/@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import PostWriteComponent from './postWrite';
import UserAvatarComponent from './UserAvatar';
import { useAuth0 } from '../../auth/react-auth'
import { makeStyles } from '../../commons/Drawer/node_modules/@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    postWritePrimaryText: {
        color: grey[400],
        cursor: 'text',
    },
    postWtireItem: {
        fontWeight: 200,
    },
    gridCell: {
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100% !important',
            width: '100%',
        },
    },
}))

export default function PostWriteButton() {
    const { user, loading } = useAuth0()
  const classes = useStyles();
    const [open, setOpen] = useState(false)
    const handleOpenPostWrite = () => {
        setOpen(!open)
    };
    if (loading) return <div/>
    return (
        <div className={classNames('grid-cell animate-top', classes.gridCell)}>
            <PostWriteComponent postWriteOpen={open} onRequestClose={() => setOpen(false)}/>
                        <Paper elevation={2}>
                            <ListItem button className={classes.postWtireItem} onClick={handleOpenPostWrite}>
                                <UserAvatarComponent
                                    fullName={user.name}
                                    fileName={user.picture}
                                    size={46}
                                />
                                <ListItemText
                                    inset
                                    primary={
                                        <span className={classes.postWritePrimaryText}>
                                            {`What's happening`}
                                        </span>
                                    }
                                />
                                <ListItemIcon>
                                    <SvgCamera />
                                </ListItemIcon>
                            </ListItem>
                        </Paper>
                        <div style={{ height: '16px' }}></div>
            </div>
    )
}