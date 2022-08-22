<template>
    <div class="main_Note_box">
        <v-container class="CreateNew">
            <v-card v-if="!show" @click="open" elevation="10" class="mx-auto pl-3" height="50" width="800">
                <div class="buttons">
                    <v-text-field placeholder="take a note.." pl-3 v-model="noteDetails.title" solo flat hide-details>
                    </v-text-field>
                    <div class="button"><button class="iconbutton"
                            style="border: none; margin-left: 20px; margin-right: 20px;"><img
                                class="takenoteicons" src='../assets/check_box.svg'></button>
                        <button class="iconbutton" style="border: none; margin-right: 20px"><img class="takenoteicons"
                                src='../assets/brush.svg'>
                        </button>
                        <button class="iconbutton" style="border: none; margin-right: -350px"><img class="takenoteicons"
                                src='../assets/image.svg'>
                        </button>
                    </div>

                </div>
            </v-card>
            <v-card v-if="show">
                <div>
                    <v-text-field placeholder="Title" class="pt-0" v-model="noteDetails.title" solo flat hide-details>
                    
                    </v-text-field>
                    <!-- <div class="pinbutton"><button  style="border: none"><img src='../assets/push_pin.svg'></button></div> -->
                    
                    <v-text-field placeholder="take a note.." class="pt-0" v-model="noteDetails.descreption" solo flat
                        hide-details></v-text-field>
                    <div class="ft">
                        <NoteIcons></NoteIcons>
                        <v-btn class="prem" small color="white" elevation="0" @click="CreateNotes()">close</v-btn>
                    </div>
                </div>
            </v-card>
        </v-container>
    </div>
</template>
<script>
import { CreateNotes } from '../services/NoteService'
import NoteIcons from '@/components/iconNote.vue'
export default {
    name: 'CreatingNotes',
    components: { NoteIcons },

    data() {

        return {
            noteDetails: {
                title: '',
                descreption: '',


                // getAllNotes: ''
            },
            show: false,
        }
    },
    methods: {
        open() {
            this.show = !this.show
        },
        CreateNotes() {
            console.log(this.noteDetails.title)
            console.log(this.noteDetails.descreption)
            //  console.log(this.show)

            let reqData = {
                title: this.noteDetails.title,
                description: this.noteDetails.descreption
            }
            this.show = !this.show

            console.log(reqData)
            CreateNotes(reqData).then((responce) => {
                console.log(responce);

            }).catch((error) => {
                console.log(error);
            })
        }
    },
    



}


</script>

<style scoped>
.main_Note_box {
    display: flex;
    flex-direction: row;
    right: 50px;

    align-items: flex-start;
}

.CN_Functions {
    width: 497px;
    height: 35px;
    padding-top: 2px;
}

.functionity_setup {
    display: flex;


    justify-content: space-between;
    align-items: baseline;
}

.close {
    width: 50px;
    height: 100px;
    padding-top: -50px;
    padding-left: 450px;
    padding-bottom: 100px;
}

.iconbutton {
    /* left: 10px; */
    margin-bottom: 1px;
    /* top: 1000px; */
    margin-top: -100px;
    /* padding-bottom: 30px;  */


}

.takenoteicons {

    width: 25px;
    height: 22px;
    opacity: 0.56;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: row;

    justify-content: center;

}

.ft {
    /* display: flex;
    flex-direction: row;   */
    
     justify-content: space-between; 
      padding-left: 30px; 
    padding-right: 100px; 
    margin-top: -1px;
    margin-right: 10px;
    width:400px;
    

}

.CreateNew {
    width: 550px;
    margin-left: 300px;
    margin-top: 40px;

}

.pinbutton {
     /* display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px; */

}
.button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;

}

.prem{
    margin-left: 280px;
   top:-20px;
}

/* .click{

    margin-top: 0px;
    right: 100px;
    padding-left: 250px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    top:30px;
   
} */
</style>