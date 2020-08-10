<template>
  <div class="home align-item">
    <h1 class="center-x">R.O.B.O</h1>
    <div class="positions">
      <!-- Cabeça => Rtação e Inclinação -->
      <div class="head-robot">
        <h2>Cabeça</h2>
        <head-component
          :slope="_getSlope | transform"
          :rotation="_getRotation | transform"
          :slopePosition="slopePosition"
          :rotationPosition="rotationPosition"
        />
      </div>
      <!-- Braços => Ombros e Pulsos -->
      <div class="left-arm">
        <h2>Braço Esquerdo</h2>
        <left-arm-component
          :elbow="_getLeftElbow | transform"
          :wrist="_getLeftWrist | transform"
          :elbowPosition="elbowPosition"
          :wristPosition="wristPosition"
        />
      </div>
      <div class="right-arm">
        <h2>Braço Direito</h2>
        <right-arm-component
          :elbow="_getRightElbow | transform"
          :wrist="_getRightWrist | transform"
          :elbowPosition="elbowPosition"
          :wristPosition="wristPosition"
        />
      </div>
    </div>
    <div class="center-x align-item">
      <a class="btn " href="/">ALTERAR</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  data: () => ({
    // Cabeça
    rotationPosition: ["Rotação -90º", "Rotação -45º", "Em Repouso"],
    slopePosition: ["Para Cima", "Para Baixo", "Em Repouso"],
    // Braço
    elbowPosition: [
      "Em Repouso",
      "Levemente Contraído",
      "Contraído",
      "Fortemente Contraído"
    ],
    wristPosition: [
      "Rotação para -90º",
      "Rotação para -45º",
      ". Em Repouso",
      "Rotação para 45º",
      "Rotação para 90º",
      "Rotação para 135º",
      ". Rotação para 180º"
    ]
  }),
  computed: {
    ...mapGetters({
      _getRobo: "home/getRobo",
      /** Cabeça */
      _getSlope: "home/getSlope",
      _getRotation: "home/getRotation",
      /** Braços */
      /** Esquerdo */
      _getLeftElbow: "home/getLeftElbow",
      _getLeftWrist: "home/getLeftWrist",
      /** Direito */
      _getRightElbow: "home/getRightElbow",
      _getRightWrist: "home/getRightWrist"
    })
  },
  components: {
    // Lazy
    "head-component": () => import("../components/head_robot"),
    "left-arm-component": () => import("../components/left_arm"),
    "right-arm-component": () => import("../components/right_arm")
  },
  methods: {
    ...mapActions({
      _actionSetRobo: "home/actionRobo"
    })
  },
  created() {
    this._actionSetRobo();
  },
  filters: {
    transform(value) {
      switch (value) {
        case "initial":
          return "Em Repouso";
        case "minusNinetyRotation":
          return "Rotação para -90º";
        case "minusFortyFiveRotation":
          return "Rotação para -45º";
        case "fortyFiveRotation":
          return "Rotação para 45º";
        case "ninetyRotation":
          return "Rotação para 90º";
        case "up":
          return "Para Cima";
        case "down":
          return "Para Baixo";
        case "slightlyContracted":
          return "Levemente Contraído";
        case "contracted":
          return "Contraído";
        case "stronglyContracted":
          return "Fortemente Contraído";
        case "rotationToMinusNinety":
          return "Rotação para -90º";
        case "rotationToMinusFortyFive":
          return "Rotação para -45º";
        case "rotationToFortyFive":
          return "Rotação para 45º";
        case "rotationToNinety":
          return "Rotação para 90º";
        case "rotationToHundredAndThirtyFive":
          return "Rotação para 135º";
        case "rotationToHundredAndEighty":
          return "Rotação para 180º";
        default:
          return "Opps";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.align-item {
  margin: 30px 0 0 0;
}
.positions {
  display: flex;
  align-items: center;
  align-content: stretch;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    width: 50%;
    margin: 40px 10px 0 10px;
    line-height: 90px;
    text-align: center;
    border-radius: 25px;
    background-color: #6932f6;
    box-shadow: 5px 5px #6a32f61c;
  }
}
</style>
