<template>
  <div>
    <date-picker v-if="currentStep === 0" @submit="setDate" />
    <time-span-picker v-if="currentStep === 1" @submit="setStartTime" />
    <activity-picker v-if="currentStep === 2" @submit="setActivity" />
  </div>
</template>

<script>
import DatePicker from "./DatePicker";
import TimeSpanPicker from "./TimeSpanPicker";
import ActivityPicker from "./ActivityPicker";

export default {
  name: "ActivityForm",
  components: {
    ActivityPicker,
    DatePicker,
    TimeSpanPicker,
  },
  data() {
    return {
      activity: {
        startTime: "",
        duration: "",
        type: "",
        score: "",
        category: "",
      },
      date: "",
      currentStep: 0,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep <= 2) {
        this.currentStep += 1;
      }
    },
    submit() {
      console.log("Submitting!", { ...this.activity });
      this.$router.push("/");
    },
    setDate(date) {
      this.date = date;
      this.nextStep();
    },
    setStartTime({ startHour, startMinutes, duration }) {
      this.date.setHours(startHour, startMinutes, 0);
      this.activity.startTime = this.date;
      this.activity.duration = duration;
      this.nextStep();
    },
    setActivity({ activity, score, category }) {
      this.activity.type = activity;
      this.activity.score = score;
      this.activity.category = category;

      this.submit();
    },
  },
};
</script>

<style></style>
