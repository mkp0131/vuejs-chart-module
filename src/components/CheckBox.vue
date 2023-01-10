<template>
  <label class="checkbox"
    ><input
      type="checkbox"
      :value="value"
      @click="toggleCheckBox"
      :checked="value"
    />
    체크박스</label
  >
</template>

<script>
export default {
  props: ["value"],
  created() {
    console.log(this.value);
  },
  methods: {
    toggleCheckBox() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style scoped>
.checkbox {
  font-size: 42px;
  display: flex;
  align-items: center;
  background: blue;
}
.checkbox input {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>
