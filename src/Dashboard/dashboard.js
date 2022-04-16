import React from 'react';
import Nav from '../Navigation/navigation';
import Profile from '../Profile/profile';
import Project from '../Project/Project';

class Dasboard extends React.Component {
    render () {
        return <div>
            <Nav />
            <Profile />
            <Project />
        </div>
    }
}

export default Dasboard;
