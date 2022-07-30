<template>
  <div class="home">
    <Dashbord></Dashbord>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashbord from '@/components/DashbordBar.vue'
export default {
  name: 'DashbordUI',
  components: {
    Dashbord
  }
}
</script>