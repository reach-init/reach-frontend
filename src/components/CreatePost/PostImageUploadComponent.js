// - Impoer react components
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '../../commons/Drawer/node_modules/@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '../../commons/Drawer/node_modules/@material-ui/core/styles';
import SvgDelete from '@material-ui/icons/Delete';
import * as R from 'ramda';
import React, { Component } from 'react';
import { createStyles } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';

const postImageUploadStyles = (theme) =>
    createStyles({
        fullPageXs: {},
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            marginTop: 30,
        },
        gridList: {
            flexWrap: 'nowrap',
            width: '100%',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            height: 50,
            paddingLeft: theme.spacing(4),
            marginBottom: 20,
            backgroundColor: theme.palette.background.default,
        },
        paper: {
            minHeight: '500px',
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                height: '100%',
                maxHeight: '100%',
                maxWidth: '100%',
                borderRadius: 0,
                margin: 0,
            },
        },
        information: {
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
        },
        buttonProgress: {
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
        wrapper: {
            margin: theme.spacing(1),
            position: 'relative',
        },
        tile: {
            borderRadius: 8,
            border: '1px solid #0000001a',
        },
    });
/**
 * Create component class
 */
export class PostImageUploadComponent extends Component {
    /**
     * Get drived state from props
     */
    static getDerivedStateFromProps(props, state) {
        if (!R.equals(props.photos, state.prevPhotos)) {
            return {
                selectedPhotos: [...props.photos],
                prevPhotos: props.photos,
            };
        }

        return null;
    }

    /**
     * Component constructor
     *
     */
    constructor(props) {
        super(props);

        this.state = {
            selectedPhotos: [],
            prevPhotos: [],
        };

        // Binding function to `this`
        this.imageList = this.imageList.bind(this);
        this.deleteSelectedPhoto = this.deleteSelectedPhoto.bind(this);
        this.saveAlbum = this.saveAlbum.bind(this);
    }

    /**
     * Save album
     */
    saveAlbum = () => {
        const { progress, currentUser } = this.props;
        const { accessUserList, permission } = this.state;

        // const albumTitle = StringAPI.isEmpty(this.state.albumName) ? t('album.defaultAlbumName') : this.state.albumName;

        const selectedPhotos = [...this.state.selectedPhotos];
        const images = [];
        selectedPhotos.slice(0, 4).map((photo) => {
            const meta = progress.getIn([photo.fileName, 'meta'], { url: '' });
            const fileId = photo.fileName.split('.')[0];
            const image = {}
            // const image = new Media(
            //     fileId,
            //     0,
            //     0,
            //     meta.url || URL.createObjectURL(photo.src),
            //     meta.url || URL.createObjectURL(photo.src),
            //     photo.fileName,
            //     '',
            //     '',
            //     photo.fileName,
            //     throwNoValue(currentUser, 'currentUser').userId,
            //     0,
            //     '',
            //     0,
            //     0,
            //     '',
            //     false,
            //     accessUserList,
            //     permission,
            // );
            images.push(image);
            return {
                url: meta.url,
                fileName: photo.fileName,
                fileId,
            };
        });
    };

    /**
     * Delete selected photo
     */
    deleteSelectedPhoto = (fileName) => {
        const { onDelete } = this.props;
        let selectedPhotos = [...this.state.selectedPhotos];
        selectedPhotos = selectedPhotos.filter((photo) => photo.fileName !== fileName);
        this.setState({
            selectedPhotos,
        });

        onDelete(fileName);
    };

    /**
     * Image list
     */
    imageList = () => {
        const { classes, progress } = this.props;
        const { selectedPhotos } = this.state;
        return selectedPhotos.map((photo) => {
            const progressPercent = progress.getIn([photo.fileName, 'percent'], 0);
            const progressVisible = progress.getIn([photo.fileName, 'visible'], false);

            return (
                <GridListTile classes={{ tile: classes.tile }} key={`album-dialog-tile-${photo.fileName}`}>
                    <img src={photo.src} alt={'something'} />
                    <GridListTileBar
                        title={
                            progressVisible ? (
                                <LinearProgress variant="determinate" value={progressPercent} color="secondary" />
                            ) : (
                                ''
                            )
                        }
                        actionIcon={
                            !progressVisible ? (
                                <IconButton
                                    className={classes.icon}
                                    onClick={() => this.deleteSelectedPhoto(photo.fileName)}
                                >
                                    <SvgDelete />
                                </IconButton>
                            ) : (
                                ''
                            )
                        }
                    />
                </GridListTile>
            );
        });
    };

    /**
     * Render Grid tile
     */
    gridTile = () => {
        const { classes } = this.props;
        return (
            <GridList cellHeight={100} className={classes.gridList} cols={3}>
                {this.imageList()}
            </GridList>
        );
    };

    render() {
        const { classes } = this.props;

        return <div className={classes.root}>{this.gridTile()}</div>;
    }
}



 
   
export default withStyles(postImageUploadStyles, { withTheme: true })(PostImageUploadComponent)
