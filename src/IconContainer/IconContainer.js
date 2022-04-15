import React from 'react';
import '../IconContainer/IconContainer.css';
import Icon from '../Icon/Icon';

class IconContainer extends React.Component {
    render () {
        return <div>
            <div>
                <div className='header_container'>
                    <h3 className='header'>Front-end:</h3>
                </div>
                <div>
                    <div>
                        <div className='icon_container'>
                            <Icon data={
                                {
                                    iconClass: 'devicon-angularjs-plain colored tech_icon',
                                    iconName: 'Angular'
                                }
                            } />

                            <Icon data={
                                {
                                    iconClass: 'devicon-html5-plain colored tech_icon',
                                    iconName: 'HTML'
                                }
                            } />

                            <Icon data={
                                {
                                    iconClass: 'devicon-css3-plain colored tech_icon',
                                    iconName: 'CSS'
                                }
                            } />

                            <Icon data={
                                {
                                    iconClass: 'devicon-react-original colored tech_icon',
                                    iconName: 'React'
                                }
                            } />

                            <Icon data={
                                {
                                    iconClass: 'devicon-javascript-plain colored tech_icon',
                                    iconName: 'Javascript'
                                }
                            } />

                            <Icon data={
                                {
                                    iconClass: 'devicon-typescript-plain colored tech_icon',
                                    iconName: 'Typescript'
                                }
                            } />
                        </div>
                    </div>
                </div>

                <div className='header_container'>
                    <h3 className='header'>Back-end</h3>
                </div>
                <div>
                    <div className='icon_container'>
                        <Icon data={
                            {
                                iconClass: 'devicon-dotnetcore-plain colored tech_icon',
                                iconName: '.NetCore'
                            }
                        } />

                        <Icon data={
                            {
                                iconClass: 'devicon-csharp-plain colored tech_icon',
                                iconName: 'C#'
                            }
                        } />

                        <Icon data={
                            {
                                iconClass: 'devicon-nodejs-plain colored tech_icon',
                                iconName: 'NodeJS'
                            }
                        } />

                        <Icon data={
                            {
                                iconClass: 'devicon-express-original-wordmark colored tech_icon',
                                iconName: 'ExpressJS'
                            }
                        } />
                    </div>
                </div>

                <div className='header_container'>
                    <h3 className='header'>Databases</h3>
                </div>
                <div>
                    <div className='icon_container'>
                        <Icon data={
                            {
                                iconClass: 'devicon-mongodb-plain colored tech_icon',
                                iconName: 'MongoDB'
                            }
                        } />

                        <Icon data={
                            {
                                iconClass: 'devicon-oracle-original colored tech_icon',
                                iconName: 'OracleSQL'
                            }
                        } />

                        <Icon data={
                            {
                                iconClass: 'devicon-sqlite-plain colored tech_icon',
                                iconName: 'SQLite'
                            }
                        } />

                        <Icon data={
                            {
                                iconClass: 'devicon-neo4j-plain colored tech_icon',
                                iconName: 'Neo4J'
                            }
                        } />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default IconContainer;