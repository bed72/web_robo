<template>
  <div class="head-robot">
    <h4>
      Rotação da Cabeça:
      <i>{{ rotation }}</i>
    </h4>
    <div class="selected center-x">
      <select-movement :options="rotationPosition" @emit-value="_getItemSelected" />
    </div>
    <h4>
      Inclinação da Cabeça:
      <i>{{ slope }}</i>
    </h4>
    <div class="selected center-x">
      <select-movement :options="slopePosition" @emit-value="_getItemSelected" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "head-robot",
  data: () => ({
    item: []
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
  computed: {
    ...mapGetters({
      _getRobo: "home/getRobo"
    })
  },
  methods: {
    ...mapActions({
      _actionSetIDUpdate: "home/actionSetIDUpdate",
      _actionSetSlopeUpdate: "home/actionSetSlopeUpdate",
      _actionSetRotationUpdate: "home/actionSetRotationUpdate"
    }),
    _getItemSelected(value) {
      this._actionSetIDUpdate(this._getRobo.id);
      if (value.includes(".")) this._actionSetRotationUpdate(value);
      else this._actionSetSlopeUpdate(value);
      this.item.push(value);
    }
  }
};
</script>
