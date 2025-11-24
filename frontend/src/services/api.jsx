import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const loginUser = async (data) => {
  return await axios.post(`${BASE_URL}/login`, data);
};

export const registerUser = async (data) => {
return await axios.post(`${BASE_URL}/register`, data);
   
};

export const adminLogin = async (data) => {
  return await axios.post(`${BASE_URL}/admin-login`, data);
};

export const submitContactForm = async (data) => {
 return await axios.post(`${BASE_URL}/contact`, data);

};

export const addProduct = async (data) => {
 return await axios.post(`${BASE_URL}/add-product`, data);

};

export const removeProduct = async (data) => {
  return await axios.post(`${BASE_URL}/remove-product`, data);

};

export const updateProduct = async (data) => {
  return await axios.post(`${BASE_URL}/update-product`, data);
};