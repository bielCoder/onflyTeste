import axios from '../../../services/api';
import * as yup from 'yup';
import ErrorComponent from '../../utilities/error.component/ErrorComponent.vue';

// Validação do token: deve ter 6 dígitos
const schema = yup.object({
  token: yup.string().length(6, 'O token deve ter 6 dígitos').required('Token é obrigatório'),
});

export default {
  name: 'TokenComponent',
  components: { ErrorComponent },

  data() {
    window.history.replaceState({}, '', '/');

    return {
      date: new Date().getFullYear(),
      object: [],
      token: '',
      codes: Array(6).fill(''),
      error: '',
      touched: [false, false, false, false, false, false],
    };
  },

  methods: {
    handleBlur(index) {
      this.touched[index] = true;
      const joinedToken = this.codes.join('');

      schema.validate({ token: joinedToken })
        .then(() => {
          this.error = '';
        })
        .catch(err => {
          this.error = err.message;
        });
    },

    async submit() {
      const joinedToken = this.codes.join('');

      try {
        await schema.validate({ token: joinedToken });

        const { name, email, password, access, token } = this.$route.query;

        const response = await axios.post('/auth/check', {
          name,
          email,
          password,
          access,
          token: token,
          code: joinedToken
        });

        this.object = response.data;
        this.token = this.object.auth.data.token;

        sessionStorage.setItem("auth", this.token);

        if (this.token) {
          this.$router.push('/dashboard');
        } else {
          this.$router.push('/');
        }

      } catch (error) {
        if (error.name === 'ValidationError') {
          this.error = error.message;
          return;
        }

        if (error.response && error.response.data) {
          this.error = error.response.data.message || 'Token inválido ou expirado.';
        } else {
          this.error = 'Erro de conexão com o servidor.';
        }
      }
    },

    changeInput(index) {
      // Move automaticamente para o próximo input
      if (this.codes[index].length === 1) {
        const nextInput = this.$refs.inputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    },

    handleBackspace(event, index) {
      if (event.key === 'Backspace') {
        this.codes[index] = '';

        const prevInput = this.$refs.inputs[index - 1];
        if (prevInput) {
          this.$nextTick(() => {
            prevInput.focus();
          });
        }

        event.preventDefault();
      }
    },

    allowOnlyDigits(event) {
      const key = event.key;
      if (!/^\d$/.test(key)) {
        event.preventDefault();
      }
    }
  }
};