import React from 'react';
import Head from 'next/head';
import Script from 'next/script'
import Sidebar from '../Sidebar';
import Header from '../Header';
import { useRouter } from 'next/router';

const Layout = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
        <meta 
          name="description" 
          content="" 
        />
        <meta 
          name="author" 
          content="Ace Resource Advisory Services" 
        />
        <meta 
          name="generator" 
          content="Hugo 0.108.0" 
        />

        <title>Ace Portal</title>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
          crossorigin="anonymous" 
        />
      </Head>
      {router.pathname === '/login' || router.pathname === '/newclient' ? (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
          <div>{props.children}</div>
        </div>
      ) : (
        <div class="container-fluid">
          <div class="row">
            <Sidebar />

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Header />
              {props.children}
            </main>
          </div>
        </div>
      )}

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous" />
      </>
    );
};

export default Layout;
