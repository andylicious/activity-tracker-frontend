<template>
  <div class="SummaryPage">
    <h2>Sumary:</h2>
    <p>{{ timeSpan }}</p>
    <p>{{ activity.type }}, {{ activity.score }}, {{ activity.category }}</p>
    <custom-button label="Confirm" @click="$emit('confirm')" />
  </div>
</template>

<script>
import utils from "../../libs/utils";
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
  computed: {
    timeSpan() {
      return utils.getFormattedTimeSpan(
        this.activity.start_time,
        this.activity.end_time
      );
    },
  },
};
</script>

<style scoped>
.SummaryPage {
  padding: 0 16px;
}
</style>
