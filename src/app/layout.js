import './globals.css'
import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My first project',
  description: 'Generated by create next app',
  image: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link " href={"/posts"}  >Posts</Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>

        {children}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

      </body>


    </html >
  )
}
