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
        {
            number: '3',
            question: 'Which place would you like to visit?', answers: [
                {id: 1, answer: 'The Ruines'},
                {id: 2, answer: 'The Parks'},
                {id: 3, answer: 'The Beach'}
            ]
        }

    ],
    answers: [],
    currentPage: ''
}

const initialReducer = (state, option) => {
    switch(option.type) {
        
        case 'ADD_ANSWER':
            const answer = option.payload
            return {
                ...state,
                answers: [...state.answers, answer]
            }
        case 'GET_QUESTIONS':
            const response = state.questions.filter(answer => answer.number === option.payload)
            return {
                ...state,
                currentPage: response[0]
            }
        case 'CLEAN_ANSWERS':
            return {
                ...state,
                answers: []
            }

        default: throw new Error()
    }
}

export const AnswersContext = createContext(null)

const AnswersProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(initialReducer, initialState)

    function addAnswer(answer) {
        dispatch({
            type: 'ADD_ANSWER',
            payload: answer
        })
    }

    function getQuestion(question){
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
