const enviroment = import.meta.env;
export const BASE_URL = enviroment.VITE_API_BASE_URL;

export const NAMESPACE = enviroment.VITE_API_BASE_URL;

export const GET_PEOPLE_ROUTE = `${BASE_URL}/${NAMESPACE}/people`;
export const GET_PEOPLE_BY_ID_ROUTE = `${BASE_URL}/${NAMESPACE}/people/:id`;