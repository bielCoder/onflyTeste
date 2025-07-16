import axios from '../../../services/api';
// import { useRoute } from 'vue-router'

export default {
  name: 'RecoveryComponent',
  props: {
    email: {
      type: String,
      default: ''
    }
  },
  data() {
    window.history.replaceState({}, '', '/');
    return {
      newPassword: '',
      password: '',
      date: new Date().getFullYear(),
      object: [],
      loginView: true,
    };
  },
  mounted() {
    // Se quiser priorizar o valor vindo da prop
    if (!this.email) {
      this.email = this.$route.params.email || ''
    }
  },
  methods: {
    async submit() {
      await axios.put('/auth/change-password', {
        email: this.email,
        password: this.password
      }).then((response)=> {
        return response.data
      }).then((data) => {
          console.log(data)
      }).catch((erro) => {
          console.log(erro)
      });
    }
  }
}