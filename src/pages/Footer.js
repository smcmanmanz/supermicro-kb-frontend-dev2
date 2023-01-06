import React from "react"
import "../style.css"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">Supermicro is a global technology leader committed to delivering first to market innovation for Enterprise, Cloud, AI, and 5G Telco/Edge IT Infrastructure. We are transforming into a Total IT Solutions provider with environmentally-friendly and energy-saving server, AI, storage, IoT, and switch systems, software, and services while delivering advanced high-volume motherboard, power, and chassis products.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Resources</h6>
                        <ul class="footer-links">
                            <li><a href="#">Command Center</a></li>
                            <li><a href='https://store.supermicro.com/'>E-Store</a></li>
                            <li><Link to="/CommonQuestions">Common Questions</Link></li>
                            <li><Link to="/ProductFamily">Product Family</Link></li>
                            <li><Link to="/Components">Component Support</Link></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                            <a href="https://www.supermicro.com/"> Supermicro</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}