import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, PublicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/constants";

export const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component})=>
                <Route path={path} key={path} element={<Component/>}/>
            )}
            {PublicRoutes.map(({path, Component})=>
                <Route path={path} key={path} element={<Component/>}/>
            )}
            <Route
                path="*"
                element={<Navigate to={SHOP_ROUTE+'/:id'} />}
            />
        </Routes>
    );
};
