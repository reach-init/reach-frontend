// - Import react components
import { withStyles } from '../../commons/Drawer/node_modules/@material-ui/core/styles';
import SvgImage from '@material-ui/icons/Image';
import React, { Component } from 'react';
const styles = () => ({
    image: {
        verticalAlign: 'top',
        maxWidth: '100%',
        minWidth: '100%',
        width: '100%',
    },
});

/**
 * Create component class
 */
export class ImgComponent extends Component {
    styles = {
        loding: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100px',
            position: 'relative',
            color: '#cacecd',
            fontWeight: 400,
        },
        loadingContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        loadingImage: {
            fill: 'aliceblue',
            width: '50px',
            height: '50px',
        },
    };

    /**
     * Component constructor
     *
     */
    constructor(props) {
        super(props);

        // Defaul state
        this.state = {
            isImageLoaded: false,
        };

        // Binding functions to `this`
        this.handleLoadImage = this.handleLoadImage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Handle click on image
     */
    handleClick = (event) => {
        const { onClick } = this.props;
        if (onClick) {
            onClick(event);
        }
    };

    /**
     * Will be called on loading image
     */
    handleLoadImage = () => {
        this.setState({
            isImageLoaded: true,
        });
    };

    /**
     * Reneder component DOM
     *
     */
    render() {
        const { fileName, style, t } = this.props;
        const { isImageLoaded } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <img
                    alt={fileName || ''}
                    className={classes.image}
                    onClick={this.handleClick}
                    onLoad={this.handleLoadImage}
                    src={fileName || ''}
                    style={isImageLoaded ? style : { display: 'none' }}
                />
                <div
                    style={
                        Object.assign(
                            {},
                            { backgroundColor: 'white' },
                            isImageLoaded ? { display: 'none' } : this.styles.loding,
                        ) 
                    }
                >
                    <div style={this.styles.loadingContent}>
                        <SvgImage style={this.styles.loadingImage} />
                        <div>{t('image.notLoaded')}</div>
                    </div>
                </div>
            </div>
        );
    }
}

 
 
export default withStyles(styles)(ImgComponent)
