import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import "../style.css"
import { useLocation } from "react-router-dom"

export default function Article(props)
{
    const location = useLocation();

    const { url } =location.state;
    console.log("url is:"+url);


        return (
                 <div>
                  <iframe src={"articles/"+ url} className="iframe"></iframe>
                  </div>
        )
}