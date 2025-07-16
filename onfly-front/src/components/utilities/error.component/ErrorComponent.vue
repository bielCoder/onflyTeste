<style src="./ErrorComponent.css" scoped></style>
<template>
   <div v-if="error" class="alert alert-danger d-flex align-items-center" role="alert">
    <i class="bi bi-exclamation-triangle-fill me-2"></i>
    <div>{{ error }}</div>
  </div>
</template>
<script src="./ErrorComponent.ts"></script>