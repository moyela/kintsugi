import './styles/main.css'
import AppRouter from './routes/.Routing.js';
import Header from './components/header.js';
import Footer from './components/footer';

// root sets the main layout and contains the Header and the Router that renders other views
export default function Root() {
  
  return (
    <div id='viewport' className="min-w-80">
      <div className=''>
        <div className='md:max-w-3xl mx-auto'>
          <Header/>
        </div>
      </div>

      <div className=' pb-5 min-h-96'>
        <div className="flex flex-col max-w-3xl mx-auto pt-5">
          <AppRouter/>
        </div>
      </div>

      <div className="hidden md:block">
        <Footer/>
      </div>
    </div>
  )
}
