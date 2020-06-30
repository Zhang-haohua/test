import React from 'react';
import { getChatSource } from '../utils/source';
import styles from './index.scss';
// import index.scss;

function HomePage() {
    const data = getChatSource();
    return (
    <div>
        <div class="header-wrapper">
	        <span class="header-action">&lt;</span>
	        <div class="header-avatar">
	            <img src='https://static.it1352.com/Content/img/login_register.png' alt="avatar"/>Johnson
	        </div>
	        <span class="header-action">...</span>
	    </div>
	    <div class="dialog-list">
	        <div class="dialog-item">
	            <div class="dialog-time">13:46</div>
	            <div class="dialog-text">HELLO HELLO HELLO HELLO HELLO</div>
	        </div>
	        <div class="dialog-item">
	            <div class="dialog-time">13:47</div>
	            <div class="dialog-text">HELLO HELLO HELLO HELLO HELLO</div>
	        </div>
	        <div class="dialog-item">
	            <div class="dialog-time">13:48</div>
	            <div class="dialog-text">HELLO HELLO HELLO HELLO HELLO</div>
	        </div>
	        {
	            data.map((item, index) => <div key={index.toString()}>{item.msg}</div>)
	        }
	    </div>

	    <div class="footer-wrapper">
	        <input type="text" class="footer-input" placeholder="Message"/>
	        <button class="footer-button">Send</button>
	    </div>
    </div>);
}

export default HomePage;

