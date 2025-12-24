import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CustomCursor from "../components/CustomCursor/CustomCursor";


const AppLayout = () =>{
    return (
        <>
           <CustomCursor/>
           <Navbar/>
           <main className="min-h-screen">
              <Outlet/>
           </main>
           <Footer/>
        </>
    )
}

export default AppLayout;