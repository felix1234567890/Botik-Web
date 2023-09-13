import Hero from "../components/Hero/Hero"
import Models from "../components/Models/Models"
import Calculator from "../components/Calculator/Calculator"
import Features from "../components/Features/Features"
import Testimonials from "../components/Testimonials/Testimonials"
import BlogLanding from "../components/BlogLanding/BlogLanding"

const Home = () => {
  return (
    <>
      <Hero />
      <Models enableButton={false} />
      <Calculator backgroundColor='#FFF' />
      <Features />
      <Testimonials />
      <BlogLanding />
    </>
  )
}

export default Home
