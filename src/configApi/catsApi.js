import { axiosInstance } from "./config";

export const getCatsCategories_req = async () => {
    const response = await axiosInstance.get(`/categories`);
    return response.data;
};

export const getCatsAmount_req = async (id, limit) => {
    const response = await axiosInstance.get(`/images/search?limit=${limit}&page=1&category_ids=${id}`);
    return response.data;
};
