<template>
  <div class="right-arm">
    <h4>
      Cotovelo Direito: <i>{{ elbow }}</i>
    </h4>
    <div class="selected center-x">
      <select-movement
        :options="elbowPosition"
        @emit-value="_getItemSelected"
      />
    </div>
    <h4>
      Pulso Direito: <i>{{ wrist }}</i>
    </h4>

    <div class="selected center-x">
      <select-movement
        :options="wristPosition"
        @emit-value="_getItemSelected"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "right-arm",
  props: {
    elbow: {
      type: String,
      required: true,
      default: "initial"
    },
    wrist: {
      type: String,
      required: true,
      default: "initial"
    },
    elbowPosition: {
      type: Array,
      required: true
    },
    wristPosition: {
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
