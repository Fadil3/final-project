import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function Home() {
    return (
        <div className="App">
            <main >
                Selamat Datang di Warteg Bahari
                <p>Warteg Bahari menyediakan berbagai macam masakan rumah yang
                    <br />
                    sehat, lezat, dan nikmat
                </p>
                <button><Link to="/order">Pesan Sekarang</Link></button>
            </main>
        </div>
    )
}