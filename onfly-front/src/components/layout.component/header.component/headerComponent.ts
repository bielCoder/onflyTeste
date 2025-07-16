import api from "@/services/api";


export default {
  name: "HeaderComponent",
  data() {
    return {
      me: '',

    }
  },
  methods: {
    async getMe() { 
      try {
        await api.get('/auth/me').then((response) => {
            return response.data
        }).then((data)=>{
            this.object = data
            this.me = this.object.auth.data.name
        });
       
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
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
  },
  mounted() {
    this.getMe();
  }
}