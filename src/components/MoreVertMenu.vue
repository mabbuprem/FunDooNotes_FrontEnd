<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div style="margin-top:4px;">  
        <v-img
          style="width:20px" class="ic" :src="require('../components/icons/more_vert.svg')"
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >
          <!-- <img style="width:20px" class="ic" :src="require('../components/Icons/more_vert.svg')" /> -->
        </v-img>
        </div>
      </template>
      <v-list>
        <div v-for="(noteId, i) in items" :key="i">
        <v-list-item>      
          <v-list-item-title @click="deleteNote()">Delete Note </v-list-item-title>
       
          
        </v-list-item>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import { DeleteNotes } from '@/services/NoteService';
  export default {
     data: () => ({
      items: [
        { title: 'Delete Note' },
        { title: 'Add Label' },
        { title: 'Add Drawing' },
         { title: 'Make a copy' },
         { title: 'Show CheckBox' },
         { title: 'Copy to Google Docs' },
      ],
    }),
    props:{
      noteId:Number
      
    },
   methods: {
        deleteNote() {
            console.log("calling delete function");
            console.log(this.noteId)

            let reqData = {
                 id: this.noteId
            }
            console.log(reqData)
            DeleteNotes(reqData).then((responce) => {
                console.log(responce);
            }).catch((error) => {
                console.log(error);
            })
        }
  }
  }
</script>