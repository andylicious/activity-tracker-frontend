<template>
  <div>
    <h1>New activity</h1>
    <activity-form />
  </div>
</template>

<script>
import ActivityForm from "../components/ActivityForm/ActivityForm";
export default {
  name: "RegisterActivity",
  components: { ActivityForm },
  data() {
    return { steps: [] };
  },
};
</script>

<style></style>
