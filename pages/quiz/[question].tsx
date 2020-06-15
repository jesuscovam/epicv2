import styled, { keyframes } from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { AnswersContext } from '../../context/AnswersProvider'
import Link from 'next/link'
import { Main, TextHeader } from '@components/Hero'
import { useMediaQuery } from 'react-responsive'

const fade = keyframes`
    from {
        opacity: 0;
    },
    to {
        opacity: 1;
    }
`

const QuestionMain = styled(Main)`
    text-align: center;
    padding: 0;
    margin-bottom: 0;
    animation: ${fade} 0.25s linear;
    @media(min-width: 768px) {
        text-align: left;
    }
`

const Title = styled(TextHeader)`
    @media (min-width: 768px){
        text-align: center;
    }
`

const SquareSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px;
    margin-bottom: 20px;

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
    font-size: 1.2em;
    padding: 5px;
`

const FooterImage = styled.img`
    width: 300px;
    position: absolute;
    right: 0%;
    bottom: 0%;
    animation: ${fade} 0.25s linear;
`

export default function({ question }){
    const [ questionPage, setQuestion ] = useState(null)
    const { state } = useContext(AnswersContext)
    const isDesktop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    useEffect(() => {
        const some = 
            state.questions.filter(questionState => questionState.number === question)
        setQuestion(some[0])
    }, [ question ]) 

    if (!questionPage) return <p>loading...</p>
    return(
        <QuestionMain>
            <Title>{ questionPage.question}</Title>
            <SquareSection>
                { questionPage.answers.map(answer =>
                    <SquareItem 
                        key={answer.id} 
                        number={questionPage.number} 
                        text={answer.answer} />
                )}
            </SquareSection>
            { isDesktop && 
                <FooterImage alt="footer image" src="/footerImage.png"/>
            }
        </QuestionMain>
    )
}

const SquareItem = ({ text, number }) => {
    const nextLink = increment(number)
    const { dispatch } = useContext(AnswersContext)

    // go to next question
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

function increment(numberString: string) {
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

