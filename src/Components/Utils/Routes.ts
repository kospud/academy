import React from "react";
import { MAIN_ROUTE } from "./Consts";

export const PublicRoutes=[
    {
        component: React.lazy(()=>import('./../Main/MainPage')),
        path: MAIN_ROUTE
    }
]