<template>
  <div>
    

    
  <b-navbar toggleable="lg" type="dark" variant="dark" >
    <b-navbar-brand href="#">API</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav >
      <b-navbar-nav>
        <router-link :to="{name: 'home'}" class="nav-link">Home</router-link> 
         <router-link :to="{name: 'all_countries'}" class="nav-link">Countries</router-link>
         <router-link :to="{name: 'all_countries'}" class="nav-link">Weather</router-link>
         
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.navbar {
background: rgb(10,2,77);
background: linear-gradient(58deg, rgba(10,2,77,1) 18%, rgba(107,192,250,0.9867297260701156) 84%, rgba(255,248,247,1) 100%);
}
</style>