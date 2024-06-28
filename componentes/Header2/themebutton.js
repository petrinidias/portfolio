'use client';

import React, { useEffect, useState } from 'react';
import { PiLampPendantFill } from "react-icons/pi";
import Styles from "./Header.module.css"

function ThemeToggle() {
    // estado para saber se o tema escuro está ativo ou não
    const [isDarkMode, setIsDarkMode] = useState(false);

    // efeito para carregar o tema do localStorage quando o componente é montado
    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode");
        if (savedTheme === "true") {
            setIsDarkMode(true);
            document.body.classList.add("dark-theme");
        }
    }, []);

    // funcao para alternar o tema
    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.classList.add("dark-theme");
            } else {
                document.body.classList.remove("dark-theme");
            }
            localStorage.setItem("darkMode", newMode);
            return newMode;
        });
    };

    return (
        <PiLampPendantFill className={Styles.theme} onClick={toggleTheme}/>
    );
}

export default ThemeToggle;