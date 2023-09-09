function Male(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 180 486"
            height={props.height}
        >
            <mask id="mask">
                <rect width="100%" height="100%" fill="white" />
                <rect id="fillRect" width="100%" height={props.percentage} fill="red" />
            </mask>
            <path
                mask="url(#mask)"
                fill={props.color}
                d="M140.2 50.7c0 27.9-22.6 50.6-50.5 50.6S39.1 78.7 39.1 50.8 61.7.2 89.6.2c28 0 50.6 22.6 50.6 50.5zM163.4 115.4H16c-8.6 0-15.6 7-15.6 15.6v153.3c-.1 8.6 6.6 15.8 15.1 16.2 8.6.3 15.8-6.5 16.1-15.1v-135c0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8v314.9c-.1 10.6 8 19.6 18.6 20.5 11 .7 20.4-7.6 21.2-18.5V300.6h21.5v164.6c-.1 10.6 8 19.6 18.6 20.5 11 .7 20.4-7.6 21.2-18.5V150.4c0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8v134c-.1 8.6 6.5 15.8 15.1 16.2 8.6.3 15.8-6.5 16.1-15.1V131c-.1-8.7-7.1-15.6-15.7-15.6z"
            />
        </svg>
    );
}

export default Male;