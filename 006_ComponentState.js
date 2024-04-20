import React, { useState } from 'react';

function Generator() {
    let colorNumber = Math.round(Math.random() * 3);
    const colors = ["red", "white", "orange", "black"];

    return { color: colors[colorNumber] };
}

function ComponentState(props) {

    // Default value
    const { title = "Stranger" } = props;

    // States hooks function mode
    const [theme, setTheme] = useState({});

    return (
        <>
            <h1 style={theme}>{title}</h1>
            <button onClick={() => setTheme(Generator())}>Generate</button>
        </>
    )
};

export default ComponentState;