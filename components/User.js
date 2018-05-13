import React from 'react';
import Link from 'next/link';
const user = (props) => (
    <div>
        <p>Go to <Link href="/"><a>Main</a></Link></p>
        <h1>The User page for {props.name}</h1>
        <style jsx>
            {`
                h1 {
                    border: 1px solid red;
                }
            `}
        </style>
    </div>

);

export default user;

