import "./globals.css";
import Header from '../app/components/header'
import Footer from '../app/components/Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
