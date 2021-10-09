<template>
  <button class="Button" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.Button {
  background-color: purple;
}
</style>
