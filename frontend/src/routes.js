import { Component } from "react";
import { registration } from "../../server/controllers/authController";
import { Product } from "../../server/models/models";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import ContactForm from "./pages/ContactForm";
import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE,REGISTRATION_ROUTE, PRODUCT_ROUTE, CONTACTFORM_ROUTE} from "./utils/consts";

export const  authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const  publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
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
        Component: Product
    }
]