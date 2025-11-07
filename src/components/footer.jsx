import React from 'react';

export default class Footer extends React.Component {
	render() {
        return (
		    <footer>
			    <div className="grid-d-12">
			        <ul>
			            <li id="email"><a href="mailto:sovhills@gmail.com">Email: sovhills@gmail.com</a></li>
			            <li id="footer-name">Steve Cook</li>
			            <li id="copy">Copyright © {new Date().getFullYear()}</li>
			        </ul>
			    </div>
			</footer>
        );
    }
}
