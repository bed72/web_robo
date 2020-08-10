<template>
  <select
    class="select-movement"
    v-model="selectedOption"
    @change="_emitValue(selectedOption)"
  >
    <option disabled value="initial">Escolha um item</option>
    <option v-for="(option, item) in options" :key="item">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "select-movement",
  data: () => ({
    selectedOption: ""
  }),
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    _emitValue(value) {
      this.$emit("emit-value", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.select-movement {
  border: none;
  width: 50%;
  padding: 0.7%;
  color: #ffffff;
  border-radius: 25px;
  background-color: #6932f6;
  border: solid 0.06rem #ffffff;
}
option {
  color: #6932f6;
  background-color: #ffffff;
}
</style>
