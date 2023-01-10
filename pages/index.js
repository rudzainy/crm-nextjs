import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Client from '../components/Client';
import { getCurrentSeller, getClients } from '../helpers';

export default function Home() {
    const router = useRouter();
    const [clients, setClients] = useState([]);
    useEffect(() => {
        const isAuth = JSON.parse(localStorage.getItem('isAuth'));
        if (!isAuth) {
            router.push('/login');
        } else {
            const seller = getCurrentSeller();
            getClients(seller.id).then((res) => setClients(res.data));
        }
    }, []);
    return (
        <Layout>
            <h1 className="">Employees</h1>
            <Link href="/newclient">
                <a className="">
                    New Employee
                </a>
            </Link>

            <div className="overflow-x-scroll">
                <table className="table-auto shadow-md mt-10 w-full w-lg">
                    <thead className="bg-gray-800">
                        <tr className="text-white">
                            <th className="w-1/5 py-2">Name</th>
                            <th className="w-1/5 py-2">Company</th>
                            <th className="w-1/5 py-2">Email</th>
                            <th className="w-1/5 py-2">Delete</th>
                            <th className="w-1/5 py-2">Edit</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {clients.map((client) => (
                            <Client
                                key={client.id}
                                data={client}
                                clients={clients}
                                setClients={setClients}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
