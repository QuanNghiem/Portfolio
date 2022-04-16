import React from 'react';
import '../Profile/profile.css';
import IconContainer from '../IconContainer/IconContainer';

class Profile extends React.Component {
    changeEmail (event) {
        navigator.clipboard.writeText('quan.nghiem2904@gmail.com');
    }

    render () {
        return <div>
            <div className="w3-content profile_container" >
                <div className="w3-row">
                    <div className="w3-third card_container">
                        <div className="w3-card-4 profile_card w3-margin-top">
                            <img className='profile_img' src={ `${process.env.PUBLIC_URL}/LinkedIn_Pic.jpeg` } alt="Profile" width="100%"></img>
                            <div className='profile_detail_container'>
                                <i className="fa fa-home profile_icon w3-xxlarge"></i>:
                                <p className='profile_detail'>Lynnwood WA 98087</p>
                            </div>
                            <div className='profile_detail_container'>
                                <i className="fa fa-solid fa-phone profile_icon w3-xxlarge"></i>:
                                <p className='profile_detail'>425 534 4461</p>
                            </div>

                            <div className='profile_detail_container'>
                                <i className="fa fa-solid fa-envelope profile_icon w3-xxlarge"></i>:

                                <a className='profile_detail w3-hide-medium w3-hide-small' href="mailto:quan.nghiem2904@gmail.com" target="_blank" onClick={ () => this.changeEmail('quan.nghiem2904@gmail.com') }>quan.nghiem2904@gmail.com
                                </a>

                                <a className='profile_detail w3-hide-large' href="mailto:quan.nghiem2904@gmail.com" target="_blank" onClick={ () => this.changeEmail('quan.nghiem2904@gmail.com') }>Email
                                </a>
                            </div>

                            <div className='profile_detail_container'>
                                <i className="fa fa-brands fa-linkedin profile_icon w3-xxlarge"></i>:

                                <a className='profile_detail w3-hide-medium w3-hide-small' href="https://www.linkedin.com/in/quannghiem/" target="_blank">linkedin.com/in/quannghiem
                                </a>

                                <a className='profile_detail w3-hide-large' href="https://www.linkedin.com/in/quannghiem/" target="_blank">Linkedin
                                </a>
                            </div>

                            <div className='profile_detail_container'>
                                <i className="fa fa-brands fa-github profile_icon w3-xxlarge"></i>:

                                <a className='profile_detail' href="https://github.com/QuanNghiem" target="_blank">github.com/QuanNghiem
                                </a>
                            </div>

                            <div className='profile_detail_container'>
                                <i className="fa fa-solid fa-file-pdf-o profile_icon w3-xxlarge"></i>:
                                <a className='profile_detail' href={ `${process.env.PUBLIC_URL}/Resume.pdf` } target='_blank' download>Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w3-twothird about_container">
                        <h2>About Me:</h2>
                        <p>Hi, I'm Quan!</p>
                        <p>I'm a full stack developer based out of the Greater Seattle Area.</p>
                        <p>
                            I enjoy developing web applications with a variety of technologies and improving my existing skillset while constantly augmenting it with new technologies. You can see some of the applications of the technologies I've used in my Projects. Currently, I'm excited about front-end, component-based frameworks like React, Angular, and Vue.
                        </p>
                        <p>
                            I am currently working at Citigroup where I am porting deprecated webpages to new webpages powered by Angular for front-end view with ExpressJS acting as middleware service.
                        </p>
                        <IconContainer />
                    </div>
                </div>
            </div>
        </div >
    }
}

export default Profile;