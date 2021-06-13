
import { useAuth0 } from '../../auth/react-auth'
import { makeStyles } from '@material-ui/core/styles';
import React, { Component, Fragment , useState} from 'react';

// - Import react components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { grey } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SvgCamera from '@material-ui/icons/PhotoCamera';
import SvgPlay from '@material-ui/icons/PlayCircleFilled';
import SvgRemoveImage from '@material-ui/icons/RemoveCircle';
import SvgAddVideo from '@material-ui/icons/VideoCall';
import VideoGalleryIcon from '@material-ui/icons/VideoLibrary';
// import FileAPI from 'api/FileAPI';
// import * as PostAPI from 'api/PostAPI';
// import StringAPI from 'api/StringAPI';
import classNames from 'classnames';
// import AddVideo from 'components/addVideo/AddVideoComponent';
// import AlbumDialogComponent from './AlbumDialogComponent';
import Img from './Img';
import PostImageUploadComponent from './PostImageUploadComponent';
import UserAvatarComponent from './UserAvatar';
// import UserPermissionComponent from 'components/userPermission/UserPermissionComponent';
// import VideoGalleryComponent from 'components/videoGallery/VideoGalleryComponent';
// import uuid from 'uuid';
import CircularProgress from '@material-ui/core/CircularProgress';
// import moment from 'moment/moment';


const useStyles = makeStyles((theme) => ({
    fullPageXs: {
        minWidth: 500,
        maxWidth: 500,
        maxHeight: '500px',
        [theme.breakpoints.down('xs')]: {
            minWidth: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            width: '100%',
            height: '100%',
            margin: 0,
            overflowY: 'auto',
        },
    },
    backdrop: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        willChange: 'opacity',
        // backgroundColor: 'rgba(251, 249, 249, 0.5)',
        WebkitTapHighlightColor: 'transparent',
    },
    input: {
        // cursor: 'pointer',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '0%',
        opacity: 0,
         
    },
    content: {
        padding: '10px',
        paddingTop: 0,
    },
    dialogRoot: {
        paddingTop: 0,
    },
    popperOpen: {
        zIndex: 10,
    },
    popperClose: {
        pointerEvents: 'none',
        zIndex: 0,
    },
    author: {
        paddingRight: 70,
    },
    dialogTitle: {
        padding: 0,
    },
    iconButtonsRoot: {
        justifyContent: 'flex-start',
        margin: '0px 4px',
    },
    playVideo: {
        position: 'absolute',
        right: '45%',
        top: '45%',
        cursor: 'pointer',
        backgroundColor: '#f1efeca3',
        borderRadius: '50%',
        height: 60,
        padding: 0,
    },
    playIcon: {
        width: 60,
        height: 60,
        fill: 'red',
    },
    noDisplay: {
        display: 'none',
    },
    playIconButtonRoot: {
        width: 60,
        height: 60,
    },
    galleryActions: {
        margin: 0,
        background: '#fff',
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        height: 56,
        textAlign: 'center',
        padding: 4,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    galleryDialogTitle: {
        color: '#676767',
        // flex: 1
    },
    galleryDialogIcon: {},
    galleryAction: {
        margin: 0,
        padding: 0,
        minWidth: 0,
    },
    devider: {
        marginBottom: 10,
    },
    videoGallery: {},
    permission: {
        fontWeight: 400,
        fontSize: '14px',
        cursor: 'pointer',
        color: 'blue',
    },
    disableComponent: {
        opacity: '0.2',
        'pointer-events': 'none',
    },
    inprogress: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: '#ffffff82',
        zIndex: 2,
    },
}))

