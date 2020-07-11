import React from 'react';

export default function Contact() {
    return (
        <div className="App">
            <main className="App-header">
                Contact Us
                <p>Kamu bisa mengirimkan kritik, saran, dan pesan melalui form ini</p>
                <form>
                    <label for="nama">Nama:</label><br />
                    <input type="text" id="nama" name="nama" /><br />
                    <label for="email">E-mail:</label><br />
                    <input type="text" required placeholder="ex:wartegbahari@gmail.com" id="email" name="email" /><br />
                    <label for="pesan">Pesan :</label><br />
                    <textarea cols="40" rows="5" type="text" id="pesan" name="pesan" /><br />
                    <button type="submit">Submit !</button>
                </form>
            </main>
        </div>
    )
}