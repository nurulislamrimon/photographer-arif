import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Achivement from "./Pages/Achivement/Achivement";
import BuyNow from "./Pages/BuyNow/BuyNow";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Stories from "./Pages/Stories/Stories";
import Footer from "./Utilities/Footer/Footer";
import Header from "./Utilities/Header/Header";
import RequireAuth from "./Utilities/RequireAuth";
import ManageCarousel from "./Pages/Dashboard/ManageCarousel/ManageCarousel";
import ManagePhotos from "./Pages/Dashboard/ManagePhotos/ManagePhotos";
import ManageAchivements from "./Pages/Dashboard/ManageAchivement/ManageAchivements";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Greetings from "./Pages/Dashboard/Greetings";
import AOS from "aos";
import "aos/dist/aos.css";
import useCategory from "./CustomHooks/useCategory";

function App() {
  const [category, loading] = useCategory();
  AOS.init();

  return (
    <div className="App bg-primary overflow-x-hidden relative">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achivement" element={<Achivement />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/buyNow" element={<BuyNow />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            path="greetings"
            element={
              <RequireAuth>
                <Greetings />
              </RequireAuth>
            }
          />
          <Route
            path="manageCarousel"
            element={
              <RequireAuth>
                <ManageCarousel />
              </RequireAuth>
            }
          />
          <Route
            path="managePhotos"
            element={
              <RequireAuth>
                <ManagePhotos />
              </RequireAuth>
            }
          />
          <Route
            path="manageAchivements"
            element={
              <RequireAuth>
                <ManageAchivements />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
