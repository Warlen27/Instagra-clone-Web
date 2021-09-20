import api from './api.service';

type Userbody = {
    name: string;
    username: string;
    email: string;
    password: string;
}


export const getUsers = async () => {
    const response = await api.get(`/users`);

    return response.data;
};

export const createUser = async (body: Userbody) => {
    const response = await api.post(`/users`, body);

    return response.data;
};

export const getUserById = async (userId: string) => {
    const response = await api.get(`/users/${userId}`);

    return response.data;
};

// export const listSubscriptionsById = async (transactionId: string) => {
//   const response = await api.get(`/users/subscriptions/${transactionId}`);

//   return response.data;
// };

// // export const cancelSubscription = async (subscriptionId: string, body: object) => {
// //    api.delete(`/users/subscriptions/${subscriptionId}`, body).tha

// //   // return response.data;
// // };

// export async function cancelSubscription(subscriptionId: string, body: object) {
//   api({
//     method: 'DELETE',
//     data: body,
//     url: `/users/subscriptions/${subscriptionId}`,
//   }).then((res) => console.log(res));
// }