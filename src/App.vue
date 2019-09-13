<template>
  <div>
    app
    {{message}}
  </div>
</template>

<script>
import './style.css'
export default {
  name: 'App',
  data () {
    return {
      message: 'webpack test'
    }
  }
}
</script>

<style scoped>
body, div{
  color: #000; 
}
</style>