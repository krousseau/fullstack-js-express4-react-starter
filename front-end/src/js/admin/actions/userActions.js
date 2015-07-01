import axios from 'axios';

export async function getUsers(){
  let users = await axios.get('/api/users');
  return users;
}
