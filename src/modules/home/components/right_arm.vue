<template>
  <div class="right-arm">
    <h4>
      Cotovelo Direito:
      <i>{{ elbow }}</i>
    </h4>
    <div class="selected center-x">
      <select-movement
        :options="elbowPosition"
        @emit-value="_getItemSelected"
      />
    </div>
    <h4>
      Pulso Direito:
      <i>{{ wrist }}</i>
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
import { mapActions } from "vuex";
export default {
  name: "right-arm",
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
      _actionSetRightElbowUpdate: "home/actionSetRightElbowUpdate",
      _actionSetRightWristUpdate: "home/actionSetRightWristUpdate"
    }),
    _getItemSelected(value) {
      if (value.includes(".")) this._actionSetRightElbowUpdate(value);
      else this._actionSetRightWristUpdate(value);
      this.item.push(value);
    }
  }
};
</script>
