<template>
<div id="app">
    <b-container>
      <div>
        <h1 class="mt-3 ml-2">All Countries</h1>
        <div class="search-box">
            <input  class="ml-2 search-box1" type="text" placeholder="Search.." v-model="term" v-on:keyup.enter="searchCountry()" />
            <b-button class="float-end ml-3 search-button" variant="warning" @click="searchCountry()">Search </b-button>
            <div>

        </div>
        </div>
       
      </div>
      <b-card-group>
        
    <CountryViewer 
      v-for="country in countries"
      :key="country.ccn3"
      :country="country" 
      class="mt-2"
    />
      </b-card-group>
    </b-container>
  
  </div>
</template>

<script>
import axios from 'axios'
import CountryViewer from '@/components/CountryViewer'
const RESTCOUNTRY_URL ="https://restcountries.com/v3.1";



export default {
  name: 'AllCountries',
  components: {
    CountryViewer
  },
  data() {
    return {
      countries: [],
      term:""
    };
  },
  mounted() {
    axios.get(`${RESTCOUNTRY_URL}/all`)
         .then(response => {
           console.log(response.data)
           this.countries = response.data
         })
         .catch(error => console.log(error))
  },

  methods:{
  searchCountry(){
        if(!this.term) {
           // this.$bvToast.toast('Please enter a search term!', {
           // title: 'Warning',
           // variant: 'danger',
           // toaster: 'b-toaster-top-center',
          //  autoHideDelay: 9000,
           // solid: true
          //  })
          alert("Please enter a search term!")
            return
        }
        axios.get( `${RESTCOUNTRY_URL}/name/${this.term} `)
             .then((response) => {
                 console.log(response.data.data)
                 this.countries = response.data.data
             })
             .catch(error => console.log(error))

             this.term = ""
        }
  }

  
}
</script>

<style>
.search-box1 {
  width: 50%;
  max-width: 200px;
  height: 40px;
  border-radius: 10px;
    
}

.search-button{
  width: 10%;
  height: 40px;
  border-radius: 50px;
}



</style>