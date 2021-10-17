<template>
  <div>
    <p>Activity: {{ activity.type }}</p>
    <p>Score: {{ activity.score }}</p>
    <p>Category: {{ activity.category }}</p>
    <p>Start: {{ activity.start_time }}</p>
    <p>Start: {{ activity.end_time }}</p>
    <p>Duration: {{ activity.duration }}</p>
    <custom-button label="Confirm" @click="$emit('confirm')" />
  </div>
</template>

<script>
import CustomButton from "../Button";

export default {
  name: "SummaryPage",
  components: { CustomButton },
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
