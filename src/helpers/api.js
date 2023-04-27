import axios from 'axios';

axios.defaults.baseURL = 'https://644a093e79279846dcdd4206.mockapi.io/';

export async function getUsers() {
  const response = await axios('users');
  console.log(response);
  return response.data;
}

export async function upFollowers(user) {
  const response = await axios.put(`users/${user.id}`, {
    name: user.name,
    avatar: user.avatar,
    followers: user.followers + 1,
    tweets: user.tweets,
  });
  return response.data;
}

export async function downFollowers(user) {
  const response = await axios.put(`users/${user.id}`, {
    name: user.name,
    avatar: user.avatar,
    followers: user.followers - 1,
    tweets: user.tweets,
  });
  return response.data;
}