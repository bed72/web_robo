<template>
  <v-app id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h3>Oops! Página não encontrada</h3>
        <h1>
          <span class="number">4</span>
          <span class="number">0</span>
          <span class="number">4</span>
        </h1>
      </div>
      <h2>
        Lamentamos o Erro
        <span id="emoji">&#128549;</span>
      </h2>
      <button href="/">Voltar</button>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "notfound"
};
</script>

<style lang="scss" scoped>
#emoji {
  font-size: 27px;
}
#notfound {
  height: 100vh;
  position: relative;
  background-color: #292929; //$second;
}
#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.number {
  color: #ffffff; //$white;
}
.notfound {
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}
.notfound .notfound-404 {
  position: relative;
  height: 240px;
}
.notfound .notfound-404 h1 {
  font-family: "Montserrat", sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  color: #ffffff; //$white;
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
}
.notfound .notfound-404 h1 > span {
  text-shadow: -8px 0px 0px grey;
}
.notfound .notfound-404 h3 {
  font-family: "Cabin", sans-serif;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff; //$white;
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
}
.notfound h2 {
  font-family: "Cabin", sans-serif;
  font-size: 20px;
  font-weight: 404;
  text-transform: uppercase;
  color: #ffffff; //$white;
  margin-top: 0px;
  margin-bottom: 25px;
}
@media only screen and (max-width: 767px) {
  .notfound .notfound-404 {
    height: 200px;
  }
  .notfound .notfound-404 h1 {
    font-size: 200px;
    background: #ffffff; //$white;
  }
}
@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    height: 162px;
  }
  .notfound .notfound-404 h1 {
    font-size: 162px;
    height: 150px;
    line-height: 162px;
  }
  .notfound h2 {
    font-size: 16px;
  }
}
</style>
