import React, { useState } from 'react';
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

const fade = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`

const Menu = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    animation: ${fade} .25s linear;
    justify-content: space-between;
    li {
        font-size 16px;
        padding: 15px 5px;
    }
    li a {
        display: block;
    }

    @media (min-width: 576px) {
        justify-content: center;
    }

    @media (min-width: 768px) {
        padding: 15px 10px;
    }
`

const Logo = styled.li`
    cursor: pointer;
    @media (min-width: 576px) {
        flex: 1;
    }

    @media (min-width: 768px) {
        order: 0;
    }
`

const Item = styled.li`
    width: 100%;
    text-align: center;
    order: 3;
    animation: ${fade} .25s linear;
    a{
        color: ${({ theme }) => theme.colors.secondary.light};
        text-transform: uppercase;
        font-weight: 700;
    }
    display: ${props => props.active ? "block" : "none"};
    @media (min-width: 768px) {
        display: block;
        width: auto;
        order: 1;
        a{
            text-transform: capitalize;
        }
    }

`

const Button = styled(Item)`
    color: black;
    order: 2;
    border-bottom: ${props => props.primary ? '1px #ebebeb solid' : 'none'};

    a {
        color: #f6908b;
    }

    @media (min-width: 576px) {
        border-bottom: none;
        order: 1;
        width: auto;
        display: block;
        a {
            text-transform: capitalize;
            color: ${props => props.primary ? ({ theme }) => theme.colors.secondary.light : 'white'};
            text-decoration: none;
            padding: 7px 15px;

            background: ${props => props.primary ? 'transparent' : ({ theme }) => theme.colors.secondary.light };
            border: 1px solid ${({ theme }) => theme.colors.secondary.light };
            border-radius: 50em;
            transition: all .25s;
            &:hover {
                color: white;
                background-color: ${({ theme }) => theme.colors.secondary.main };
                border-color: ${({ theme }) => theme.colors.secondary.main};
            }
        }

    }

    @media (min-width: 768px){
        order: 2;
        padding-right: 0;
    }
`
const Toggle = styled.li`
    display: flex;
    order: 1;
    cursor: pointer;
    animation: ${fade} .25s linear;
    @media (min-width: 576px) {
        margin-left: 4px;
        order: 2;
    }

    @media (min-width: 768px){
        order: 3;
        display: none;
    }
`

const Bonito = styled.span`
    background-color: ${({ theme }) => theme.colors.primary.dark };
    display: inline-block;
    height: 2px;
    position: relative;
    width: 18px;

    ::before {
        background-color: ${({ theme }) => theme.colors.primary.dark };
        content: "";
        display: inline-block;
        height: 2px;
        position: absolute;
        width: 18px;
        top: 5px;
    }

    ::after {
        background-color: ${({ theme }) => theme.colors.primary.dark };
        content: "";
        display: inline-block;
        height: 2px;
        position: absolute;
        width: 18px;
        top: -5px;
    }
`

const Image = styled.img`

    height: 50px;
`
const Navbar = () => {
    const [ showNav, setNav ] = useState(false)
    function toggle() {
        setNav(!showNav)
    }
    // breakpoints by google chrome
    return (
        <header>
            <nav>
                <Menu>
                    <Link href="/">
                        <Logo>
                            <Image src="/logo.png" alt="logo" />
                        </Logo>
                    </Link>
                    <Item active={showNav}>
                        <a href="#">Take Quiz</a>
                    </Item> 
                    <Button active={showNav}>
                        <a href="#">Login</a>
                    </Button>
                    <Button active={showNav} primary>
                        <a href="#">Sign Up</a>
                    </Button>
                    <Toggle onClick={toggle}>
                        <Bonito></Bonito>
                    </Toggle>
                </Menu>
            </nav>
        </header>
    );
}

export default Navbar;