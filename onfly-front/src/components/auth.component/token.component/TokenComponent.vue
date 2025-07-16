<style lang="" src="./TokenComponent.css"></style>
 <template>
  <div class="background-image">
    <div class="login-container">
      <h2>Autenticador</h2>

      <form @submit.prevent="submit">
        <div class="input-container">
          <div class="container-separate" style=" width: 100%;
                                                  display: flex;
                                                  flex-direction: column;
                                                  gap: .8em;
                                                  align-items: center;">
            <div class="otp-container">
              <span v-for="(value, i) in codes" :key="i" class="input-wrapper">
                <input
                  type="text"
                  maxlength="1"
                  class="block-token no-spinner"
                  v-model="codes[i]"
                  ref="inputs"
                  @input="changeInput(i)"
                  @blur="handleBlur(i)"
                  @keydown="handleBackspace($event, i)"
                  @keypress="allowOnlyDigits"
                />
                <span v-if="i === 2" class="separator">-</span>
              </span>
            </div>

            <ErrorComponent v-if="error" :error="error" />

            <input type="submit" value="Validar Token" style="width: 88%" />
          </div>

          <router-link to="/">
            <p class="back-page">
              <i class="bi bi-box-arrow-left"></i>
              &nbsp;Voltar para a página de login
            </p>
          </router-link>
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
<script src="./TokenComponent.ts"></script>

