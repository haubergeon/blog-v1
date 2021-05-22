<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>

<style>
.nuxt-content h1{
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  background-color:lightskyblue;
  color: white;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  padding: 1rem;
}
.nuxt-content h2{
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
}
.nuxt-content p{
  margin-left: 1rem;
  padding: 0.5rem;
}
.nuxt-content li{
  margin-left: 1rem;
  font-size: 1rem;
  padding: 0.5rem;
  font-style: italic;
  list-style:decimal ;
}
.nuxt-content ol{
  margin-left: 1rem;
  font-size: 1rem;
}
</style>