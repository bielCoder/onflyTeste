<template>
  <div class="container-menu-list">
        <ul class="list">
            <li><i class="bi bi-airplane-fill"></i> Viagens</li>
            <li><i class="bi bi-card-checklist"></i> Meus Pedidos</li>
            <li><i class="bi bi-info-square-fill"></i> Sobre</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
  
    }
  }
}
</script>

<style scoped>

.container-menu-list {
    background-color: #1E90FF;
    color: white;
    padding: 1.2em 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    width: 20vw;
}

.container-menu-list .list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.container-menu-list .list li {
  cursor: pointer;
}




</style>
