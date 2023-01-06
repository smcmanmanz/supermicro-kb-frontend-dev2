/* This page consists of formatting and content for the main body of the homepage*/
import React from "react"
import "../style.css"
import SearchInput from "./SearchInput";

export default function HomepageBody()
{
    return(
        <div>
            {/* Background image added in className css section */}
            <div className="body-container">
                {/* Header statement */}
                <h1>Supermicro FAQ</h1> 
                <SearchInput />
             </div>
        
        </div>
    );
}
