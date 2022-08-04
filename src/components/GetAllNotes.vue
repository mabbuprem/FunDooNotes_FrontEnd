<template>
    <div>
        <div>
            <CreateNotes></CreateNotes>
            <DisplayNotes v-bind:NoteListArray="NotesArray"></DisplayNotes>

        </div>
    </div>


</template>

<script>

import CreateNotes from "@/components/CreateNotes.vue";
import DisplayNotes from "@/components/DisplayNotes.vue";
import { GetAllNotes } from '../services/NoteService'

export default {
    name: "GetAllNotes",
    components: {
        CreateNotes,
        DisplayNotes
    },
    data() {
        return {
            NotesArray: []
        }
    },
    methods: {
        GetAllListNotes() {
            console.log('GetAllNotes called')
            GetAllNotes().then((responce) => {
                console.log(responce);
                this.NotesArray = responce.data.notes
                console.log(this.NotesArray)
            }).catch((error) => {
                console.log(error);
            })
        },
       
    },
     mounted() {
            this.GetAllListNotes()
        }
}






</script>
