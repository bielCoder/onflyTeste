import api from "@/services/api";
import FooterComponent from "@/components/layout.component/footer.component/footerComponent.vue";
import HeaderComponent from "@/components/layout.component/header.component/headerComponent.vue";
import MenuComponent from "@/components/layout.component/menu.component/menuComponent.vue";






export default {
  name: 'DashboardComponent',
  data() {
 
    window.history.replaceState({}, '', '/dashboard');

    return {
      email: '',
      password: '',
      date: new Date().getFullYear(),
      object: [],
      token:'',
      travellings:[]
    };
  },
  methods: {
   async logout() {
        try {
          await api.post('/auth/logout'); // primeiro chama o backend com o token ainda presente
        } catch (error) {
          console.warn('Erro ao fazer logout na API:', error);
        } finally {
          sessionStorage.removeItem('auth'); // só remove o token depois
          this.$router.push('/'); // redireciona para o login
        }
    },
    async getTravellings()
    {
         return api.get('/travellings').then((response) => {
            return response.data
         }).then((data) => {
            this.object = data;
            this.travellings = this.object.travellings.data.data
            
         });
    }

  },
  components:{
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  },
  mounted() {
    this.getTravellings(); // ✅ Agora vai funcionar
  }
};