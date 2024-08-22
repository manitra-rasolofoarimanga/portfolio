import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const MainLayout = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-lg">
                <Header />
                <Outlet />
            </div>
            <div className="w-full">
                <div className="mx-auto max-w-screen-lg">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MainLayout