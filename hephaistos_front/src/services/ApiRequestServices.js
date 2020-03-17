const API_BASE_URL = "http://localhost:3000/api/v1/";

const qs = require("qs");
const axios = require("axios");

export default {
    login(userCreds) {
        return (axios({
            method: 'post',
            url: API_BASE_URL + "login",
            data: qs.stringify({
              username: userCreds.email,
              password: userCreds.password
            }),
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          }));
    }
}