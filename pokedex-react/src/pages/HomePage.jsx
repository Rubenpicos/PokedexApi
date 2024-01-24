import React from "react";
import { Outlet } from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
           <h2> HomePage </h2>
           <Outlet/>        </div>
    )
}