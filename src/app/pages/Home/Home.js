import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { media } from "../../styles/minxins";
import { lightTheme, darkTheme } from "../../styles/themes";
import GlobalStyles from "../../styles/globalStyles";

import Notebook from "../../modules/Notebook";
import Header from "../../modules/Header";

const HomeStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const Home = ({}) => {
    const [theme, setTheme] = useState("light");

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
                <Helmet>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
                    />
                </Helmet>
                <GlobalStyles />
                <HomeStyled>
                    <Header onClickToogleTheme={handleToggleTheme}></Header>
                    <Notebook></Notebook>
                </HomeStyled>
            </>
        </ThemeProvider>
    );
};

export default Home;
