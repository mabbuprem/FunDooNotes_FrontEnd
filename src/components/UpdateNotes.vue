<template>
    <v-dialog v-model="show" max-width="500px">
        <v-card style="height: 180px">
            <div style="text-align: left; padding-left: 20px;">
                {{ NoteData.title }}
                <input type="text"  v-model="title" />
            </div>
            <div style="text-align: left; padding-left: 20px;">
                {{ NoteData.description  }}
                <input type="text" v-model="description" />
            </div>
            <div class="iconns">
                <NoteIcons v-bind:NoteObject="NoteData">
                </NoteIcons>
            </div>
            <div class="btn_in_update">
                <v-card-actions>
                    <v-btn color="solid" @click.stop="show = false" @click="submit">Close</v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { UpdateNotes } from '../services/NoteService'
import NoteIcons from '@/components/iconNote.vue'
export default {
    name: 'DialogueNote',
    components: {
        NoteIcons
    },
    data() {
        return {

            dialog: false,
            title: '',
            description: '',
            id: ''
        }
    },
    props: {
        value: Boolean,
        NoteData: {},
    },
    methods: {
        submit() {
            console.log("calling submit function");

            console.log(this.title)
            console.log(this.description)
            console.log(this.id)

            let reqData = {
                title: this.title,
                description: this.description,
                id: this.NoteData.id

            }

            console.log(reqData)
            UpdateNotes(reqData).then((responce) => {
                console.log(responce);


            }).catch((error) => {
                console.log(error);
            })
        }
    },
    computed: {
        show: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value)
            },
        },

    },
    title: {
        get() {
            return this.NoteData.title;
        },
        set(value) {
            this.$emit("input", value);
        }

    },
    description: {
        get() {
            return this.NoteData.Descreption;
        },
        set(value) {
            this.$emit("input", value);
        }
    },

}
</script>

<style scoped>
.btn_in_update {
    padding-left: 400px;
    margin-top: -50px;

}

.iconns {
    display: flex;
    flex-direction: row;
    gap: 18px;
    /* margin-right: 25px; */
    padding-top: 65px;
    padding-left: 5px;
    padding-bottom: 10px;
    margin-top: 2px;
}

.description_txt {
    margin-left: -160px;
}

.title_text {
    margin-left: -160px;
    padding-top: 10px;
}
</style>