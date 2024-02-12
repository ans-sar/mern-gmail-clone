import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Suspense, useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SuspenceLoader from "../components/common/SuspenceLoader";

const Main = () =>{

const [openDrawer,setOpendrawer] = useState(true);

const toggleDrawer = () => {
    setOpendrawer(prevState =>!prevState);
}

    return(
        <>
        <Header toggleDrawer={toggleDrawer} />
        <Box>
        <Sidebar openDrawer={openDrawer}/>
        <Suspense fallback={<SuspenceLoader/>}>
        <Outlet context={{openDrawer}}/>
        </Suspense>
        </Box>
        </>
      
    )
}
export default Main;