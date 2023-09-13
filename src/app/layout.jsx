import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
config.autoAddCss = false

export const metadata = {
  title: "Botik"
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
