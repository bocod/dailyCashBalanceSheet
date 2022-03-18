import React from "react";
import '../css/Footer.css'

export function Footer () {
    const developer = 'bocod';
    const year = 2022;
    const devrepo = 'https://github.com/bocod';

    return (
        <footer>
            <p><a href={devrepo}>{developer}</a></p>
            <p>&copy; {year}</p>
        </footer>
    )
}