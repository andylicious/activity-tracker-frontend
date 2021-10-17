<template>
  <div class="ActivityForm">
    <date-picker v-if="currentStep === 0" @submit="setDate" />
    <time-span-picker v-if="currentStep === 1" @submit="setStartTime" />
    <activity-picker v-if="currentStep === 2" @submit="setActivity" />
    <summary-page
      v-if="currentStep === 3"
      :activity="activity"
      @confirm="submit"
    />
  </div>
</template>

<script>
import getActivityEndTime from "../../libs/utils/getActivityEndTime";
import DatePicker from "./DatePicker";
import TimeSpanPicker from "./TimeSpanPicker";
import ActivityPicker from "./ActivityPicker";
import SummaryPage from "./SummaryPage";

export default {
  name: "ActivityForm",
  components: {
    ActivityPicker,
    DatePicker,
    TimeSpanPicker,
    SummaryPage,
  },
  data() {
    return {
      activity: {
        start_time: "",
        end_time: "",
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
      if (this.currentStep <= 3) {
        this.currentStep += 1;
      }
    },
    submit() {
      this.$emit("submit", this.activity);
      this.$router.push("/");
    },
    setDate(date) {
      this.date = date;
      this.nextStep();
    },
    setStartTime({ startHour, startMinutes, duration }) {
      this.date.setHours(startHour, startMinutes, 0);
      this.activity.start_time = this.date;
      this.activity.duration = duration;
      this.activity.end_time = getActivityEndTime(this.date, duration);
      this.nextStep();
    },
    setActivity({ activity, score, category }) {
      this.activity.type = activity;
      this.activity.score = score;
      this.activity.category = category;

      this.nextStep();
    },
  },
};
</script>

<style scoped>
.ActivityForm {
  margin-top: 56px;
}

.ActivityForm >>> p {
  font-size: 1.6rem;
}
</style>
