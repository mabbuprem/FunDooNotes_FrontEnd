<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div style="margin-top: 5px">
          <v-img style="width: 20px" class="ic" :src="require('../components/icons/palette.svg')" elevation="0"
            v-bind="attrs" v-on="on">
            <!-- <img style="width:20px" class="ic" :src="require('../components/Icons/palette.svg')" /> -->
          </v-img>
        </div>
      </template>

      <v-list class="bg-color">

        <div v-for="(color, i) in items" :key="i">

          <v-btn class="btnclr" :style="{ 'background-color': color.code }" @click="colourNote(color.code)"></v-btn>
        </div>
      </v-list>
    </v-menu>
  </div>
</template >

<script>
import { colourNoteById } from '@/services/NoteService';

export default {
  data: () => ({
    items: [
      { code: "#ffffff", name: "white" },
      { code: "#FF6347", name: "red" },
      { code: "#FF4500", name: "orange" },
      { code: "#FFFF00", name: "yellow" },
      { code: "#ADFF2F", name: "green" },
      { code: "#43C6DB", name: "teal" },
      { code: "#728FCE", name: "Blue" },
      { code: "#2B65EC", name: "darkblue" },
      { code: "#D16587", name: "purple" },
      { code: "#F9A7B0", name: "pink" },
      { code: "#E2A76F", name: "brown" },
      { code: "#D3D3D3", name: "grey" },
    ],
  }),

  props: {
    noteId: {},
    colour: [],

  },
  methods: {
    colourNote(newcolor) {
      console.log("calling delete function");
      console.log(this.noteId)


      let reqData = {

        id: this.noteId.id,
        colour: newcolor,
      };
      console.log(this.noteId)
      colourNoteById(reqData).then((responce) => {
        console.log(responce);
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>
<style scoped>
.bg-color {
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  flex-flow: row;
}

.btnclr {
 
  border-radius: 100px;
  width: 10px;
 
}

/* .btnclr{
   border-radius: 40%;
   height: 20px;
   width:
  } */
</style>