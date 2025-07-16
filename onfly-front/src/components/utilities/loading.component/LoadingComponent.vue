<style src="./LoadingComponent.css" scoped></style>

<template>
  <div v-if="visible" class="loading-overlay">
   
         <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
        <p>Carregando...</p>
  </div>
</template>

<script src="./LoadingComponent.ts"></script>

