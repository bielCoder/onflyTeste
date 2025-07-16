import axios from '../../../services/api';
import * as yup from 'yup';
import ErrorComponent from '../../utilities/error.component/ErrorComponent.vue';

// Esquema de validação
const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
});

export default {
  name: 'ForgotPasswordComponent',
  components: { ErrorComponent },

  data() {
    window.history.replaceState({}, '', '/');

    return {
      email: '',
      date: new Date().getFullYear(),
      object: [],
      token: '',
      loginView: true,
      error: '',

      errors: {
        email: ''
      },
      touched: {
        email: false
      }
    };
  },

  methods: {
    handleBlur(field) {
      this.touched[field] = true;

      schema.validateAt(field, this.$data)
        .then(() => {
          this.errors[field] = '';
          this.error = ''; // Limpa erro geral ao corrigir
        })
        .catch(err => {
          this.errors[field] = err.message;
        });
    },

    async submit() {
      try {
        await schema.validate({
          email: this.email
        });

        const response = await axios.post('/auth/recovery', {
          email: this.email,
        });

        this.object = response.data;
        console.log(this.object);

        // Mensagem opcional de sucesso
        this.error = 'E-mail de recuperação enviado!';

      } catch (error) {
        if (error.name === 'ValidationError') {
          this.error = error.message;
          return;
        }

        if (error.response && error.response.data) {
          this.error = error.response.data.message || 'Erro ao enviar recuperação.';
        } else {
          this.error = 'Erro de conexão com o servidor.';
        }
      }
    }
  }
};