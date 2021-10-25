<template>
  <div class="StartPageContainer">
    <h1 class="StartPageContainer-title">Register new</h1>
    <custom-button label="New +" @click="$router.push('/new')" />
  </div>
</template>

<script>
import CustomButton from "../components/Button";
import axios from "axios";

export default {
  name: "StartPage",
  components: {
    CustomButton,
  },
  async mounted() {
    try {
      await axios.get(`${process.env.VUE_APP_API_BASE_URL}activities/common`);
    } catch (e) {
      console.log("No auth!", e.response.status);
      if (e.response.status === 401) {
        this.$router.push("/login");
      }
    }
  },
};
</script>

<style scoped>
.StartPageContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 8px;
  align-items: center;
  justify-content: center;
}

.StartPageContainer-title {
  margin-top: 0;
  margin-bottom: 16;
}
</style>
