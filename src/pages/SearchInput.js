import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import "../style.css"
import { useNavigate, createSearchParams, useLocation } from "react-router-dom"

export default function SearchInput(props)
{
    const [value, setValue] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(true);
    const navigate = useNavigate();
    const state = useLocation();

    useEffect(()=>{setKeywords(props.autoCompleteData)},[props.autoCompleteData]);

    const handleChange = (e)=>{
        const query = e.target.value.toLowerCase();
        setValue(query);
        console.log("check the input value:" +query);
        console.log("check keywords lengh: "+keywords.length);
        if(query.length >0){
            const filterSuggestions = keywords.filter(
                (keyword)=>keyword.toLowerCase().indexOf(query) >-1
            );
            console.log("Check the filterSuggestions length:"+filterSuggestions.length);
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
        }else {
            setSuggestionsActive(false);
        }
    };

    const handleKeyDown = (e)=>{
         // UP ARROW
  if (e.keyCode === 38) {
    if (suggestionIndex === 0) {
      return;
    }
    setSuggestionIndex(suggestionIndex - 1);
  }
  // DOWN ARROW
  else if (e.keyCode === 40) {
    if (suggestionIndex - 1 === suggestions.length) {
      return;
    }
    setSuggestionIndex(suggestionIndex + 1);
  }
  // ENTER
  else if (e.keyCode === 13) {
    setValue(suggestions[suggestionIndex]);
    setSuggestionIndex(0);
    setSuggestionsActive(false);
    navigateResult();
  }
    };

    const handleClick = (e) => {
        setSuggestions([]);
        setValue(e.target.innerText);
        setSuggestionsActive(false);
      };

    const navigateResult = () => {
        navigate({
            pathname: state.pathname==="/Search"? ".":"Search",
            search: `?${createSearchParams({
                query: value
            })}`
        });
        navigate(0);
    };

    const Suggestions = () => {
        return (
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => {
              return (
                <li
                  className={index === suggestionIndex ? "active" : ""}
                  key={index}
                  onClick={handleClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      };

        return (
            <div className="search_wrap search_wrap_5">
                <div className="search_box">
                    <input type="search" className="input" value={value} placeholder="Enter SKU, Components ..." onChange={handleChange} onKeyDown={handleKeyDown}/>             
                        <Button variant="primary" onClick={navigateResult}>Search</Button>
                        {suggestionsActive && <Suggestions />}
                </div>

            </div>
        )
}