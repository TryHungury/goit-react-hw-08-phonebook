import { AppBar } from 'components/appbar/AppBar'
import LoaderWrapper from 'components/loader/Loader'
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    h3 {
        font-size: ${p=>p.theme.fontSizes[5]}px;
        border-radius: ${p=>p.theme.radii.normal};
        background-color: ${p=>p.theme.colors.text};
        color: ${p=>p.theme.colors.accent};
        margin: ${p=>p.theme.space[0]}px auto;
        padding: ${p=>p.theme.space[2]}px;
        margin-top: ${p=>p.theme.space[3]}px;
        font-weight: ${p=>p.theme.fontWeights.bold};
        font-family: ${p=>p.theme.fonts.monospace};
    }
    h3 {
        font-size: ${p=>p.theme.fontSizes[3]}px;
        border-radius: ${p=>p.theme.radii.normal};
        background-color: ${p=>p.theme.colors.text};
        color: ${p=>p.theme.colors.accent};
        margin: ${p=>p.theme.space[0]}px auto;
        padding: ${p=>p.theme.space[2]}px;
        margin-top: ${p=>p.theme.space[3]}px;
        font-weight: ${p=>p.theme.fontWeights.bold};
        font-family: ${p=>p.theme.fonts.monospace};
    }
    span {
        color: gold;
    }
`

export const SharedLayout = () => {
    return (<>
        <Wrapper>
            <AppBar></AppBar>
        <Suspense fallback={<LoaderWrapper/>}>
          <Outlet></Outlet>
        </Suspense>
        </Wrapper>
    </>)
}