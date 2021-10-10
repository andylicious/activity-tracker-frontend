<template>
  <div>
    <div v-if="currentStep === 0">
      <p>What hour?</p>
      <custom-button
        v-for="index in 24"
        class="TimeSpanPicker-Button"
        :key="index - 1"
        :label="`${index - 1}`"
        @click="selectHour(index - 1)"
      />
    </div>
    <div v-if="currentStep === 1">
      <p>What minute?</p>
      <div class="MinuteButtons">
        <custom-button
          class="TimeSpanPicker-Button"
          v-for="item in minuteOptions"
          :key="item.value"
          :label="item.rep"
          @click="selectMinutes(item.value)"
        />
      </div>
    </div>
    <div v-if="currentStep === 2">
      <p>How long?</p>
      <custom-button
        class="TimeSpanPicker-Button"
        v-for="item in durationOptions"
        :key="item.value"
        :label="item.rep"
        @click="selectDuration(item.value)"
      />
    </div>
  </div>
</template>

<script>
import CustomButton from "../Button";

const MINUTES = [
  { value: 0, rep: "0m" },
  { value: 15, rep: "15m" },
  { value: 30, rep: "30m" },
  { value: 45, rep: "45m" },
];

const DURATIONS = [
  { value: 15, rep: "15m" },
  { value: 30, rep: "30m" },
  { value: 45, rep: "45m" },
  { value: 45, rep: "45m" },
  { value: 60, rep: "1h" },
  { value: 90, rep: "1.5h" },
  { value: 120, rep: "2h" },
  { value: 150, rep: "2.5h" },
  { value: 180, rep: "3h" },
  { value: 210, rep: "3.5h" },
  { value: 240, rep: "4h" },
  { value: 270, rep: "4.5h" },
  { value: 300, rep: "5h" },
  { value: 330, rep: "5.5h" },
  { value: 360, rep: "6h" },
];

export default {
  name: "TimePicker",
  components: { CustomButton },
  data() {
    return {
      currentStep: 0,
      timespan: {
        startHour: "",
        startMinutes: "",
        duration: "",
      },
      minuteOptions: MINUTES,
      durationOptions: DURATIONS,
    };
  },
  methods: {
    selectHour(time) {
      this.timespan.startHour = time;
      this.currentStep += 1;
    },
    selectMinutes(time) {
      this.timespan.startMinutes = time;
      this.currentStep += 1;
    },
    selectDuration(time) {
      this.timespan.duration = time;
      const { startHour, startMinutes, duration } = this.timespan;
      this.$emit("submit", { startHour, startMinutes, duration });
    },
  },
};
</script>

<style scoped>
.TimeSpanPicker-Button {
  margin: 4px;
}

.MinuteButtons {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
