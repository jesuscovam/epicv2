import React from 'react';
import styled from 'styled-components'
import Button from './Button'

const HeroMain = styled.main`
    display: flex;
    flex-direction: column;
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

const TextHeader = styled.h1`
    font-family: ${({ theme }) => theme.typo.header };
    font-size: 2em;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main };
`

const HeroImage = styled.img`
    margin: 40px 30px;
    height: 280px;
`

const Hero = () => {
    return (
        <HeroMain>
            <HeroInfoSection>
                <TextSection>
                    <TextHeader>epic your experience!</TextHeader>
                </TextSection>
                <HeroImage alt="main image for hero" src="/heroImage.png"/>
            </HeroInfoSection>
            <HeroActionSection>
                <Button primary>Take the Quiz</Button>
                <Button>Destinies</Button>
            </HeroActionSection>
        </HeroMain>
    );
}

export default Hero;
