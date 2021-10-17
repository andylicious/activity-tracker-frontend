<template>
  <div>
    <h1>New activity</h1>
    <activity-form
      :common-activities="commonActivities"
      @submit="submitActivity"
    />
  </div>
</template>

<script>
import axios from "axios";
import ActivityForm from "../components/ActivityForm/ActivityForm";

export default {
  name: "RegisterActivity",
  components: { ActivityForm },
  data() {
    return {
      commonActivities: [],
    };
  },
  methods: {
    async submitActivity(activity) {
      try {
        await axios.post(
          `${process.env.VUE_APP_API_BASE_URL}activities/`,
          activity
        );
      } catch (e) {
        console.error(e);
        alert("Failed to save");
      }
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        `${process.env.VUE_APP_API_BASE_URL}activities/common/`
      );
      this.commonActivities = response.data;
    } catch {
      console.error("Could not fetch common activities");
    }
  },
};
</script>

<style></style>
