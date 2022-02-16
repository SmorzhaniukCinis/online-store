import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, PublicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/constants";
import {Context} from "../index";

export const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component})=>
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
