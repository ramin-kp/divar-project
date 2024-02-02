import api from "../configs/api";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

const getPost = () => api.get("post/my");

const deletePost = (id) => api.delete(`post/delete/${id}`);

const getAllPost = () => api.get("");

export { getProfile, getPost, deletePost, getAllPost };
