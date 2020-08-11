const reversedMixin = {
  reversed(value) {
    switch (value) {
      case null:
        return "initial";

      case "Em Repouso":
        return "initial";

      case "Em Repouso.":
        return "initial";

      case "Rotação -90º.":
        return "minusNinetyRotation";

      case "Rotação -45º.":
        return "minusFortyFiveRotation";

      case "Rotação para 45º":
        return "fortyFiveRotation";

      case "Rotação para 90º":
        return "ninetyRotation";

      case "Para Cima":
        return "up";

      case "Para Baixo":
        return "down";

      case "Levemente Contraído":
        return "slightlyContracted";

      case "Levemente Contraído.":
        return "slightlyContracted";

      case "Contraído":
        return "contracted";

      case "Contraído.":
        return "contracted";

      case "Fortemente Contraído":
        return "stronglyContracted";

      case "Fortemente Contraído.":
        return "stronglyContracted";

      case "Rotação para -90º":
        return "rotationToMinusNinety";

      case "Rotação para -45º":
        return "rotationToMinusFortyFive";

      // eslint-disable-next-line no-duplicate-case
      case "Rotação para 45º":
        return "rotationToFortyFive";

      // eslint-disable-next-line no-duplicate-case
      case "Rotação para 90º":
        return "rotationToNinety";

      case "Rotação para 135º":
        return "rotationToHundredAndThirtyFive";

      case "Rotação para 180º":
        return "rotationToHundredAndEighty";

      default:
        return "initial";
    }
  }
};

export default reversedMixin;
