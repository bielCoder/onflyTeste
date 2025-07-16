<style scoped>
.footer-container {
  background-color: #1E90FF;
  color: white;
  padding: 1em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

.logo-image {
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('../../../assets/img/logo.png');
  background-size: cover;
  width: 92px;
  height: 32px;

}

.logoff {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.logoff a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.logoff a:hover {
  text-decoration: underline;
}

.text-footer {
    letter-spacing: 1px;
}
</style>

<template> 
  <div class="footer-container">
        <p class="text-footer"><span>Onfly</span>&copy;{{ year }}</p>
  </div>
</template>

<script>
import api from "@/services/api";


export default {
  name: "FooterComponent",
  data() {
    return {
      me: '',
      year:  new Date().getFullYear()
    }
  },
  methods: {
    async logout() {
      try {
        await api.post('/auth/logout');
        console.log('Logout realizado com sucesso.');
      } catch (error) {
        console.warn('Erro ao fazer logout na API:', error);
      } finally {
        sessionStorage.removeItem('auth'); // Use a mesma chave do interceptor!
        this.$router.push('/'); // Redireciona para a página de login
      }
    }
  }
}
</script>

