import React, { Component } from 'react'
import './App.scss';
import Webicon from "./assets/image.svg";

function App() {
    return (
        <div className="App">
            <div className='btn_container'>
                <button class='btn'>Today</button>
                <button class='btn active'>Last 30 days</button>
            </div>
            <div className='container'>

                <div className='box'></div>
                <div className='box'>
                    {/* <div className='head'>
                        <h1>Most Used Websites</h1>
                        <div className='side_btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="#4E4E4E">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M13.24 4.35c.36-.42.991-.469 1.41-.11.388.333.459.896.185 1.31l-.076.1-6 7c-.372.435-1.025.464-1.434.088l-.084-.087-6-7C.88 5.23.93 4.6 1.349 4.24c.387-.332.955-.316 1.323.018l.087.09L8 10.463l5.242-6.114z" transform="translate(-1162.000000, -169.000000) translate(1206.000000, 191.000000) scale(-1, 1) translate(-1206.000000, -191.000000) translate(1162.000000, 169.000000) translate(66.000000, 22.000000) scale(-1, 1) rotate(-90.000000) translate(-66.000000, -22.000000) translate(44.000000, 0.000000) translate(14.000000, 14.000000) translate(8.000000, 8.499991) scale(1, -1) translate(-8.000000, -8.499991)" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="#AAB4CA">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M13.24 4.35c.36-.42.991-.469 1.41-.11.388.333.459.896.185 1.31l-.076.1-6 7c-.372.435-1.025.464-1.434.088l-.084-.087-6-7C.88 5.23.93 4.6 1.349 4.24c.387-.332.955-.316 1.323.018l.087.09L8 10.463l5.242-6.114z" transform="translate(-1206.000000, -169.000000) translate(1206.000000, 191.000000) scale(-1, 1) translate(-1206.000000, -191.000000) translate(1162.000000, 169.000000) translate(22.000000, 22.000000) rotate(-90.000000) translate(-22.000000, -22.000000) translate(14.000000, 14.000000) translate(8.000000, 8.499991) scale(1, -1) translate(-8.000000, -8.499991)" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className='content'>
                        <ul>
                            <li className='first_row'>
                                <img src={Webicon}></img>
                                <span className='text'>gmail.com</span>
                                <span className='time'>1h 32m</span>
                            </li>
                            <li className='first_row'>
                                <img src={Webicon}></img>
                                <span className='text'>youtube.com</span>
                                <span className='time'>44m</span>
                            </li>
                            <li className='first_row'>
                                <img src={Webicon}></img>
                                <span className='text'>bbc.com</span>
                                <span className='time'>56m</span>
                            </li>
                            <li className='first_row'>
                                <img src={Webicon}></img>
                                <span className='text'>youtube.com</span>
                                <span className='time'>44m</span>
                            </li>
                            <li className='first_row'>
                                <img src={Webicon}></img>
                                <span className='text'>bbc.com</span>
                                <span className='time'>56m</span>
                            </li>
                        </ul>
                    </div>
                </div> */}
                                    <div className='head'>
                        <h1>Most Used Social Apps</h1>
                        <div className='side_btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
    <g fill="none" fill-rule="evenodd">
        <g fill="#AAB4CA">
            <g>
                <g>
                    <g>
                        <g>
                            <path d="M13.24 4.35c.36-.42.991-.469 1.41-.11.388.333.459.896.185 1.31l-.076.1-6 7c-.372.435-1.025.464-1.434.088l-.084-.087-6-7C.88 5.23.93 4.6 1.349 4.24c.387-.332.955-.316 1.323.018l.087.09L8 10.463l5.242-6.114z" transform="translate(-1162.000000, -169.000000) translate(685.000000, 151.000000) translate(477.000000, 18.000000) translate(22.000000, 22.000000) rotate(-90.000000) translate(-22.000000, -22.000000) translate(14.000000, 14.000000) translate(8.000000, 8.499991) scale(1, -1) translate(-8.000000, -8.499991)"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
    <g fill="none" fill-rule="evenodd">
        <g fill="#4E4E4E">
            <g>
                <g>
                    <g>
                        <g>
                            <path d="M13.24 4.35c.36-.42.991-.469 1.41-.11.388.333.459.896.185 1.31l-.076.1-6 7c-.372.435-1.025.464-1.434.088l-.084-.087-6-7C.88 5.23.93 4.6 1.349 4.24c.387-.332.955-.316 1.323.018l.087.09L8 10.463l5.242-6.114z" transform="translate(-1206.000000, -169.000000) translate(685.000000, 151.000000) translate(477.000000, 18.000000) translate(66.000000, 22.000000) scale(-1, 1) rotate(-90.000000) translate(-66.000000, -22.000000) translate(44.000000, 0.000000) translate(14.000000, 14.000000) translate(8.000000, 8.499991) scale(1, -1) translate(-8.000000, -8.499991)"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>

                        </div>
                    </div>
                    <div className='content'>
                        <ul>
                            <li className='first_row'>
                                <div className='picture'>f</div>
                                <span className='text'>Facebook</span>
                                <span className='time'>1h 32m</span>
                            </li>
                            <li className='first_row'>
                            <div className='picture'>t</div>
                                <span className='text'>Twitter</span>
                                <span className='time'>45m</span>
                            </li>
                            <li className='first_row'>
                            <div className='picture'>s</div>
                                <span className='text'>Snapchat</span>
                                <span className='time'>56m</span>
                            </li>
                            <li className='first_row'>
                            <div className='picture'>t</div>
                                <span className='text'>Tik Tok</span>
                                <span className='time'>2h 32m</span>
                            </li>
                            <li className='first_row'>
                            <div className='picture'>i</div>
                                <span className='text'>Instagram</span>
                                <span className='time'>34m</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

