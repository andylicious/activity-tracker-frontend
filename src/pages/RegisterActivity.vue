<template>
  <div>
    <h1>New activity</h1>
    <activity-form @submit="submitActivity" />
  </div>
</template>

<script>
import axios from "axios";
import ActivityForm from "../components/ActivityForm/ActivityForm";

export default {
  name: "RegisterActivity",
  components: { ActivityForm },
  methods: {
    async submitActivity(activity) {
      await axios.post(
        `${process.env.VUE_APP_API_BASE_URL}activities/`,
        activity
      );
    },
  },
};
</script>

<style></style>
