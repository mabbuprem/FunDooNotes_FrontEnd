<template>
    <v-dialog v-model="show" max-width="500px">
        <v-card>
            <div>
                <input type="text" v-model="title">
                {{ NoteData.title }}
            </div>
            <div>
                <input type="text" v-model="description">
                {{ NoteData.descreption }}
            </div>
            <div>
                <input type="text" v-model="id">
                {{NoteData.id}}
            </div>
            <v-card-actions>
                <v-btn color="primary" @click.stop="show = false" @click="submit">Close</v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>

<script>
import { UpdateNotes } from '../services/NoteService'
export default {
    name: 'DialogueNote',

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
                id: this.id

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
</style>