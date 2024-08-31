import React from "react";
import { BLOG_PAGE_ROUTE, BLOG_ROUTE, COURSE_PAGE_ROUTE, MAIN_ROUTE } from "./Consts";

export const PublicRoutes=[
    {
        component: React.lazy(()=>import('./../Main/MainPage')),
        path: MAIN_ROUTE
    },
    {
        component: React.lazy(()=>import("../Course/CoursePage")),
        path: COURSE_PAGE_ROUTE
    },
    {
        component: React.lazy(()=>import("../Blog/Blog")),
        path: BLOG_ROUTE
    },
    {
        component: React.lazy(()=>import("../Blog/BlogPage")),
        path: BLOG_PAGE_ROUTE
    }
]