import styled from 'styled-components'
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

const Square = styled.div`
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

export default function( ){
    const router = useRouter()
    const { question } = router.query
    return(
        <QuestionMain>
            <TextHeader>Where are you going?</TextHeader>
            <SquareSection>
                <SquareItem>
                    PDC
                </SquareItem>
                <SquareItem>
                    Cancún
                </SquareItem>
                <SquareItem>
                    Tulum
                </SquareItem>
                <SquareItem>
                    Puerto Morelos
                </SquareItem>
            </SquareSection>
        </QuestionMain>
    )
}

const SquareItem = ({ children }) => 
    <Square>
        <InnerText>
            { children }
        </InnerText>
    </Square>