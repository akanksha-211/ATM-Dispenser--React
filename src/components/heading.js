import React from 'react'

type HeadingProps = {
    size: number,
    text: string,
}

const Heading = ({size, text}: HeadingProps) => {
    return (
        <h2>
            {text}
        </h2>
    );
}

export default Heading