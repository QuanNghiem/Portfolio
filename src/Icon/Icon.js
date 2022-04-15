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

            {/* <div className='icon_container'>
                <i className="devicon-html5-plain colored tech_icon"></i>
                <p >
                    HTML
                </p>
            </div> */}
        </div>
    }
}

export default Icon;