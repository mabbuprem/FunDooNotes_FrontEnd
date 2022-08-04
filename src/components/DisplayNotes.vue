<template>
    <div class="CreateNew" style="display:flex;flex-direction:row; justify-content: space-between;flex-wrap:wrap; ">
        <div style="width:240px;height:200px; margin:5px;border:1px solid black;" v-for=" note in NoteListArray"
            :key="note.id">
            <div>
                <span>{{ note.title }}</span>
            </div>

            <div>
                <span>{{ note.description }}</span>

            </div>
            <div class="ft">
                <NoteIcons></NoteIcons>
            </div>

        </div>

    </div>

</template>

<script>
import NoteIcons from '@/components/iconNote.vue'

export default {
    name: "DisplayNotes",
    components: { NoteIcons },

    props: ["NoteListArray"],

    data: () => ({}),
};
</script>
<style scoped>
.ft {

    flex-direction: row;



    margin-top: 90px;
}

.CreateNew {
    width: 1000px;
    margin-left: 200px;
    margin-top: 40px;

}

.ic {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-right: 5px;


}
</style>