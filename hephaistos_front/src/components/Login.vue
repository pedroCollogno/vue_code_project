<template>
  <div class="login">
    <h1>Please log in</h1>
    <div class="col">
      <div class="row">
        <label> Email
          <input type="text" placeholder="Your email" v-model="userCreds.email">
        </label>
      </div>
      <div class="row">
        <label> Password
          <input type="password" placeholder="Your password" v-model="userCreds.password">
        </label>
      </div>
      <div class="row">
        <button type="submit" class="btn btn-success" @click="submitForm">Log in</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import ApiRequestServices from "../services/ApiRequestServices";
import currentUser from "../services/UserServices";
import router from "../router";

export default {
  data() {
    return {
      // ENTER THE RIGHT CREDS FOR THE API HERE
      userCreds: {
        email: "admin@example.com",
        password: "HzGZWi0OKY"
      },
      badCredsEntered: false
    }
  },
  methods: {
    submitForm () {
      ApiRequestServices.login(this.userCreds)
        .then((res) => {
          if (res.data) {
            currentUser.authenticate();
            router.push({path: "/exercises"});
          }
        })
        .catch((err) => {
          if (err.response){
            if (err.response.status == 401) {
              alert("Bad creds");
            }
          }
          console.log("Error: " + err);
        })
    }
  },
  name: "Login",
  props: {
  }
};
</script>
