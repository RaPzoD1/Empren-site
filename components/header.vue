<template>
  <div class="nav-container">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img class="p-1 m-1" src="https://seeklogo.com/images/H/Hecho_en_Peru-logo-90A673302D-seeklogo.com.png" alt="hecho en peru">
      <b-navbar-brand class="p-2 " href="#">
        <h1>PERÚ - EMPRENDE</h1>
        <h4 class="d-flex justify-content-center">Indice de emprendedores</h4>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="lg"
              class="mr-sm-2"
              placeholder="Busca tu emprendedor"
            />
            <b-button size="lg" class="my-2 my-sm-0 btn-color" type="submit">
              Buscar
            </b-button>
          </b-nav-form>

          <b-nav-item class="text-items" right>
            <h3>Emprendedores</h3>
          </b-nav-item>
          <b-nav-item class="text-items" text="Lang" right>
            <h3>Contacto</h3>
          </b-nav-item>
          <b-nav-item class="text-items" text="Lang" right>
            <h3>Login</h3>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
.nav-container{
    box-shadow: 1px 1px 1px gray;
}
img {
  height: 150px;
}
h1{
  color: #137588;
  text-shadow: 2px 2px 2px lightgray;
  font-family: 'Alfa Slab One', cursive;
}
h3{
    align-content: center;
    color: #137588;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    text-shadow: 1px 1px 1px #116677;
    font-weight: bold;
}
h3:hover{
    color: #E11467;
    text-shadow: 1px 1px 1px #c5145b;
}
h4 {
  color: #E2BE34;
  font-weight: bold;
  text-shadow: 1px 1px 1px #b69926;
}
.btn-color{
    background-color: #137588;
    border: none;
}
.btn-color:hover {
    background-color: #E11467;
    /* border: none; */
}
</style>
