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
  background-color: #253d5b;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.4em;
  font-weight: 600;
  min-width: 150px;
  height: 45px;
}

.CustomButton:active {
  background-color: #4775ae;
}

.CustomButton:disabled {
  background-color: #b7cae1;
  cursor: not-allowed;
}
</style>
