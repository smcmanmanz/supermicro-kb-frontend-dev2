import React from "react"
import "../style.css"
import { BrowserRouter as Route, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default function Components() {

    const navigate = useNavigate();

    const navigateResult = () => {
        navigate('/Search');
    };

    const stateChange = () => {
        console.log("test");
    }

    return (
        <div>
            {/* <Header /> */}
            <div className="search_wrap search_wrap_5">
                <div className="search_box">
                    <input type="text" className="input" placeholder="Enter SKU, Components ..." />
                    <div class="btn">
                        <button onClick={navigateResult}>Search</button>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="resultsSpace">
                    <div class="result">
                        <h2> Components Page</h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>

                    <Row>
                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>CPU</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>Memory</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>Storage Related</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>GPU</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>Networking</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card onClick={stateChange} style={{ width: '18rem', cursor: "pointer" }}>
                            
                            <Card.Body>
                                <Card.Title>Misc.</Card.Title>
                            </Card.Body>
                        </Card>


                    </Row>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}