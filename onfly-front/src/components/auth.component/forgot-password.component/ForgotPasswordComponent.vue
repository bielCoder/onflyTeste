<style lang="" src="./ForgotPasswordComponent.css"></style>
 <template>
  <div class="background-image">
    <div class="login-container" v-if="loginView">
      <h2>Redefinição de Senha</h2>

      <form @submit.prevent="submit">
        <div class="input-container">
          <div class="container-separate">
            <div class="form-group">
              <input class="input-control email"
                     v-model="email"
                     @blur="handleBlur('email')"
                     name="email" id="email"
                     type="email" placeholder=" " autocomplete="off" />
              <label for="email" class="email-label">E-mail</label>
              <i class="bi bi-envelope-at-fill"></i>
            </div>
              <ErrorComponent v-if="touched.email && errors.email" :error="errors.email" />

          </div>

          <div class="form-group">
            <input type="submit" value="Enviar" />
          </div>

          <ErrorComponent v-if="error" :error="error" />

          <div class="container-organize-registre">
            <span>Ainda não possui conta?</span>&nbsp;<router-link to="/register"><b>Cadastrar-se</b></router-link>
          </div>

        </div>
      </form>
    </div>

    <div class="footer">
      <p class="text-footer">Onfly&nbsp;&copy;&nbsp;{{ date }}</p>
    </div>

    <div class="background-gif">
      <video src="../../../assets/videos/logo-main.mp4" muted autoplay loop width="100" height="100"></video>
    </div>
  </div>
</template>
<script src="./ForgotPasswordComponent.ts"></script>
