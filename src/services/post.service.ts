import api from './api.service';


export const createNewPost = async (postId: string, data: object) => {
    const response = await api.post(`/posts/${postId}`, data);

    return response.data;
};

export const giveLike = async (postId: string) => {
    await api.post(`/posts/${postId}/like`);
};

export const removePost = async (postId: string) => {
    await api.delete(`/posts/${postId}/del`);
};

export const getPosts = async () => {
    const response = await api.get(`/posts`);

    return response.data;
};

export const updatePost = async (postId: string) => {
    await api.post(`/posts/${postId}/update`);
};