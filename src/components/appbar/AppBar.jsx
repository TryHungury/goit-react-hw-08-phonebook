import { Box } from 'components/box/Box';
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom";
import { logoutThunk } from "redux/auth/auth.thunk";
import styled from "styled-components";


const AuthButton = styled.button`
    font-family: ${p=>p.theme.fonts.monospace}; 
    font-weight: ${p=>p.theme.fontWeights.heading};
    width: 75px;
    background-color: #fff;
    padding: 5px 5px;
    margin: 10px 0;
    border: 1px solid silver;
    border-radius: 4px;
    font-size: 14px;
    transition-property: border;
    transition-duration: 250ms;
    transition-timing-function: ease;
    &:hover,
    &:focus  {
        outline: none;
        border: 1px solid gold;
    }
`

const AuthLink = styled(NavLink)`
    font-family: ${p=>p.theme.fonts.monospace};
    font-weight: ${p=>p.theme.fontWeights.heading};
    display: block;
    width: 55px;
    background-color: #fff;
    padding: 5px 10px;
    margin: 10px 0;
    border: 1px solid silver;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
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

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 12px;
        h1 {
            margin-top: 4px;
            margin-bottom: 14px;
        }
        p {
            font-style: italic;
            margin-bottom: 0;
            text-align: right;
        }
`

const LogoLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    &:visited {
        color: white;
    }
`

const WelcomeStyled = styled.p`
    font-family: ${p=>p.theme.fonts.monospace};
    &.span {
        color: gold;
    }
`

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const name = useSelector(state => state.auth.user.name)
    const dispatch = useDispatch();

    return (<>
        <NavWrapper>
            <nav>
                {isLoggedIn
                    ? <AuthButton type="button" onClick={() => dispatch(logoutThunk())}>Log Out</AuthButton>
                    : 
                <Box width="300px" display="flex" flexDirection="raw" justifyContent="space-evenly"><AuthLink to="/login">Log In</AuthLink><AuthLink to="/register">Sign Up</AuthLink></Box>}
        </nav>
            <div>
        <LogoLink to="/"><h1><span>Phone</span>book</h1></LogoLink>
            
          {isLoggedIn && <WelcomeStyled>Вітаю Вас, <span>{name}</span> !</WelcomeStyled>}
            </div>
        </NavWrapper>
    </>)
}