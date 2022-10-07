import { Component } from "react";
import { Registration } from "../src/components/Registration/Registration";
import ProductPage  from "./pages/ProductPage";
import  Catalog  from "./pages/Catalog";
import Auth  from "./pages/Auth";
import Admin from "./pages/Admin";
import OrderDetails from "./pages/OrderDetailsPage";
import Order from "./pages/OrderPage";
import ContactForm from "./pages/ContactForm";
import { ADMIN_ROUTE, ORDER_ROUTE, ORDERDETAILS_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE,REGISTRATION_ROUTE, PRODUCT_ROUTE, CONTACTFORM_ROUTE} from "./utils/consts";

export const  authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ORDER_ROUTE,
        Component: Order
    },
    {
        path: ORDERDETAILS_ROUTE,
        Component: OrderDetails
    }
]

export const  publicRoutes = [
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CONTACTFORM_ROUTE,
        Component: ContactForm
    },
    {
        path: PRODUCT_ROUTE + '/id',
        Component: ProductPage
    }
]