import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  return (

    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">

      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
        Ace Portal
      </a>
        <ul className="nav flex-column">

          <li className="nav-item">
            <Link href="/">
              <a className={router.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                <span className="align-text-bottom"></span>
                Employees
              </a>
            </Link>
          </li>


          <li className={router.pathname === '/orders' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/orders">
                        <a className="text-white block">Projects</a>
                    </Link>
                </li>

          <li className="nav-item">
            <a className="nav-link">
              <span className="align-text-bottom"></span>
              Integrations
            </a>
          </li>
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Saved reports</span>
          <a className="link-secondary" aria-label="Add a new report">
            <span className="align-text-bottom"></span>
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link">
              <span className="align-text-bottom"></span>
              Current month
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <span className="align-text-bottom"></span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
{/* 
        <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
            <div>
              <p className="text-white text-2xl font-black">Ace Portal</p>
            </div>

            <nav className="mt-5 list-none">
                <li className={router.pathname === '/' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/">
                        <a className="text-white block">Employees</a>
                    </Link>
                </li>
                <li className={router.pathname === '/orders' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/orders">
                        <a className="text-white block">Projects</a>
                    </Link>
                </li>
                <li className={router.pathname === '/products' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/products">
                        <a className="text-white block">Business Groups</a>
                    </Link>
                </li>
            </nav>

            <div className="sm:mt-10">
                <p className="text-white text-2xl font-black">Mas opciones</p>
            </div>
            <nav className="mt-5 list-none">
                <li className={router.pathname === '/bestSellers' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/bestSellers">
                        <a className="text-white block">Mejores Vendedores</a>
                    </Link>
                </li>
                <li className={router.pathname === '/bestClients' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/bestClients">
                        <a className="text-white block">Mejores Clientes</a>
                    </Link>
                </li>
            </nav> 
        </aside> */}
    </nav>
    );
};

export default Sidebar;
