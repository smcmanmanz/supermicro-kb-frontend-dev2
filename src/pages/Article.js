import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import "../style.css"
import { useNavigate, createSearchParams, useLocation } from "react-router-dom"

export default function Article(props)
{
    const [articleURL, setArticleURL] = useState("");

    //useEffect(()=>{setArticleURL(props.articleURL)},[props.articleURL]);
    const url = "articles/article_1.html";
    useEffect(()=>{setArticleURL(url)},[url]);

        return (
                 <div>
                  <iframe src={articleURL} className="article"></iframe>
                  </div>
        )
}