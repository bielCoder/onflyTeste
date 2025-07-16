<template>
  <router-view />
    <LoadingComponent />
</template>

<script>
import LoadingComponent from './components/utilities/loading.component/LoadingComponent.vue';

export default {
  name: 'App',
  components: {LoadingComponent}
};
</script>

<style>
html, body {
    overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  font-family: 'Verdana';
  box-sizing: border-box;
}

/* Largura do scroll */
::-webkit-scrollbar {
    width: 8px;  /* Para scroll vertical */
    height: 8px; /* Para scroll horizontal */
}

/* Cor de fundo da barra de rolagem (trilho) */
::-webkit-scrollbar-track {
    background: #1c1c1c; /* Fundo escuro ou cor do layout */
    border-radius: 0px 4px 4px 0px;
}

/* Parte que se move (thumb) */
::-webkit-scrollbar-thumb {
    background: #1E90FF; /* Cor da "bolinha" do scroll */
    border-radius: 0px 4px 4px 0px;
}

/* Ao passar o mouse no thumb */
::-webkit-scrollbar-thumb:hover {
    background: #1E90FF; /* Cor no hover */
}

</style>
