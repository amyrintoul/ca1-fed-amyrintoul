<template>

  <div id="app">
    <div class="background">
     <NavBar/>
    <router-view />
    </div>

    
    
  </div>
</template>

<script>
import NavBar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    NavBar
    
  }
}
</script>

<style>
#app{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
