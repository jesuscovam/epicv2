import styled from 'styled-components'


const StyledButton = styled.button`
    color: ${props => props.primary ? 'white' : ({ theme }) => theme.colors.secondary.light };
    text-align: center;
    font-size: .8em;
    padding: 4px;   
    width: 100px;
    margin: 5px;
    background-color: ${props => props.primary ? ({ theme }) => theme.colors.secondary.light : 'white'};
    border-radius: 50em;
    border: 1px solid ${({ theme }) => theme.colors.secondary.light};

`
export default StyledButton
