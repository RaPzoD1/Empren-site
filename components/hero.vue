<template>
  <div class="bg-black">
    <b-jumbotron class="hero-container text-center">
      <div class="text-container">
        <h1 class="display-3 main-title p-4">
          “Si puedes soñarlo, puedes hacerlo”
        </h1>
        <h4 class="text-center">- WALT DISNEY</h4>
        <h2>Bienvenidos Emprendedores</h2>
        <p class="center">
          Emprende-Peru es el indice de emprendedores peruanos <br />
          de diferentes rubros economicos y agrupa a mas de mil <br />
          emprendedores de todo el Peru.
        </p>
        <b-button class="button-style" variant="outline-warning" size="lg" >Unirse</b-button>
      </div>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: 'Hero'
}
</script>
<style scoped>
.hero-container {
  font-family: 'Roboto', sans-serif;
  height: 600px;
  background-image: url('https://images.unsplash.com/photo-1547920045-45d704174248?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=764&q=80');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  color: white;
  text-shadow: 3px 3px 5px #2c2323;
  border-radius: 0;
  margin: 0;
}
.main-title {
  height: 100%;
  font-weight: 500;
  font-style: italic;
}
h2 {
  color: #11B4D3;
  font-size: 50px;
  font-weight: bold;
}
p {
  font-size: 35px;
  color: lightgray;
  text-shadow: 3px 3px 5px #2c2323;
}
h4 {
  color: white;
  text-shadow: 3px 3px 5px black;
  font-weight: bold;
}
.text-container {
  padding-top: 40px;
}
.button-style{
    font-weight: bold;
}
</style>
