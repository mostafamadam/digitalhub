import React from 'react';

function Hamburger(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="24"
            viewBox="0 0 52 24"
        >
            <path d="M40 0H2C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4H40C41.1046 4 42 3.10457 42 2C42 0.89543 41.1046 0 40 0Z" fill="#9092A0" />
            <path d="M40 20H2C0.89543 20 0 20.8954 0 22C0 23.1046 0.89543 24 2 24H40C41.1046 24 42 23.1046 42 22C42 20.8954 41.1046 20 40 20Z" fill="#9092A0" />
            <path d="M50 10H2C0.89543 10 0 10.8954 0 12C0 13.1046 0.89543 14 2 14H50C51.1046 14 52 13.1046 52 12C52 10.8954 51.1046 10 50 10Z" fill="#9092A0" />
        </svg>
    );
}

export default Hamburger;