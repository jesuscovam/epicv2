import React, { useContext } from 'react';
import { AnswersContext } from '../context/AnswersProvider'

const destinies = () => {
    const {state, dispatch} = useContext(AnswersContext)
    return (
        <div>
            <h1>DESTINIES</h1>
            <button onClick={() => console.log(state)}>log state</button>
        </div>
    );
}

export default destinies;
