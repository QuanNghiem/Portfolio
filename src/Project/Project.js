import React from 'react';
import '../Project/Project.css';
import projectData from '../project_data.json';
import Card from '../Card/Card';

class Project extends React.Component {
    // componentDidMount () {
    //     this.openOnLoad('My Portfolio');
    // }

    openOnLoad (id) {
        var x = document.getElementById(id);
        x.classList.add("w3-show");
        var btn = document.getElementById(id + "btn");
        btn.classList.replace("w3-black", "acc_active")
        var sign = document.getElementById(id + "sign");
        sign.innerHTML = '-';
    }

    myFunction (id) {
        var x = document.getElementById(id);
        if (!x.classList.contains("w3-show")) {
            x.classList.add("w3-show");
            var btn = document.getElementById(id + "btn");
            btn.classList.replace("w3-black", "acc_active")
            var sign = document.getElementById(id + "sign");
            sign.innerHTML = '-';
            // x.previousElementSibling.className =
            //     x.previousElementSibling.className.replace("w3-black", "w3-red");
        } else {
            x.classList.remove("w3-show");
            var btn = document.getElementById(id + "btn");
            btn.classList.replace("acc_active", "w3-black");
            var sign = document.getElementById(id + "sign");
            sign.innerHTML = '+';
            // x.previousElementSibling.className =
            //     x.previousElementSibling.className.replace("w3-red", "w3-black");
        }
    };

    render () {
        return <div>
            <div className="w3-content parent">
                <div id="Project" className='w3-content'>
                    <h1>
                        My Projects
                    </h1>
                </div>
                {
                    projectData.data.map((obj, i) => {
                        return <div>
                            <button id={ obj.title + "btn" } onClick={ () => this.myFunction(obj.title) } className="w3-button w3-block w3-black w3-left-align acc_btn">
                                <div className='acc_container'>
                                    { obj.title }
                                    <div className='acc_sign' id={ obj.title + "sign" }>+</div>
                                </div>
                            </button>

                            <div id={ obj.title } className="w3-hide">
                                <div className="child">
                                    <Card data={ obj } key={ i } />
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div >
    }
}

export default Project;