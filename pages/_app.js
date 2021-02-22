import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/index.scss'
import Hero from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'



const MyApp = ({Component, pageProps}) => {

  const isHomePage = () => Component.name === 'Home'

  return (
    <div className="portfolio-app">
      <Navbar />
      { isHomePage() && <Hero /> }
      <div className="container">
        <Component {...pageProps} />

        {isHomePage() &&
          <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
            <div className="container text-center">
              <small>Copyright &copy; Your Website</small>
            </div>
          </footer>
        }
      </div>
    </div>
  )
}

export default MyApp
