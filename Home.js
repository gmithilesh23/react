import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>welcome to training -{props.name}-{props.age}-{props.obj.college}-{props.obj.department}{props.Arr.map((data) => { return (<p>{data}</p>) })}</h1>
        </div>
    );
}

export default Home;