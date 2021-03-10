import { apiBaseURL } from '../config/api.config';

//users
export const createUserEndpoint = `${apiBaseURL}/users/create`; // post
export const loginEndpoint = `${apiBaseURL}/users/login`; // post
export const usersInfoEndpoint = `${apiBaseURL}/users/account`; // get & patch
//subdomain
export const createSubdomainEndpoint = `${apiBaseURL}/subdomains/create`; // post
export const subdomainEndpoint = `${apiBaseURL}/subdomains/:subdomainId`; // get & patch
export const subdomainAvailableEndpoint = `${apiBaseURL}/subdomains/available/:name`; // get
//gallery
export const createGalleryEndpoint = `${apiBaseURL}/galleries/create`; // post
export const galleryEndpoint = `${apiBaseURL}/galleries/:galleryId`; // get & patch & delete
//images
export const uploadImageEndpoint = `${apiBaseURL}/images/upload`; // post
export const imageEndpoint = `${apiBaseURL}/images/:imageId`; // delete