export default function PostWriteComponent(props) {
    const classes = useStyles();
    const { user, loading } = useAuth0()
    const [albumPhotos, setAlbumPhotos] = useState([])
    const selectedPhotos = []
    
    const handleToggleComments = () => {
        // setState((prevState) => ({
        //     disableSharing: !prevState.disableComments,
        //     disabledPost: !isPostChangeValid(prevState),
        // }));
    };
    const handleTogglePermission = () => {
        // setState((prevState) => ({
        //     permissionOpen: !prevState.permissionOpen,
        //     disabledPost: !isPostChangeValid(prevState),
        // }));
    };

    const  handleRemoveImage = () => {
        // setState((prevState) => ({
        //     image: '',
        //     video: '',
        //     imageFullPath: '',
        //     postType: PostType.Text,
        //     disabledPost: !isPostChangeValid(prevState),
        // }));
    };

    const closeAlbumDialog = () => {
        // const { closeAlbum } = props;
        // if (closeAlbum) {
        //     closeAlbum();
        // }
    };

    /**
     * Open album dialog
     */
    const openAlbumDialog = () => {
        // const { openAlbum } = props;
        // if (openAlbum) {
        //     openAlbum();
        // }
    };

    const handleClosePostAlbum = () => {};

    const handlePost = () => {
        // setState({
        //     disabledPost: false,
        // });
        // const {
        //     image,
        //     imageFullPath,
        //     disableComments,
        //     disableSharing,
        //     postText,
        //     video,
        //     thumbnail,
        //     postType,
        //     accessUserList,
        //     selectedPhotos,
        //     permission,
        // } = state;

        // const { currentUser, edit, post, update, postModel } = props;
        // if (!isPostChangeValid(state)) {
        //     setState({
        //         disabledPost: true,
        //     });
        //     return undefined;
        // }

        // const tags = PostAPI.getContentTags(postText);

        // const albumPhotos: Album = new Album();
        // const files: {
        //     src: string;
        //     file: any;
        //     fileName: string;
        // }[] = [];

        // selectedPhotos.forEach((photo) => {
        //     if (photo.file) {
        //         files.push(photo);
        //     } else {
        //         albumPhotos.photos.push(photo.src);
        //     }
        // });

        // // In edit status we should fire update if not we should fire post function

        // const nowDate = moment().utc().valueOf();
        // const newPost: Post = {
        //     postTypeId: postType || 0,
        //     creationDate: nowDate,
        //     deleteDate: 0,
        //     score: 0,
        //     viewCount: 0,
        //     body: postText,
        //     ownerUserId: currentUser.get('userId'),
        //     ownerDisplayName: currentUser.get('fullName'),
        //     ownerAvatar: currentUser.get('avatar'),
        //     lastEditDate: nowDate,
        //     album: { ...albumPhotos },
        //     tags: tags || [],
        //     commentCounter: 0,
        //     image: image || '',
        //     imageFullPath: imageFullPath || '',
        //     video: video || '',
        //     thumbnail: thumbnail || '',
        //     disableComments: disableComments || false,
        //     disableSharing: disableSharing || false,
        //     accessUserList: accessUserList || [],
        //     permission: permission || UserPermissionType.Public,
        //     deleted: false,
        //     version: config.dataFormat.postVersion,
        // };

        // if (!edit) {
        //     post(newPost, files);
        // } else if (postModel) {
        //     // In edit status we pass post to update functions
        //     const updatedPost = postModel
        //         .set('body', postText)
        //         .set('tags', ImuList(tags))
        //         .set('image', image)
        //         .set('imageFullPath', imageFullPath)
        //         .set('video', video)
        //         .set('album', fromJS({ ...albumPhotos }))
        //         .set('thumbnail', thumbnail)
        //         .set('disableComments', disableComments)
        //         .set('disableSharing', disableSharing)
        //         .set('postTypeId', postType)
        //         .set('accessUserList', ImuList(accessUserList))
        //         .set('permission', permission);

        //     update(updatedPost, files);
        // }
    };



    const onRequestSetImage = (url) => {
        // setState({
        //     image: url,
        //     video: '',
        //     postType: PostType.Photo,
        //     disabledPost: false,
        // });
    };

    /**
     * Set post video url
     */
    const onSetVideo = (url, thumbnail) => {
        // setState({
        //     image: '',
        //     thumbnail,
        //     video: url,
        //     postType: PostType.Video,
        //     disabledPost: false,
        // });
    };

    /**
     * When the post text changed
     */
    const handleOnChange = (event) => {
        // const data = event.target.value;
        // const { selectedPhotos } = state;
        // if (
        //     (data.length === 0 || data.trim() === '' || (props.edit && data.trim() === props.text)) &&
        //     !selectedPhotos.length
        // ) {
        //     setState({
        //         postText: data,
        //         disabledPost: true,
        //     });
        // } else {
        //     setState({
        //         postText: data,
        //         disabledPost: false,
        //     });
        // }
    };

    /**
     * Open add video link dialog
     */
    const handleOpenVideoLink = () => {
        // setState({
        //     videoLinkOpen: true,
        // });
    };

    /**
     * Clode add video link dialog
     */
    const handleCloseVideoLink = () => {
        // setState({
        //     videoLinkOpen: false,
        // });
    };

    /**
     * Open add video gallery dialog
     */
    const handleOpenVideoGallery = () => {
        // setState({
        //     videoGalleryOpen: true,
        // });
    };

    /**
     * Clode add video gallery dialog
     */
    const handleCloseVideoGallery = () => {
        // setState({
        //     videoGalleryOpen: false,
        // });
    };

    /**
     * Handle open more menu
     */
    const handleOpenMenu = (event) => {
        setMenuOpen(true)
        setMenuAnchorEl(event.currentTarget)
    };

    /**
     * Handle close more menu
     */
    const handleCloseMenu = () => {
        setMenuOpen(false)
        setMenuAnchorEl(null)
    };

    /**
     * Handle post access list
     */
    const handleAccessList = (accessList, selectedAccess) => {
        // setState({
        //     accessUserList: accessList,
        //     permission: selectedAccess,
        //     permissionOpen: false,
        // });
    };

    /**
     * Handle delete photo
     */
    const handleDeletePhoto = (fileName) => {
        // const { selectedPhotos, postText } = state;
        // const updatedPhotos: {
        //     src: string;
        //     file: any;
        //     fileName: string;
        // }[] = [];
        // selectedPhotos.forEach((photo) => {
        //     if (fileName !== photo.fileName) {
        //         updatedPhotos.push(photo);
        //     }
        // });
        // let disabledPost = true;
        // const textCondition =
        //     postText.length === 0 || postText.trim() === '' || (props.edit && postText.trim() === props.text);
        // if ((updatedPhotos && updatedPhotos.length > 0) || !textCondition) {
        //     disabledPost = false;
        // }
        // setState({
        //     selectedPhotos: [...updatedPhotos],
        //     disabledPost,
        // });
    };

    /**
     * Handle on change file upload
     */
    const onUploadAlbumChange = (event) => {
        // const { selectedPhotos } = state;

        // const files: File[] = event.currentTarget.files;
        // const parsedFiles: { src: string; fileName: string; file: File }[] = [];
        // for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
        //     const file = files[fileIndex];
        //     const extension = FileAPI.getExtension(file.name);
        //     const fileName = `${uuid()}.${extension}`;
        //     parsedFiles.push({ src: URL.createObjectURL(file), fileName, file });
        // }
        // const photos = [...selectedPhotos, ...parsedFiles];

        // // TODO: add upload album dialog
        // // if (files.length > 3) {
        // //     openAlbumDialog();
        // // } else {
        // // }
        // setState({
        //     selectedPhotos: [...photos],
        //     disabledPost: false,
        //     postType: PostType.PhotoGallery,
        // });
        // event.currentTarget.value = null;
    };

    /**
     * Is post change valid
     */
    const isPostChangeValid = (prevState) => {
        // const { image, video, postText, selectedPhotos } = prevState;

        // return (
        //     !StringAPI.isEmpty(image) ||
        //     !StringAPI.isEmpty(video) ||
        //     !StringAPI.isEmpty(postText) ||
        //     (selectedPhotos && selectedPhotos.length > 0)
        // );
    };

    /**
     * Get permission label
     */
    const getPermissionLabel = () => {
        return 'Public'
        // const { t } = props;
        // const { permission } = state;
        // let permissionLabel = '';
        // if (permission === UserPermissionType.Public) {
        //     permissionLabel = t('permission.public');
        // } else if (permission === UserPermissionType.Circles) {
        //     permissionLabel = t('permission.circles');
        // } else if (permission === UserPermissionType.OnlyMe) {
        //     permissionLabel = t('permission.onlyMe');
        // }
        // return permissionLabel;
    };
    // const albumOpen = albumDialogOpen !== undefined ? albumDialogOpen : false;
    const albumOpen =  false;
    const [menuOpen, setMenuOpen] = useState(false)
    const [menuAnchorEl, setMenuAnchorEl] = useState(null)
    const [disableComments, setDisableComments] = useState(false)
    const [disableSharing, setDisableSharing] = useState(false)
    const [handleToggleSharing, setHandleToggleSharing] = useState(false)
    const [image, setImage] = useState(null)
    const [postType, setPosType] = useState('PostType.Text')
    const [thumbnail, setThumbnail] = useState(null)
    const [postText, setPostText] = useState(null)
    const [disabledPost, setDisabledPost] = useState(false)
    const [videoGalleryOpen, setVideoGalleryOpen] = useState(null)

    if (loading) {return <div/>}
    const rightIconMenu = (
        <div>
            <Tooltip id="tooltip-icon" title={'post.moreTooltip'} placement="bottom-start">
                <IconButton onClick={handleOpenMenu}>
                    <MoreVertIcon />
                </IconButton>
            </Tooltip>
            <Menu
                open={menuOpen}
                anchorEl={menuAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handleCloseMenu}
            >
                <MenuItem onClick={handleToggleComments} style={{ fontSize: '14px' }}>
                    {!disableComments ? 'Disable Comments' :'Enable Comments'}{' '}
                </MenuItem>
                <MenuItem onClick={handleToggleSharing} style={{ fontSize: '14px' }}>
                    {!disableSharing ? 'Disable Sharing' : 'Enable Sharing'}
                </MenuItem>
            </Menu>
        </div>
    );



    const postAvatar = (
        <UserAvatarComponent
            fullName={user.name}
            fileName={user.picture}
            size={56}
        />
    );

    const author = (
        <div className={classes.author}>
            <span
                style={{
                    fontSize: '14px',
                    paddingRight: '10px',
                    fontWeight: 400,
                    color: 'rgba(0,0,0,0.87)',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    lineHeight: '25px',
                }}
            >{`${user.name}  |`}</span>
            <span
                onClick={handleTogglePermission}
                className={classNames(classes.permission, classes.disableComponent)}
            >
                {`${getPermissionLabel()}`}
            </span>
        </div>
    );
  

    
    const loadImage =
        (image && image !== '' && postType === 'PostType.Photo') ||
        (thumbnail && thumbnail !== '' && postType === 'PostType.Video') ? (
            <div>
                <div style={{ position: 'relative', overflowY: 'hidden', overflowX: 'auto' }}>
                    <ul
                        style={{
                            position: 'relative',
                            whiteSpace: 'nowrap',
                            padding: '0 0 0 16px',
                            margin: '8px 0 0 0',
                            paddingRight: '16px',
                            verticalAlign: 'bottom',
                            flexShrink: 0,
                            listStyleType: 'none',
                        }}
                    >
                        <div style={{ display: 'flex', position: 'relative' }}>
                            <span
                                onClick={handleRemoveImage}
                                style={{
                                    position: 'absolute',
                                    width: '28px',
                                    backgroundColor: 'rgba(6, 6, 6, 0.82)',
                                    height: '28px',
                                    right: 12,
                                    top: 4,
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <SvgRemoveImage style={{ color: 'rgba(239, 235, 235, 0.83)' }} />
                            </span>
                            <span
                                className={classNames(classes.playVideo, {
                                    [classes.noDisplay]: postType !== 'PostType.Video',
                                })}
                                style={{}}
                            >
                                <SvgPlay className={classes.playIcon} />
                            </span>

                            <div
                                style={{
                                    display: 'inline-block',
                                    width: '100%',
                                    marginRight: '8px',
                                    transition: 'transform .25s',
                                }}
                            >
                                <li
                                    style={{
                                        width: '100%',
                                        margin: 0,
                                        verticalAlign: 'bottom',
                                        position: 'static',
                                    }}
                                >
                                    <Img
                                        fileName={postType === 'PostType.Photo' ? image : thumbnail}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        ) : (
            ''
        );
    // const inprogress = updatePostRequestStatus === ServerRequestStatusType.Sent;
    const inprogress = false
    const progress = false

    return (
        <div style={props.style}>
            {props.children}
            <Dialog
                BackdropProps={{ className: classes.backdrop }}
                PaperProps={{ className: classes.fullPageXs }}
                key={props.id || 0}
                open={props.postWriteOpen}
                // onClose={props.onRequestClose}
            >
                {inprogress && (
                    <div className={classes.inprogress}>
                        <CircularProgress color="secondary" />
                    </div>
                )}
                <DialogTitle 
                className={classes.dialogTitle}
                >
                    <CardHeader title={author} avatar={postAvatar} action={rightIconMenu}></CardHeader>
                </DialogTitle>
                <DialogContent
                
                className={classes.content} 
                
                style={{ paddingTop: 0 }}>
                    <Card elevation={0}>
                        <CardContent>
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <div
                                        style={{
                                            position: 'relative',
                                            flexDirection: 'column',
                                            display: 'flex',
                                            flexGrow: 1,
                                            overflowY: 'auto',
                                            maxHeight: '300px',
                                        }}
                                    >
                                        <TextField
                                            autoFocus
                                            value={postText}
                                            onChange={handleOnChange}
                                            placeholder={`What's happening`}
                                            multiline
                                            rows={2}
                                            rowsMax={5}
                                            style={{
                                                fontWeight: 400,
                                                fontSize: '14px',
                                                margin: '0 16px',
                                                flexShrink: 0,
                                                width: 'initial',
                                                flexGrow: 1,
                                            }}
                                        />

                                        {loadImage}
                                        {selectedPhotos.length > 0 && (
                                            <PostImageUploadComponent
                                                photos={selectedPhotos}
                                                progress={progress}
                                                onDelete={handleDeletePhoto}
                                            />
                                        )}
                                    </div>
                                </div>
                            </Grid>
                        </CardContent>
                    </Card>
                </DialogContent>
                <DialogActions className={classes.iconButtonsRoot}>
                    <div 
                className={classes.content} 

                    // style={{ flexShrink: 0, boxFlex: 0, flexGrow: 0, maxHeight: '48px', width: '100%' }}
                    >
                        <div style={{ flexDirection: 'row', display: 'flex' }}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="album-button-file"
                                multiple
                                onChange={onUploadAlbumChange}
                                type="file"
                            />
                            <div
                                style={{
                                    outline: 'none',
                                    width: '48px',
                                    zIndex: 0,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    textAlign: 'center',
                                    transition: 'background .3s',
                                    border: 0,
                                    borderRadius: '50%',
                                    display: 'inlineBlock',
                                    // height: '28px',
                                }}
                            >
                                <span
                                    style={{
                                        top: '17px',

                                        display: 'block',
                                        position: 'relative',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <label htmlFor="album-button-file">
                                        <SvgCamera style={{ color: 'grey' }} />
                                    </label>
                                </span>
                            </div>
                            <div
                                onClick={handleOpenVideoLink}
                                style={{
                                    outline: 'none',
                                    width: '48px',
                                    zIndex: 0,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    textAlign: 'center',
                                    transition: 'background .3s',
                                    border: 0,
                                    // borderRadius: '50%',
                                    display: 'inlineBlock',
                                    // height: '48px',
                                }}
                            >
                                <span
                                    style={{
                                        top: '15px',
                                        display: 'block',
                                        position: 'relative',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <SvgAddVideo style={{ color: 'grey', width: 30, height: 30 }} />
                                </span>
                            </div>
                            <div
                                // className={classes.disableComponent}
                                onClick={handleOpenVideoGallery}
                                style={{
                                    outline: 'none',
                                    width: '48px',
                                    zIndex: 0,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    textAlign: 'center',
                                    transition: 'background .3s',
                                    border: 0,
                                    borderRadius: '50%',
                                    display: 'inlineBlock',
                                    height: '48px',
                                }}
                            >
                                <span
                                    style={{
                                        top: '15px',

                                        display: 'block',
                                        position: 'relative',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <VideoGalleryIcon style={{ color: 'grey', width: 24, height: 24 }} />
                                </span>
                            </div>
                        </div>
                    </div>
                {/* </DialogActions>
                <DialogActions  > */}
                    <Button
                    
                    variant="outlined"
                        
                        disableFocusRipple={true}
                        disableRipple={true}
                        onClick={props.onRequestClose}
                        style={{ color: grey[800] }}
                    >
                        {'Cancel'}
                    </Button>
                    <Button
                    variant="outlined"
                        color="primary"
                        disableFocusRipple={true}
                        disableRipple={true}
                        onClick={handlePost}
                        disabled={disabledPost}
                    >
                        {props.edit ?  'Update' : 'Post'}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* {albumOpen && progress ? (
                <AlbumDialogComponent
                    open={albumOpen}
                    progress={progress}
                    photos={selectedPhotos}
                    onClose={closeAlbumDialog}
                />
            ) : (
                ''
            )} */}

            {/* Video gallery Modal*/}
            <Dialog
                PaperProps={{ className: classNames(classes.fullPageXs, classes.videoGallery) }}
                open={videoGalleryOpen}
                onClose={handleCloseVideoGallery}
            >
                <DialogActions className={classes.galleryActions}>
                    <Typography variant={'h6'} component={'div'} className={classes.galleryDialogTitle}>
                        <VideoGalleryIcon
                            style={{ color: 'rgb(230, 35, 35)', margin: '0 10px', width: 24, height: 24 }}
                        />
                        {'post.videoGalleryLabel'}
                    </Typography>
                    <IconButton onClick={handleCloseVideoGallery}>
                        <CloseIcon />
                    </IconButton>
                </DialogActions>
                <Divider className={classes.devider} />
                <DialogContent>
                    {/* <VideoGalleryComponent set={onSetVideo} close={handleCloseVideoGallery} /> */}
                </DialogContent>
            </Dialog>

            {/* <AddVideo open={videoLinkOpen} onClose={handleCloseVideoLink} onAddLink={onSetVideo} />
            <UserPermissionComponent
                onClose={handleTogglePermission}
                open={permissionOpen}
                onAddAccessList={handleAccessList}
                access={permission}
            /> */}
        </div>
    );


}