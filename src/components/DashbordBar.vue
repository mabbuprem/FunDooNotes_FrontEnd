<template>
    <div>
        <v-card class="navigation_bar">
            <v-app-bar >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <img class="mr-3" :src="require('../assets/keep_logo.png')" height="35" />
                <v-toolbar-title>Fundoo</v-toolbar-title>
                <v-spacer>
                </v-spacer>
                <v-col cols="7">
                    <v-text-field @click="Search()" solo label="Search" prepend-inner-icon="mdi-magnify" hide-details ></v-text-field>
                </v-col>

                <v-spacer>
                    <div class="right_side_logos">
                        <img style="margin-right: 30px" class="ma-3" :src="require('../assets/refresh.svg')" />
                        <img style="margin-right: 30px" class="ma-3" :src="require('../assets/view.svg')" />
                        <img style="margin-right: 30px" class="ma-3" :src="require('../assets/Setting.svg')" />
                    </div>
                </v-spacer>
                <div class="right_logos">
                    <v-spacer>
                        <img style="width:30px" class="ma-3" :src="require('../assets/apps.svg')" />
                    </v-spacer>
                </div>
                <div>
                    <v-spacer>

                        <img style="width:30px" class="ma-3" :src="require('../assets/account_circle.svg')" />

                    </v-spacer>
                </div>

            </v-app-bar>
        </v-card>
        <v-divider />
        <v-row>
            <v-col cols="12" md="2">
                <v-card class="ml-0 pl-2" height="296" width="" flat tile>
                    <v-navigation-drawer v-model="drawer" absolute elevation=0>
                        <v-list dense nav>
                            <v-list-item-group tile flat>
                                <v-list-item color="yellow darken-2">
                                    <v-icon class="ml-2 mr-6">mdi-lightbulb</v-icon>
                                    <v-list-item-title  @click="getnotes()">Notes</v-list-item-title>
                                </v-list-item>

                                <v-list-item color="yellow darken-2">
                                    <v-icon class="ml-2 mr-6">mdi-bell-outline</v-icon>
                                    <v-list-item-title>Reminders</v-list-item-title>
                                </v-list-item>

                                <v-list-item color="yellow darken-2">
                                    <v-icon class="ml-2 mr-6">mdi-pencil</v-icon>
                                    <v-list-item-title>Edit lables</v-list-item-title>
                                </v-list-item>

                                <v-list-item color="yellow darken-2">
                                    <v-icon class="ml-2 mr-6">mdi-package-down</v-icon>
                                    <v-list-item-title @click="getallarchivenote()">Archive</v-list-item-title>
                                </v-list-item>

                                <v-list-item color="yellow darken-2">
                                    <v-icon class="ml-2 mr-6">mdi-delete</v-icon>
                                    <v-list-item-title @click="Trash()">Trash</v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-navigation-drawer>
                    <v-content>
                        <router-view></router-view>
                    </v-content>
                    <div></div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
   import {getAllTrashedNotes} from '@/services/NoteService';
  import { getallarchiveNoteById } from '@/services/NoteService';
  import { searchNotes } from '@/services/NoteService';
   import { GetAllNotes } from '@/services/NoteService';

export default {
    name: "DashbordUI",
    data: () => ({
        drawer: false,
        group: null,
        id: '',
         search: '',
        NotesArray: []
    }),
     props: {
        
       noteId:Number
    },

    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
       Trash() {
            console.log("calling Trash function");
            //  console.log(this.noteId)

            getAllTrashedNotes().then((responce) => {
                console.log(responce);
                this.NotesArray = responce.data.notes 
            }).catch((error) => {
                console.log(error);
            })
        
        },
        getallarchivenote() {
            console.log("calling getallarchive notes");
            //  console.log(this.noteId)

            getallarchiveNoteById().then((responce) => {
                console.log(responce);
                this.NotesArray = responce.data.notes 
            }).catch((error) => {
                console.log(error);
            })
        },
        Search() {
            console.log("calling search function");
            // console.log(this.search)
            let reqData = {
                 search: this.search
            }
            console.log(reqData)
            searchNotes(reqData).then((responce) => {
                console.log(responce);
            }).catch((error) => {
                console.log(error);
            })
        },
        getnotes() {
            console.log('GetAllNotes called')
            GetAllNotes().then((responce) => {
                console.log(responce);
                //  this.NotesArrayfilterlist = responce.data.notes
                let bigCities = responce.data.notes.filter(function (e) {
                    return e.archive != 1;
                });
                console.log(bigCities);
                this.NotesArray = bigCities
                //  console.log(this.NotesArray)
                this.NotesArray.reverse()
            }).catch((error) => {
                console.log(error);
            })
    },
}
}
    

     

    


      
    
 
</script>
<style scoped>
.navigation_bar {
    margin: 0;
    padding: 0;
    width: 1269px;
    height: 65px;
}

.v-text-field {
    width: 650px;
}

.right_side_logos {
    display: flex;
    flex-direction: row;
    left: 50%;
}

.v-list-item-title {
    color: #202124 !important;
    font-family: 'Roboto', sans-serif !important;
}

.CreateNew {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
}

.right_logos {
    width: 70px;
    display: flex;
    flex-direction: row;
    left: 100%;
}

.main_bpx {
    padding: 0;
    margin: 0;
}

.note {
    width: 1000px;
    /* padding-bottom: 100px;
     padding-right: 100px;
    padding-left: 100px;  */
    padding-top: 100px;
}
</style>