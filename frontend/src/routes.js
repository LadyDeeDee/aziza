import ProductPage  from "./pages/ProductPage";
import  CatalogPage  from "./pages/CatalogPage/CatalogPage";
import Auth  from "./pages/Auth/Auth";
import Registration from "./pages/Registration/Registration";
import Admin from "./pages/Admin/Admin";
import OrderDetails from "./pages/OrderDetailsPage";
import Order from "./pages/OrderPage";
import  Home  from "./pages/HomePage/HomePage";


import {ADMIN_ROUTE, ORDER_ROUTE, ORDERDETAILS_ROUTE, CATALOGPAGE_ROUTE, LOGIN_ROUTE,REGISTRATION_ROUTE, PRODUCT_ROUTE, HOME_ROUTE, 
    } from "./utils/consts";


export const authRoutes = [
    {
        path: "/admin",
        Component: Admin
    },
    {
        path: '/order',
        Component: Order
    },
    {
        path: ORDERDETAILS_ROUTE,
        Component: OrderDetails
    }
]

export const  publicRoutes = [
    {
        path: CATALOGPAGE_ROUTE,
        Component: CatalogPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: PRODUCT_ROUTE + '/id',
        Component: ProductPage
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    
]