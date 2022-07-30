<template>
  <div class="home">
    <NavidationBar></NavidationBar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavidationBar from '@/components/Navigation.vue'
export default {
  name: 'NavidationUI',
  components: {
    NavidationBar
  }
}
</script>