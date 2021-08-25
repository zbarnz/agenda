import axios from 'axios';

const auth = {
  register: async ( email, username, password ) => { 
    const res = await axios.post(
      'http://localhost:5000/user/register',
      {
        email,
        username,
        password
      }
    )

    console.log( res );

    this.jwt = res.data.token;

    return res.payload;
  }
}

module.exports = auth;