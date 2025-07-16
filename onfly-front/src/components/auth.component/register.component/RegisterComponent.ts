import axios from '../../../services/api';
import * as yup from 'yup';
import ErrorComponent from '../../utilities/error.component/ErrorComponent.vue';

// Esquema de validação Yup
const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Senha é obrigatória'),
  confirm: yup.string().oneOf([yup.ref('password')], 'As senhas não conferem').required('Confirmação é obrigatória'),
});

export default {
  name: 'RegisterComponent',
  components: { ErrorComponent },

  data() {
    window.history.replaceState({}, '', '/');

    return {
      name: '',
      email: '',
      password: '',
      confirm: '',
      date: new Date().getFullYear(),
      object: [],
      token: '',
      getToken: '',
      error: '', // Erro geral da API

      // Erros individuais dos campos
      errors: {
        name: '',
        email: '',
        password: '',
        confirm: ''
      },
      touched: {
        name: false,
        email: false,
        password: false,
        confirm: false
      }
    };
  },

  methods: {
    handleBlur(field) {
      this.touched[field] = true;

      schema.validateAt(field, this.$data)
        .then(() => {
          this.errors[field] = '';
          this.error = ''; // Limpa erro geral ao mexer no campo
        })
        .catch(err => {
          this.errors[field] = err.message;
        });
    },

    async Register() {
      try {
        await schema.validate({
          name: this.name,
          email: this.email,
          password: this.password,
          confirm: this.confirm
        });

        const response = await axios.post('/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          access: 3
        });

        this.object = response.data;

        this.token = this.object.token.data;
        this.getToken = this.object.token.token;

        if (this.token) {
          this.$router.push({
            path: '/token',
            query: {
              name: this.name,
              email: this.email,
              password: this.password,
              access: 3,
              token: this.getToken
            }
          });
        }

      } catch (error) {
        if (error.name === 'ValidationError') {
          this.error = error.message;
          return;
        }

        if (error.response && error.response.data) {
          this.error = error.response.data.message || 'Erro ao registrar.';
        } else {
          this.error = 'Erro de conexão com o servidor.';
        }
      }
    }
  }
};