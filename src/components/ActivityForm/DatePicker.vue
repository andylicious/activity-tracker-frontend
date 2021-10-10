<template>
  <div>
    <p>What date?</p>
    <custom-button label="Today" @click="selectDate(today)" />
    <custom-button label="Yesterday" @click="selectDate(yesterday)" />
  </div>
</template>

<script>
import CustomButton from "../Button.vue";

export default {
  name: "DatePicker",
  components: {
    CustomButton,
  },
  data() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return {
      today: new Date(),
      yesterday,
    };
  },
  methods: {
    selectDate(date) {
      this.$emit("submit", date);
    },
  },
};
</script>

<style></style>
