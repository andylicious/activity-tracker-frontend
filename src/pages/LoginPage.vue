<template>
  <div>LoginPage</div>
  <form class="LoginPage-container">
    <label class="LoginPage-label" for="username">Username</label>
    <input
      class="LoginPage-input"
      v-model="username"
      type="text"
      id="username"
      name="username"
    />
    <label class="LoginPage-label" for="password">Password</label>
    <input
      class="LoginPage-input"
      v-model="password"
      type="password"
      id="password"
      name="password"
    />
    <div v-if="invalid" class="LoginPage-invalid">
      Invalid password/username
    </div>
    <custom-button
      label="Login"
      @click.prevent="login"
      :disabled="username === '' || password === ''"
    />
  </form>
</template>

<script>
import axios from "axios";
import { LOCAL_STORAGE_TOKEN } from "../constants";
import CustomButton from "../components/Button.vue";

export default {
  name: "LoginPage",
  components: {
    CustomButton,
  },
  data() {
    return {
      password: "",
      username: "",
      invalid: false,
    };
  },
  methods: {
    async login() {
      this.invalid = false;
      const { password, username } = this;
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_API_BASE_URL}login/`,
          { username, password }
        );
        console.log("response", response);
        localStorage.setItem(LOCAL_STORAGE_TOKEN, response.data.token);
        this.$router.push("/");
      } catch (e) {
        console.log("Request failed");
        this.invalid = true;
      }
    },
  },
};
</script>

<style scoped>
.LoginPage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.LoginPage-input {
  border: 1px solid #4775ae;
  border-radius: 15px;
  background-color: #f1f4f9;
  font-size: 1.6rem;
  height: 45px;
  margin: 0 0 24px;
  text-align: center;
  width: 80%;
}

.LoginPage-label {
  font-weight: 600;
}

.LoginPage-invalid {
  width: 80%;
  background: #f1f4f9;
  padding: 16px 8px;
  border: 2px solid #253d5b;
  border-radius: 10px;
  margin-bottom: 16px;
}
</style>
