<!-- <template>
    <div class="CreateNew" style="display:flex;flex-direction:row; justify-content: space-between;flex-wrap:wrap; ">
        <div style="width:240px;height:200px; margin:5px;" v-for=" note in NoteListArray" :key="note.id">
            <v-hover v-slot="{ hover }">
                <v-card @click.stop="note.dialog = true" :class="{ 'on-hover': hover }">
                    <div>
                        <span>{{ note.title }}</span>

                    </div>
                    <div>
                        <span>{{ note.description }}</span>

                    </div>
                    <DialogueNote ref="dialog" :transaction="note"></DialogueNote>
                    <div class="ft">
                        <NoteIcons></NoteIcons>
                    </div>
                </v-card>
            </v-hover>

        </div>

    </div>

</template> -->


<template v-slot:activator="{on, attrs }">

    <div class="CreateNew" style="display:flex;flex-direction:row; justify-content: space-between;flex-wrap:wrap; ">
        <div style="width:240px;height:200px; margin:5px;border:1px solid black;" v-for=" note in NoteListArray"
            :key="note.id">
            <v-card>
                <div @click="setNotedata(note)" @click.stop="showScheduleForm = true">
                    <span>{{ note.title }}</span>

                </div>
                <div @click="setNotedata(note)" @click.stop="showScheduleForm = true" >
                    <span>{{ note.description }}</span>

                </div>
                <!-- <div>
                    {{note.id}}
                </div> -->
                <div class="ft">
                    <NoteIcons></NoteIcons>
                </div>
            </v-card>
            

        </div>
         <DialogueNote v-bind:NoteData="noteInfo" v-model="showScheduleForm"></DialogueNote>
    </div>
</template>
<script>
import DialogueNote from '@/components/UpdateNotes.vue'
import NoteIcons from '@/components/iconNote.vue'

export default {
    name: "DisplayNotes",
    components: { NoteIcons, DialogueNote },
    props: ["NoteListArray"],
    data() {
        return {
            showScheduleForm: false,
            noteInfo: "",
            

        };
    },
    methods: {
        setNotedata(noteObject) {
            console.log(noteObject)
            this.noteInfo = noteObject;
        }
    }
};

</script>
<style scoped>
.ft {
    /* display: flex; */

    /* flex-direction: row; */

    margin-top: 135px;
    /* margin-top: 50px; */
}

.CreateNew {
    width: 1000px;
    margin-left: 250px;
    margin-top: 40px;
    text-align: left;

}

.ic {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-right: 5px;
    margin-top: 48px;


}

.Display_note_box {
    padding: 10px 65px 10px 65px;
}
</style>