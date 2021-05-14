<template>
  <div>
      <div class="bg-gradient-to-r from-green-100 to-dark-turq ...">
      <nav>
          <ul class="flex justify-between">
              <li class="m-4 flex items-center">  
                 <div class="flex">
                      <span class="ml-3 mr-5 flex items-center">
                      <a @click="showNav" class="cursor-pointer">
                      <i class="text-green-300 text-2xl">
                          <fa :icon="['fas','bars']" />
                      </i>
                  </a>
                  </span>
                  <span class="flex items-center">
                       <a href="#">
                      <img class="object-scale-down h-30 w-60" src="../assets/BINARY BONES.png" alt="">
                  </a>
                  </span>
                 </div>
              </li>      
              <li class="m-4 text-white font-nav flex items-center">
                  <nuxt-link to="/About" class="border-2 border-white rounded-lg p-3">
                      About this blog!
                  </nuxt-link>
              </li>
          </ul>
      </nav>
      </div>
 

  <div v-if="nav">
      <ul>
          <li>
              <a href="#">Home</a>
          </li>
          <li>
              <a href="#">Blogs</a>
          </li>
      </ul>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {  
            nav : false
        }
    },
    methods : {
        showNav(){
            this.nav = !this.nav
        }
    }
}
</script>

<style>

</style>