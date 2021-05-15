<template>
<div class="relative min-h-screen md:flex bg-gray-300">
  <div class="bg-blue-400 flex justify-between md:hidden">
     <a class="flex justify-center bg-white m-4 rounded-md overflow-hidden" href="#">
            <img class="object-scale-down h-30 w-60" src="../assets/BB.gif" alt="">
        </a>
        <button class="p-4 focus:outline-none focus:bg-gray-200 rounded" @click="showNav">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
  </div>

    <div class="bg-blue-400 text-white w-80 absolute inset-y-0 z-50  left-0 transform transition ease-in-out duration-200 md:relative md:translate-x-0" v-bind:class="{ '-translate-x-full' : isActive }"> <!--sidebar-->

        <a class="flex justify-center m-8 bg-white rounded" href="#">
            <img class="object-scale-down h-30 w-60" src="../assets/BB.gif" alt="">
        </a>
        <nav>
          <ul>
            <nuxt-link to="/" class="navLink">
              <span class="flex-items-center">
                <svg class="w-6 h-6 mx-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              </span>

              <span class="flex-items-center font-nav">HOME</span>
              
            </nuxt-link>

              <nuxt-link to="/About" class="navLink">
                <span class="flex-items-center">
                <svg class="w-6 h-6 mx-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </span>

              <span class="flex-items-center font-nav">About the Blog</span>

              </nuxt-link>

              <nuxt-link to="/About" class="navLink">
                <span class="flex-items-center">
                <svg class="w-6 h-6 mx-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H7v6h6V7z"></path><path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"></path></svg>
              </span>

              <span class="flex-items-center font-nav">Electronics</span>

              </nuxt-link> 

              <nuxt-link to="/About" class="navLink">
                <span class="flex-items-center">
                <svg class="w-6 h-6 mx-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </span>

              <span class="flex-items-center font-nav">Coding</span>

              </nuxt-link>  


              <nuxt-link to="/About" class="navLink">
                <span class="flex-items-center">
                <svg class="w-6 h-6 mx-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
              </span>

              <span class="flex-items-center font-nav">Guides</span>

              </nuxt-link>  


              <nuxt-link to="/About" class="navLink">
                <span class="flex-items-center">
                <svg class="w-6 h-6 mx-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path></svg>
              </span>

              <span class="flex-items-center font-nav">Projects</span>

              </nuxt-link> 
            
          </ul>
        </nav>
    </div>
    <div class="flex-1">
        <nuxt />
    </div>

</div>  
</template>

<script>
export default {
  data(){
    return {
      isActive : true
    }
  },
  methods : {
    showNav(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style>

</style>
