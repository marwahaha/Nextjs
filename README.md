# Next.js

[link](https://github.com/zeit/next.js/)

Next.js is a minimalistic framework for server-rendered React applications.

Visit [next.js](https://nextjs.org/learn) to get started with Next.js.

Main goal of next.js is to replace routing. You can do that with folder structure :

pages <br/>
----auth <br/>
--------index.js<br/>
----index.js<br/>


```console
npm init
npm install --save next react react-dom
npm run dev
```

now go to localhost:3000 and then to localhost:3000/auth

To add a link in page:

```javascript
import Link from 'next/link';
<p>Go to <Link href="/auth"><a>Auth</a></Link></p>

/* Usin router */
import Router from 'next/router';
<button onClick={() => Router.push('/auth')} > Go to Auth </button>
```

Styling in next.js
```javascript
<style jsx>{`
    h1 {
        border: 1px solid red;
    }
`}
</style>
```

Handling error 404

create in pages _error.js and create a simple statles function with content

make a visit to localhost:3000/xxx


### Important 

read abotu getInitialProps() --> see exampls in index.js and auth/index.js