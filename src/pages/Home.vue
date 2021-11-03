<template>
<div class="container">
    <b-card-group deck>
    <CountryViewer />
    </b-card-group>


  <b-card-group class="mt-3">
    <div class="card border-0 card-size m-2" style="max-width: 500px;">
  <img class="card-img" src="../assets/weather.png" alt="a snow-capped mountain range"/>
  <div class="card-img-overlay text-black text-center">
    <div class="bg-light">
    <h2 class="card-title">View All Weathers</h2>
    <router-link :to="{name: 'all_countries'}" class="btn btn-warning">Click here</router-link>
    </div>
  </div>
</div>
   <div class="card  border-0 card-size-2 m-2" style="max-width: 500px;">
  <img class="card-img" src="../assets/world.png" alt="a snow-capped mountain range"/>
  <div class="card-img-overlay text-black text-center ">
    <div class="bg-light">
    <h2 class="card-title  ">View All Countries</h2>
    <p class="card-text"></p>
    <router-link :to="{name: 'all_countries'}" class="btn btn-warning">Click here</router-link>
    </div>
  </div>
</div>
  </b-card-group>
</div> 


</template>

<script>
import CountryViewer from '../components/CountryViewer.vue'

export default {
  components: { CountryViewer },
  name: 'Home'
}
</script>

<style>
.card-size{
  max-width: 50%;
}
.card-size-2{
  max-width: 40%;
}

.bg-light {
  
  border-radius: 20px;
   opacity: 0.8;
   padding: 3rem;
    display: block;
    margin: 0;
   position: absolute;               /* 2 */
   top: 45%;
   transform: translate(15%, -50%)                          /* 3 */
   
    

   
  
   
     
}




</style>