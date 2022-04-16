import React from 'react';
import '../Icon/Icon.css';

class Icon extends React.Component {
    render () {
        return <div>
            <div className='icon'>
                <i className={ this.props.data.iconClass }></i>
                <p>
                    { this.props.data.iconName }
                </p>
            </div>
        </div>
    }
}

export default Icon;