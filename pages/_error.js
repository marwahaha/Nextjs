import React from 'react';
import Link from 'next/link';

const error = () => (
    <div>
        <h1>The main error page</h1>
        <p>Go to <Link href="/"><a>Auth</a></Link></p>
    </div>
    
);

export default error;

