<style lang="" src="./RecoveryComponent.css"></style>
  <template>
    <div class="background-image" >
       <div class="login-container" v-if="loginView">
        <h2>Redefinição de Senha</h2>
      

        <form @submit.prevent="submit">
          <div class="input-container" >
              <div class="container-separate">
                 <div class="form-group" style="display: none;">
                  <input class="input-control email"  name="email" id="email" type="email" placeholder=" "  :value="email" autocomplete="off" required readonly />
                  <label for="email" class="email-label email">E-mail</label>
                  <i class="bi bi-envelope-at-fill email"></i>
                </div>
                <div class="form-group">
                  <input class="input-control password" v-model="password" name="password" id="password" type="password" placeholder=" " autocomplete="off" required />
                  <label for="password" class="password-label">Nova Senha</label>
                  <i class="bi bi-key-fill"></i>
                </div>
                <p></p>
                <div class="form-group">
                  <input class="input-control password" v-model="newPassword" name="newPassword" id="newPassword" type="password" placeholder=" " autocomplete="off" required />
                  <label for="newPassword" class="password-label">Confirmar Senha</label>
                  <i class="bi bi-key-fill"></i>
                </div>
              </div>

              <div class="form-group">
                <input type="submit" value="Alterar Senha" />
              </div>
              <div class="container-organize-registre">
                 <span>Já possui cadastro?</span>&nbsp;<b><router-link to="/">Login</router-link></b>
              </div>

      
          </div>


        </form>
      </div>
      <div class="footer">
        <p class="text-footer">Onfly&nbsp;&copy;&nbsp;{{ date }}</p>
      </div>
    </div>
    <div class="background-gif" >
     <video src="./../../../assets/videos/logo-main.mp4" muted autoplay loop width="100" height="100" ></video>
    </div>
  </template>
<script src="./RecoveryComponent.ts"></script>
