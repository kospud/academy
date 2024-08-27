import React from "react";
import { COURSE_PAGE_ROUTE, MAIN_ROUTE } from "./Consts";

export const PublicRoutes=[
    {
        component: React.lazy(()=>import('./../Main/MainPage')),
        path: MAIN_ROUTE
    },
    {
        component: React.lazy(()=>import("../Course/CoursePage")),
        path: COURSE_PAGE_ROUTE
    }
]