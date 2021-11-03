<template>
    <div  class=""> 
              <div>
            <b-card
                :img-src="country.flags.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-4 ml-2 mr-3 image border-top-0"
                
                
            >
                <h4 class="card-title link-warning"> <p><b>Name: </b><router-link :to="{name: 'country', params: {country: country.name.official}}">{{ country.name.common }}</router-link ></p></h4>
                <b-card-text>
                <p><b>Capital: </b>{{ country.capital[0] }}</p>
                <p><b>Region: </b>{{ country.region }}</p>
                <p><b>Population: </b>{{ country.population }}</p>
            
                </b-card-text>
                <router-link :to="{name: 'country'}" class="btn btn-outline-dark float-right">View More</router-link>

            <!-- <b-button href="#" variant="primary float-end">View More</b-button>-->
            </b-card>
           
     
        </div> 
      
         
    </div>
 
</template>

<script>
export default {
  name: 'CountryViewer',
  props: {
    country: Object
  }
}
</script>

<style>
.card-img-top{
    height:15rem;
}
.image{

  margin:10px;
  max-width:20rem;
  height: 30rem;

}

</style>
