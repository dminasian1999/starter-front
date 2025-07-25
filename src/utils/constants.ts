import {NavItemT} from "./types.ts";
import stationary from '../images/categories/stationary.jpg';
import toysGames  from '../images/categories/toys&Games.jpg';
import artCraft  from '../images/categories/art&Craft.jpg';
import jewelry  from '../images/categories/jewelry.jpg';



export const navItems: NavItemT[] = [
    { title: 'Home',            route: 'home' },
    { title: 'Shop',             route: 'shop' },
    { title: 'Sells',               route: 'sells' },
    { title: 'Admin',               route: 'admin' },
    { title: 'Product',               route: 'product' },
    { title: 'Products',               route: 'products' },
    { title: 'Cart',               route: 'cart' },
    { title: 'Checkout',               route: 'checkout' },
    { title: 'About',               route: 'about' },
    { title: 'Contact',               route: 'contact' },
    { title: 'WishList',               route: 'wishlist' },
    { title: 'Account',               route: 'account' },
];

export const categories = [
    {title: 'Stationery', imageUrl: stationary},
    {title: 'Toys & Games', imageUrl: toysGames },
    {title: 'Art & Culture', imageUrl: artCraft},
    {title: 'Jewelry', imageUrl: jewelry}

];

export const baseUrl = "http://localhost:8080/users";
// export const baseUrl = "https://products-back-6k2j.onrender.com/museum";
export const baseUrlBlog = "http://localhost:8080";
// export const baseUrlBlog = "https://products-back-6k2j.onrender.com/museum/blog";
export const createToken = (login: string, password: string) => `Basic ${window.btoa(login + ':' + password)}`

export const defaultPic =''


export const periodMinute = 10000 * 60*10;



