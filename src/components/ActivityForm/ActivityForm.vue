<template>
  <div>
    <date-picker v-if="currentStep === 0" @submit="setDate" />
    <time-span-picker v-if="currentStep === 1" />
    <activity-picker v-if="currentStep === 2" />

    <custom-button v-if="currentStep === 2" label="Submit" @click="submit" />
    <custom-button v-else label="Next step" @click="nextStep" />
  </div>
</template>

<script>
import CustomButton from "../Button";
import DatePicker from "./DatePicker";
import TimeSpanPicker from "./TimeSpanPicker";
import ActivityPicker from "./ActivityPicker";

export default {
  name: "ActivityForm",
  components: {
    ActivityPicker,
    CustomButton,
    DatePicker,
    TimeSpanPicker,
  },
  data() {
    return {
      activity: {
        date: "",
        timespan: "",
        type: "",
        ranking: "",
        category: "",
      },
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
      console.log("Submitting!");
    },
    setDate(date) {
      this.activity.date = date;
      this.nextStep();
    },
  },
};
</script>

<style></style>
