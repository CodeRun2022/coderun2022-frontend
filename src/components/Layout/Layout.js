import { Outlet } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <>
            <CssBaseline enableColorScheme />
            <Header></Header>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;