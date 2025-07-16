<style src="../header.component/headerComponent.css" scoped></style>
<template>
  <div class="container-header">
    <div class="logo-image"></div>
    <div class="logoff">
      <a  @click.prevent="logout">   <span>{{ me }}</span> - <i class="bi bi-door-open-fill"></i> Sair</a>
    </div>
  </div>
</template>

<script src="../header.component/headerComponent.ts"></script>

