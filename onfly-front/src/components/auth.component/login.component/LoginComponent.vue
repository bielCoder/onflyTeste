<style lang="" src="./LoginComponent.css"></style>
<template>
  <div class="background-image">
    <div class="login-container">
      <h2>OnFly</h2>
      <span class="slug">Viajar de avião não precisa ser um empecilho para o desenvolvimento dos seus negócios.</span>

      <form @submit.prevent="login">
        <div class="input-container">
          <div class="container-separate">
            <div class="form-group">
              <input
                class="input-control email"
                v-model="email"
                name="email"
                id="email"
                type="email"
                placeholder=" "
                autocomplete="off"
                @blur="handleBlur('email')"
              />
              <label for="email" class="email-label">E-mail</label>
              <i class="bi bi-envelope-at-fill"></i>
            </div>
            <ErrorComponent v-if="touched.email && errors.email" :error="errors.email" />

            <div class="form-group">
              <input
                class="input-control password"
                v-model="password"
                name="password"
                id="password"
                type="password"
                placeholder=" "
                @blur="handleBlur('password')"
              />
              <label for="password" class="password-label">Senha</label>
              <i class="bi bi-key-fill"></i>
            </div>
            <ErrorComponent v-if="touched.password && errors.password" :error="errors.password" />
             <ErrorComponent v-if="error" :error="error" />
          </div>

          <div class="form-group">
            <input type="submit" value="Acessar" />
          </div>

          <!-- Erro geral da API -->
         

          <div class="container-organize-registre">
            <span>Ainda não possui conta?</span>&nbsp;<router-link to="/register"><b>Cadastrar-se</b></router-link>
          </div>

          <a class="forgot-password" @click="forgotPassword"><b>Esqueci a minha senha</b></a>
        </div>
      </form>

      <div class="footer">
        <p class="text-footer">Onfly&nbsp;&copy;&nbsp;{{ date }}</p>
      </div>
    </div>

    <div class="background-gif">
      <video src="../../../assets/videos/logo-main.mp4" muted autoplay loop width="100" height="100"></video>
    </div>
  </div>
</template>


<script src="./LoginComponent.ts"></script>

