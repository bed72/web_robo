<template>
  <div class="head-robot">
    <h4>
      Rotação da Cabeça: <i>{{ rotation }}</i>
    </h4>
    <div class="selected center-x">
      <select-movement
        :options="rotationPosition"
        @emit-value="_getItemSelected"
      />
    </div>
    <h4>
      Inclinação da Cabeça: <i>{{ slope }}</i>
    </h4>
    <div class="selected center-x">
      <select-movement
        :options="slopePosition"
        @emit-value="_getItemSelected"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "head-robot",
  data: () => ({
    item: null
  }),
  props: {
    rotation: {
      type: String,
      required: true,
      default: "initial"
    },
    slope: {
      type: String,
      required: true,
      default: "initial"
    },
    rotationPosition: {
      type: Array,
      required: true
    },
    slopePosition: {
      type: Array,
      required: true
    }
  },
  methods: {
    _getItemSelected(value) {
      this.item = value;
    }
  }
};
</script>
