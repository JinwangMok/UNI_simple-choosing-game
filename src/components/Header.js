import React, { useState, useEffect } from 'react';

const Header = () => {
    const [count, setCount] = useState(0);
    return(
        <>
            <div className="header">
                <div className="heder_logo">
                   <a href="Body.js"> <img src="/title_logo.png" alt="title_logo" onClick={() => {
                        console.log("url request");
                    }}/></a>
                </div>
            </div>
        </>
    );  
}

export default Header;