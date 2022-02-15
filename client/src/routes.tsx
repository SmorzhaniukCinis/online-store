import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/constants";
import {Admin} from "./pages/Admin";
import {Basket} from "./pages/Basket";
import {Auth} from "./pages/Auth";
import {DevicePage} from "./pages/DevicePage";
import {Shop} from "./pages/Shop";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]
export const PublicRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE,
        Component: DevicePage
    },
    {
        path: SHOP_ROUTE + '/:id',
        Component: Shop
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]