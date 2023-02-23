import styled from 'styled-components';
import { Box } from './box/Box';
import LoaderWrapper from './loader/Loader';
import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './layout/Latout';
import { HomeScreen } from './homescreen/HomeScreen';
import { RestrictedRoute } from './routes/RestrictedRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import LoginPage from 'pages/loginpage/LoginPage';
import JoinPage from 'pages/joinpage/JoinPage';
import { ContactsPage } from 'pages/contactspage/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/auth/auth.thunk';

const Title = styled.h1`
  border-radius: ${p=>p.theme.radii.normal};
  background-color: ${p=>p.theme.colors.text};
  color: ${p=>p.theme.colors.accent};
  margin: ${p=>p.theme.space[0]}px auto;
  padding: ${p=>p.theme.space[2]}px;
  margin-top: ${p=>p.theme.space[3]}px;
  font-weight: ${p=>p.theme.fontWeights.bold};
  font-family: ${p=>p.theme.fonts.monospace};
`

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(refreshThunk());
    }
  }, [dispatch, token])
  
    return (
    <Box height= "100%"  display= "flex" flexDirection="column" justifyContent= "space-evenly" alignItems= "center" fontSize= "40px" backgroundColor="backgroundSecondary">
        <Title>Ukraine Win❤️</Title>
      <Box width="100%" display='flex' flexDirection='column' justifyContent='center' alignItems='center' pt={4}>
      <Suspense fallback={<LoaderWrapper/>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo={'/contacts'} />} />
          <Route path="/register" element={<RestrictedRoute component={JoinPage} redirectTo={'/contacts'} />} />
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo={'/'} />} />
        </Route>
      </Routes>
      </Suspense>
      </Box>
    </Box>
    );
  }