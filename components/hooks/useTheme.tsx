import { useState, useEffect } from "react";

type Theme = "dark" | "light";

const useTheme = () => {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mount, setMount] = useState(false);

    const toggleTheme = (prop = theme, toggle = false) => {
        if (typeof window !== "undefined") {
            // initiateTheme function will initiate all the value to local storage and state
            const initiateTheme = (currentTheme: Theme) => {
                localStorage.setItem("theme", currentTheme);
                setTheme(currentTheme);
                document.documentElement.classList.toggle(
                    "dark",
                    currentTheme === "dark"
                );
            };
            // if window exist follow through;
            if (localStorage.getItem("theme") === null) {
                // local storage has nothing but null fetch device theme and initiate the change
                let deviceTheme: Theme = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches
                    ? "dark"
                    : "light";
                initiateTheme(deviceTheme);
            } else if (localStorage.getItem("theme") && toggle) {
                // local storage has value and prop has toggle as true then toggle it
                let currentTheme: Theme = prop === "dark" ? "light" : "dark";
                initiateTheme(currentTheme);
            } else if (localStorage.getItem("theme") && !toggle) {
                // local storage has value and prop has toggle as false then don't toggle it
                let currentTheme = localStorage.getItem("theme") as Theme;
                initiateTheme(currentTheme);
            }
        }
    };

    useEffect(() => {
        // on component mount call the toggle function without toggle true prop it will initialize the theme and sets it 
        toggleTheme();
        setMount(true);
    }, []);

    return [mount, theme, toggleTheme];
};

export default useTheme;
