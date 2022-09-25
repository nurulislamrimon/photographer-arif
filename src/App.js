import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Achivement from './Pages/Achivement/Achivement';
import BuyNow from './Pages/BuyNow/BuyNow';
import ContactMe from './Pages/ContactMe/ContactMe';
import Dashboard from './Pages/Dashboard/Dashboard';
import Item1 from './Pages/Dashboard/Item1';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Stories from './Pages/Stories/Stories';
import Footer from './Utilities/Footer/Footer';
import Header from './Utilities/Header/Header';
import RequireAuth from './Utilities/RequireAuth';

function App() {


  return (
    <div className="App bg-primary overflow-x-hidden relative">
      <Header />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/achivement' element={<Achivement />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/buyNow' element={<BuyNow />} />
        <Route path='/contactMe' element={<ContactMe />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route path='item1' element={<Item1 />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
