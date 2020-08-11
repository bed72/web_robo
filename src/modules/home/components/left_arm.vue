<template>
  <div class="left-arm">
    <h4>
      Cotovelo Esquerdo:
      <i>{{ elbow }}</i>
    </h4>
    <div class="selected center-x">
      <select-movement :options="elbowPosition" @emit-value="_getItemSelected" />
    </div>
    <h4>
      Pulso Esquedo:
      <i>{{ wrist }}</i>
    </h4>
    <div class="selected center-x">
      <select-movement :options="wristPosition" @emit-value="_getItemSelected" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "left-arm",
  data: () => ({
    item: []
  }),
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
    ...mapActions({
      _actionSetLeftElbowUpdate: "home/actionSetLeftElbowUpdate",
      _actionSetLeftWristUpdate: "home/actionSetLeftWristUpdate"
    }),
    _getItemSelected(value) {
      if (value.includes(".")) this._actionSetLeftElbowUpdate(value);
      else this._actionSetLeftWristUpdate(value);
      this.item.push(value);
    }
  }
};
</script>
