<template>
  <div class="DatePicker">
    <p>What day?</p>
    <custom-button
      class="DatePicker-button"
      label="Today"
      @click="selectDate(today)"
    />
    <custom-button
      class="DatePicker-button"
      label="Yesterday"
      @click="selectDate(yesterday)"
    />
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

<style scoped>
.DatePicker {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.DatePicker-button {
  margin: 12px 0;
}
</style>
