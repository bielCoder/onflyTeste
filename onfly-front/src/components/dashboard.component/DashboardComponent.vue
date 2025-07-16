<style lang="" src="./DashboardComponent.css" scoped></style>
  <template>
      <HeaderComponent></HeaderComponent>
        <div class="container-content-separate">
           <MenuComponent></MenuComponent>
           <div class="main-container">
              <div class="container-content">
                 <div class="container-title">
                    <h4>Viagens Liberadas</h4>
                 </div>
                 <div class="container-travelling-cards" >
                     <div class="card" v-for="travel in travellings" :key="travel.id">
                            <div class="image-card"></div>
                            <ul class="list">
                              <li>Cidade: {{ travel.city }}</li>
                              <li>Companhia: {{ travel.company }}</li>
                            </ul>
                            <div>
                                <button class="reserve"><i class="bi bi-calendar-check"></i> Reservar</button>
                            </div>
                      </div>
                 </div>
              </div>
           </div>
        </div>
      <FooterComponent></FooterComponent>
  </template>
<script src="./DashboardComponent.ts"></script>
