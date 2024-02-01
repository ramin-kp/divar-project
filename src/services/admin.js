import api from "../configs/api";

const postCategory = (data) => api.post("category", data);

const getCategories = () => api.get("category");

export { postCategory, getCategories };
