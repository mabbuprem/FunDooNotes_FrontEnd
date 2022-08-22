<template>
    <div class="ic" style="margin right:10px">
        <img class="ic" style="width:20px" :src="require('../components/icons/add_alert.svg')" />
        <img style="width:20px" class="ic" :src="require('../components/icons/person_add.svg')" />
        <MoreVertMenuColor v-bind:noteId="NoteObject"></MoreVertMenuColor>
        <!-- <img @click="color()" style="width:15px" class="ic" :src="require('../components/icons/palette.svg')" /> -->
        <img style="width:20px" margin-right:20px class="ic" :src="require('../components/icons/image.svg')" />
        <img @click="ArchiveNotes()" style="width:20px" class="ic" :src="require('../components/icons/archive.svg')" />
        <!-- <img @click="DeleteNotes()" style="width:15px" class="ic" :src="require('../components/icons/more_vert.svg')" /> -->
        <MoreVertMenu v-bind:noteId="NoteObject.id"></MoreVertMenu>
    </div>
</template>

<script>

import MoreVertMenu from './MoreVertMenu.vue'
import { archiveNoteById } from '@/services/NoteService';
import MoreVertMenuColor from './MoreVertMenuColor.vue'
export default {
    name: "NoteIcons",
    components: { MoreVertMenu, MoreVertMenuColor },
    props:
    {
        NoteObject: {},
        colour: [],
        
    },

    //archive method
    methods: {
        ArchiveNotes() {
            console.log("calling archived function");
            console.log(this.NoteObject)

            let reqData = {
                 id: this.NoteObject,
            }
            console.log(  this.NoteObject,)
            archiveNoteById(reqData).then((responce) => {
                console.log(responce);
            }).catch((error) => {
                console.log(error);
            })
        },
    }
}







</script>

<style scoped>
.ic {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
  padding-bottom: 10px;
  padding-top: 5px;
  padding-left: 2px;
  /* width: 20px; */
}
</style>