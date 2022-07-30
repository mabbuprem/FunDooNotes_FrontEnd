<template>
  <div class="home">
    <CreateNotes></CreateNotes>
    <DisplayNotesVue></DisplayNotesVue>
  </div>
</template>

<script>
import DisplayNotesVue from '@/components/DisplayNotes.vue'
// @ is an alias to /src
import CreateNotes from '../components/CreateNotes.vue'
export default {
  name: 'GetNotes',
  components: {
    CreateNotes,
    DisplayNotesVue
  }
}
</script>