import React from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./style.css"

const App = () => {
    const path = window.location.pathname;
    
    return (
        <>
            <Header
                extraClassName={path === "/" ? "headerMain" : "headerOther"}
            />
            <AppRouter/>
            <Footer/>
        </>
    );
};

export default App;
