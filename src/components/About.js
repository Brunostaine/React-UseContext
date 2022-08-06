import React from "react";
import { useContext } from "react";
import { SomeContext } from "./UseContext";

const About = () => {
    const { contextValue } = useContext(SomeContext);
    return (
        <div>
            <h2>About</h2>
            <h3>Reutilizando o contexto</h3>
            <p>Valor do contexto: {contextValue}</p>
        </div>
    );
};

export default About;
