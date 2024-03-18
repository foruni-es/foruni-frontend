const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const DEVELOPMENT_API_DOMAIN = 'http://localhost:3001';
const PRODUCTION_API_DOMAIN = 'https://api.foruni.es';

export const LATEST = "latest";
export const ANSWERS = "answers";
export const LIKES = "likes";

export const HOME = "inicio";
export const MAIN_URL = '/inicio';

export const CLIENT_COMPONENT = true;

export const API_DOMAIN = process.env.NODE_ENV === DEVELOPMENT ? 
    DEVELOPMENT_API_DOMAIN 
    : process.env.NODE_ENV === PRODUCTION ? 
    PRODUCTION_API_DOMAIN 
    : null;