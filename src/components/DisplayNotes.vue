<template v-slot:activator="{on, attrs }">
    <div class="CreateNew" style="
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    ">
        <div style="width: 241px; height: 170px; margin: -1px; border: px solid" v-for="note in NoteListArray"
            :key="note.id">
            <v-card :style="{ 'background-color': note.colour}">
                <div style="padding-left: 15px; padding-top: 5px" :style="{ 'background-color': note.colour}">
                    <div @click="setNotedata(note)" @click.stop="showScheduleForm = true">
                        <span>{{ note.title }}</span>

                        <div @click="setNotedata(note)">
                            <span>{{ note.description }}</span>
                        </div>
                    </div>
                </div>
                <div class="ft">
                    <NoteIcons v-bind:NoteObject="note"></NoteIcons>
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
    flex-direction: row;
    margin-top: 50px;
}

.CreateNew {
    width: 1000px;
    margin-left: 250px;
    margin-top: 50px;
    text-align: left;
}

.icone {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-right: 5px;
}
</style>