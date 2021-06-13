// - Import react components
import { withStyles } from '../../commons/NavBar/node_modules/@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React, { Component } from 'react';

export class UserAvatarComponent extends Component {
    

    render() {
        const { fileName, fullName, style, size, onClick, className, theme } = this.props;

        return (
            <div style={{ display: 'inherit' }}>
                {fileName && fileName !== '' && fileName !== 'noImage' ? (
                    <Avatar
                        // variant="rounded"
                        className={className || ''}
                        src={fileName ? fileName : ' '}
                        style={{
                            ...style,
                            backgroundColor: 'white',
                            width: size || 36,
                            height: size || 36,
                        }}
                        onClick={onClick}
                    />
                ) : (
                    <Avatar
                        variant="rounded"
                        className={className || ''}
                        style={{ ...style, width: size || 36, height: size || 36 }}
                        onClick={onClick}
                    >
                        {fullName ? fullName.slice(0, 1) : ''}
                    </Avatar>
                )}
            </div>
        );
    }
}

 export default UserAvatarComponent;
