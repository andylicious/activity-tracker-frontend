<template>
  <div class="ActivityPicker">
    <div v-if="currentStep === 0">
      <p>What activity?</p>
      <input class="ActivityPicker-input" v-model="activity" type="text" />
      <div class="ActivityPicker-ConfirmButton">
        <custom-button
          label="Confirm"
          @click="selectActivity(activity)"
          :disabled="activity === ''"
        />
      </div>
      <custom-button
        v-for="a in filteredActivities"
        class="ActivityPicker-button"
        :key="a.type"
        :label="a.type"
        @click="selectActivity(a.type)"
      />
    </div>
    <div v-if="currentStep === 1">
      <p>What score?</p>
      <div class="ActivityPicker-score">
        <custom-button
          class="ActivityPicker-button"
          v-for="index in 10"
          :key="index"
          :label="`${index}`"
          @click="selectScore(index)"
        />
      </div>
    </div>
    <div v-if="currentStep === 2">
      <p>What category?</p>
      <custom-button
        class="ActivityPicker-button"
        v-for="c in categories"
        :key="c"
        :label="c"
        @click="selectCategory(c)"
      />
    </div>
  </div>
</template>

<script>
import CustomButton from "../Button";

const CATEGORIES = ["V", "M", "K"];

export default {
  name: "ActivityPicker",
  components: { CustomButton },
  data() {
    return {
      activity: "",
      categories: CATEGORIES,
      currentStep: 0,
      score: 0,
    };
  },
  props: {
    activities: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredActivities() {
      if (this.activity !== "") {
        return this.activities.filter((a) => {
          return a.type.toLowerCase().includes(this.activity.toLowerCase());
        });
      }
      return this.activities;
    },
  },
  methods: {
    selectActivity(activity) {
      this.activity = activity;
      this.currentStep += 1;
    },
    selectScore(score) {
      this.score = score;
      this.currentStep += 1;
    },
    selectCategory(category) {
      const { activity, score } = this;
      this.$emit("submit", { activity, category, score });
    },
  },
};
</script>

<style scoped>
.ActivityPicker {
  width: 100%;
}

.ActivityPicker-input {
  border: 1px solid #4775ae;
  border-radius: 15px;
  background-color: #f1f4f9;
  font-size: 1.6rem;
  height: 45px;
  margin: 0 0 24px;
  text-align: center;
  width: 80%;
}

.ActivityPicker-input:active {
  border: 2px solid #253d5b;
}

.ActivityPicker-ConfirmButton {
  margin-bottom: 16px;
}

.ActivityPicker-button {
  margin: 4px;
}

.ActivityPicker-button:last-child {
  grid-column-start: 1;
  grid-column-end: 4;
}
</style>
