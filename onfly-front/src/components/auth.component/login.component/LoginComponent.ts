import axios from '../../../services/api';
import * as yup from 'yup';
import ErrorComponent from '../../utilities/error.component/ErrorComponent.vue';

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Senha é obrigatória'),
});

export default {
  name: 'LoginComponent',
  components: { ErrorComponent },

  data() {
    window.history.replaceState({}, '', '/');

    return {
      email: '',
      password: '',
      date: new Date().getFullYear(),
      object: [],
      token: '',
      loginView: true,
      error: '', // Erro geral da API
      errors: {
        email: '',
        password: '',
      },
      touched: {
        email: false,
        password: false,
      },
    };
  },

  methods: {
    handleBlur(field) {
    this.touched[field] = true;

    schema.validateAt(field, { [field]: this[field] })
      .then(() => {
        this.errors[field] = '';
        this.error = '';
      })
      .catch(err => {
        this.errors[field] = err.message;
      });
  },

    async login() {
      try {
        await schema.validate({
          email: this.email,
          password: this.password,
        });

        const response = await axios.post('/auth/login', {
          email: this.email,
          password: this.password,
        });

        this.object = response.data;
        this.token = this.object.auth.data.token;
        sessionStorage.setItem("auth", this.token);

        if (this.token) {
          this.error = '';
          this.$router.push('/dashboard');
        }

      } catch (error) {
        if (error.name === 'ValidationError') {
          // Erro do YUP
          this.error = error.message;
          return;
        }

        // Erro da API
        if (error.response && error.response.data) {
          this.error = error.response.data.message || 'Credenciais inválidas.';
        } else {
          this.error = 'Erro de conexão com o servidor.';
        }
      }
    },

    register() {
      this.loginView = false;
      this.$router.push('/register');
    },

    forgotPassword() {
      this.loginView = false;
      this.$router.push('/forgot-password');
    },
  },
};