/* This page consists of formatting and content for the main body of the homepage*/
import React from "react";
import { useState, useEffect } from "react";
import "../style.css";
import SearchInput from "./SearchInput";
import API from "../services/API";


export default function HomepageBody()
{
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        const api = new API();
        api.getKeywords().then((response)=>{
            console.log(response.data);
            setKeywords(response.data.map(({subject}) => subject));
        }).catch((err)=> console.log(err));
    }, []);

    return(
        <div>
            {/* Background image added in className css section */}
            <div className="body-container">
                {/* Header statement */}
                <h1>Supermicro FAQ</h1> 
                <SearchInput autoCompleteData={keywords}/>
             </div>
        
        </div>
    );
}
