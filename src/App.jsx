import "../src/styles/styles.scss"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import ModelsPage from "./pages/ModelsPage"
import ModelsDetailsPage from "./pages/ModelsDetailsPage"
import PricingPage from "./pages/PricingPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import BlogListPage from "./pages/BlogListPage"
import BlogDetails from "./components/BlogList/BlogDetails"
import PolicyPage from "./pages/PolicyPage"
import TermsPage from "./pages/TermsPage"
import CookiePage from "./pages/CookiePage"

function App() {
  const routesConfig = [
    { path: "/", component: Home },
    { path: "/models", component: ModelsPage },
    { path: "/models/:id", component: ModelsDetailsPage },
    { path: "/pricing", component: PricingPage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContactPage },
    { path: "/bloglist", component: BlogListPage },
    { path: "/bloglist/:blogId", component: BlogDetails },
    { path: "/privacy", component: PolicyPage },
    { path: "/terms", component: TermsPage },
    { path: "/cookie", component: CookiePage }
  ]
  return (
    <>
      {/* <Navbar />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer /> */}
    </>
  )
}

export default App
