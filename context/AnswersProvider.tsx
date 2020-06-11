import React, { createContext, useReducer } from 'react';

const initialState = {
    questions:[
        {number: '1', question: 'Where are you going?', answers: [
            {id: 1, answer: 'PDC'},
            {id: 2, answer: 'Cancún'},
            {id: 3, answer: 'Tulum'},
            {id: 4, answer: 'Puerto Morelos'},
        ]},
        {number: '2', question: 'Which style of music you play the most?', answers: [
            {id: 1, answer: 'Rock'},
            {id: 2, answer: 'Latin Trap & Reggaeton'},
            {id: 3, answer: 'EDM & House'},
            {id: 4, answer: 'Salsa & Bachata'},
        ]},

    ],
    answers: [],
}

const initialReducer = (state, option) => {
    switch(option.type) {
        
        case 'ADD_ANSWER':
            const answer = option.payload
            return {
                ...state,
                answers: [...state.answers, answer]
            }
        case 'GET_ANSWERS':
            return state.answers

        default: throw new Error()
    }
}

export const AnswersContext = createContext(null)

const AnswersProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(initialReducer, initialState)

    function addAnswer(answer: string) {
        dispatch({
            type: 'ADD_ANSWER',
            payload: answer
        })
    }

    function getQuestion(question: string){
        return dispatch({
            type: 'GET_QUESTION',
            payload: question
        })
    }
    return (
        <AnswersContext.Provider value={{ state, addAnswer, getQuestion, dispatch }}>
            { children }
        </AnswersContext.Provider>
    );
}

export default AnswersProvider;
