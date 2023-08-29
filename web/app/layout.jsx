import '@/styles/globals.css';

import Navbar from '../components/navbar';
import Provider from '@/components/provider';

export const metadata = {
  title: 'Lustie Manager',
  description: 'Enpower your task management with Lustie',
  image:
    'https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-task-icon-for-your-project-png-image_1520262.jpg',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./assets/icons/favicon.ico" />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
