<template>
  <div>
    <div v-if="currentStep === 0">
      <p>What activity?</p>
      <input v-model="activity" type="text" />
      <custom-button
        label="Confirm"
        @click="selectActivity(activity)"
        :disabled="activity === ''"
      />
      <custom-button
        v-for="a in activities"
        :key="a"
        :label="a"
        @click="selectActivity(a)"
      />
    </div>
    <div v-if="currentStep === 1">
      <p>What score?</p>
      <custom-button
        v-for="index in 10"
        :key="index"
        :label="`${index}`"
        @click="selectScore(index)"
      />
    </div>
    <div v-if="currentStep === 2">
      <p>What category?</p>
      <custom-button
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

<style></style>
