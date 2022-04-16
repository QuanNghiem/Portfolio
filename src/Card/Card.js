import React from 'react';
import '../Card/Card.css';

class Card extends React.Component {
    render () {
        return <div className='project_container'>
            <div>
                <div className="w3-card-4">
                    <div className='w3-content card_container'>
                        <img src={ `${process.env.PUBLIC_URL}` + this.props.data.img } alt="Picture" width="100%"></img>
                    </div>
                    <div className="w3-container w3-center ">
                        <h1 className="project_title">{ this.props.data.title }</h1>
                        <div className='w3-bar'>
                            <div className="button_container">
                                {
                                    this.props.data.link.map((link, i) => {
                                        return <a href={ link.src } target='_blank'>
                                            <button className="w3-button w3-black w3-round-large w3-margin-left w3-margin-right w3-margin-top">{ link.title }</button>
                                        </a>
                                    })
                                }
                            </div>
                        </div>
                        <p>
                            { this.props.data.description }
                        </p>
                        <div className='w3-bar'>
                            <h4>
                                Technology Used
                            </h4>
                            <div className="button_container">
                                {
                                    this.props.data.tech.map((tech, i) => {
                                        return <button className="w3-button w3-white w3-border w3-round-xxlarge w3-bar-item w3-border-indigo card_btn">{ tech }</button>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Card;