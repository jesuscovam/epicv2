import React from 'react';
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import Button from './Button'

const fade = keyframes`
    from {
        opacity: 0;
    },
    to {
        opacity: 1;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    animation: ${fade} 0.25s linear;
    margin: 10px 5px;
`

const HeroInfoSection = styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    @media (min-width: 576px) {
        justify-content: space-around;
    }
`
const HeroActionSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 576px) {
        display: none;
    }
`

const TextSection = styled.section`
    display: flex;
`

export const TextHeader = styled.h1`
    font-family: ${({ theme }) => theme.typo.header };
    font-size: 1.5em;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main };
`

const HeroImage = styled.img`
    margin: 40px 30px;
    height: 260px;
`

const Hero = () => {
    return (
        <Main>
            <HeroInfoSection>
                <TextSection>
                    <TextHeader>epic your experience!</TextHeader>
                </TextSection>
                <HeroImage alt="main image for hero" src="/heroImage.png"/>
            </HeroInfoSection>
            <HeroActionSection>
                <Link href="/quiz/[question]" as="/quiz/1">
                    <Button primary>Take the Quiz</Button>
                </Link>
                <Button>Destinies</Button>
            </HeroActionSection>
        </Main>
    );
}

export default Hero;
