import Cookies from "js-cookie";

const setCookies = (name, value) => Cookies.set(name, value);

const getCookies = (name) => Cookies.get(name);

const removeCookies = (name) => Cookies.remove(name);

export { setCookies, getCookies, removeCookies };
