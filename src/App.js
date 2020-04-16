import React from 'react';

import Nav from './Navigation/Nav';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Examples from './Components/Examples'
import Skill from './Components/Skill';
import Card from './Components/Card'
import cardsData from './Data/cardsData'
import ClassComponent from './Components/ClassComponent'
import StateExample from './Components/StateExample'
import ConditionalMaster from './Components/ConditionalMaster';


function App() {
    const cardsComponents = cardsData.map(data => {
        return (
            <Card key={data.id} title={data.title} desc={data.desc} img={data.img} />
        )
    });
    return (
        <React.StrictMode>
            <Nav />
            <Banner />
            <Examples />
            <Skill
                info={{
                    title: 'FullStack Web Developer'
                }}
            />
            <Skill
                info={{
                    title: 'Cloud Architect'
                }}
            />
            <Skill
                info={{
                    title: 'DevOps Engineer'
                }}
            />
            <div style={{ margin: '0 auto', paddingTop: '3vh' }}>
                <Card
                    title="Javascript"
                    desc="JavaScript is one of the core technologies of the World Wide Web"
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                />
                <Card
                    title="Python"
                    desc="Python is an interpreted, high-level, general-purpose programming language."
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png"
                />

            </div>
            <div style={{ backgroundColor: 'lightgray', padding: '2vw' }}>
                {cardsComponents}
            </div>
            <ClassComponent
                txtparam='hola jeje! :)'
            />
            <StateExample />
            <hr></hr>
            <ConditionalMaster />
            <Footer />
        </React.StrictMode>
    );
}

export default App;

/*
REFERENCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

REACT EVENTS
https://reactjs.org/docs/events.html#supported-events

*/
