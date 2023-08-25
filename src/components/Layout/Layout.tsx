import Header from "../Header/Header"
import NavDrawer from "../Header/NavDrawer"
import Footer from "../Footer/footer"
import { ReactNode } from "react";

type Props = { children: ReactNode };

const Layout = ({children} : Props) => {
    return(
        <div>
              <Header/>
        <NavDrawer/>
        <div>{children}</div>
        <Footer/>
        </div>
    )
}

export default Layout