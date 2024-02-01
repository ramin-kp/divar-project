import api from "../configs/api";

const postCategory = (data) => api.post("category", data);

const getCategories = () => api.get("category");

const deleteCategory = (id) => api.delete(`category/${id}`);

export { postCategory, getCategories, deleteCategory };
