<template>
  <button class="CustomButton">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.CustomButton {
  background-color: purple;
}
</style>
