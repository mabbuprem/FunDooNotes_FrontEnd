<template>
    <div>
        <v-card class="navigation_bar">
            <v-app-bar color="deep-purple accent-4">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <img class="mr-3" :src="require('../assets/keep_logo.png')" height="35" />
                <v-toolbar-title>Fundoo</v-toolbar-title>
                <v-spacer>
                </v-spacer>
                <v-col cols="7">
                    <v-text-field solo label="Search" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
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
                                    <v-list-item-title>Notes</v-list-item-title>
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
                                    <v-list-item-title>Archive</v-list-item-title>
                                </v-list-item>

                                <v-list-item color="yellow darken-2">
                                    <v-icon class="ml-2 mr-6">mdi-delete</v-icon>
                                    <v-list-item-title>Trash</v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>

                    </v-navigation-drawer>

                    <v-content>
                        <!-- <div class="note">
                            create note
                        </div> -->

                        <router-view></router-view>
                    </v-content>
                    <div></div>
                </v-card>
            </v-col>
        </v-row>

    </div>

</template>

<script>

export default {
    name: "DashbordUI",
    data: () => ({
        drawer: false,
        group: null,
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
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