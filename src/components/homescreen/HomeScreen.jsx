import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"

const HomeWrapper = styled.div`
    text-align: center;
    h1 {
        text-align: center;
    }
`

const StyledLink = styled(Link)`
    display: block;
    background-color: #fff;
    padding: 5px 10px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid silver;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    transition-property: color, background-color, border;
    transition-duration: 250ms;
    transition-timing-function: ease;
    &:visited {
        color: black;
    }
    &:hover,
    &:focus  {
        outline: none;
        border: 1px solid gold;
    }
  &.active {
        color: #fff;
        background-color: gold;
        border: 1px solid gold;
  }
`;

export const HomeScreen = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const name = useSelector(state => state.auth.user.name)


    return (<HomeWrapper>
        {isLoggedIn
            ? <div><h3>{name}, це ваш акаунт !</h3>
                <StyledLink to="/contacts">Повернутися до контактів</StyledLink></div>
            : <div><h3>Вітаю у PhoneBook App!</h3>
                <h3>Будь-ласка, LogIn або SignUp для отримання доступу до власної книги!</h3></div>}
            </HomeWrapper>)
}