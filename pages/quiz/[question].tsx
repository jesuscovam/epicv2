import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { AnswersContext } from '../../context/AnswersProvider'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Main, TextHeader } from '@components/Hero'


const QuestionMain = styled(Main)`
    text-align: center;

    @media(min-width: 768px) {
        text-align: left;
    }
`

const SquareSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px;

`

const Square = styled.button`
    cursor: pointer;
    margin: 16px;
    width: 120px;
    height: 120px;
    border: 1px solid ${({ theme }) => theme.colors.primary.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 6px -6px 1px ${({ theme }) => theme.colors.primary.dark};
`

const InnerText = styled.h2`
    font-size: 1.2em
`

export default function({ question }){
    const [ questionPage, setQuestion ] = useState(null)
    const { state } = useContext(AnswersContext)

    useEffect(() => {
        const some = 
            state.questions.filter(questionState => questionState.number === question)
        setQuestion(some[0])
    }, [ question ]) 

    if (!questionPage) return <p>loading...</p>
    return(
        <QuestionMain>
            <TextHeader>{ questionPage.question}</TextHeader>
            <SquareSection>
                { questionPage.answers.map(answer =>
                    <SquareItem 
                        key={answer.id} 
                        number={questionPage.number} 
                        text={answer.answer} />
                )}
            </SquareSection>
        </QuestionMain>
    )
}

const SquareItem = ({ text, number }) => {
    const nextLink = increment(number)
    const { dispatch } = useContext(AnswersContext)
    function changePage(text: string) {
        dispatch({type: 'ADD_ANSWER', payload: text})
    }
    return(
        <Link href="/quiz/[question]" as={`/quiz/${nextLink}`}>
        <Square onClick={() => changePage(text)}>
            <InnerText>
                { text }
            </InnerText>
        </Square>
        </Link>

    )
}

function increment(numberString) {
    const result = parseInt(numberString) + 1
    const  resultString = result.toString()
    return resultString
}

export function getStaticProps(context) {
    // route number
    const { question } = context.params

    return {
        props: {
            question,
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: 
            [
                { params: { question: '1' } },
                { params: { question: '2' } },
            ],
            fallback: false
        }
    
}

