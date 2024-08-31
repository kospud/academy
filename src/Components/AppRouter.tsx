import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './Utils/Routes'
import { MAIN_ROUTE } from './Utils/Consts'
import Preloader from './Preloader'
import ErrorPage from './ErrorPage'

function AppRouter() {
    return (
        <Suspense fallback={Preloader({isLoading: true})}>
            <Routes>
                {
                    PublicRoutes.map(({component, path}) => <Route key={path} Component={component} path={path}/>)
                }
                <Route key={0} path='*' Component={ErrorPage} />
                <Route key={1} path='/' element={<Navigate replace to={MAIN_ROUTE} />} />
            </Routes>
        </Suspense>
    )
}

export default AppRouter;