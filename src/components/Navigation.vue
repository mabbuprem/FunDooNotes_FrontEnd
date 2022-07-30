<template>
    <div class="page-container">
        <v-app>
            <v-app-toolbar class="v-primary" v-elevation="0">
                <v-button class="v-icon-button" @click="toggleMenu" v-if="!menuVisible">
                </v-button>
            </v-app-toolbar>


            <v-app-drawer :v-active.sync="menuVisible" v-persistent="mini">

                <v-toolbar class="v-transparent" v-elevation="0">
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <img class="mr-3" :src="require('../assets/keep_logo.png')" height="35" />
                    <v-toolbar-title>Fundoo</v-toolbar-title>

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

                </v-toolbar>

                <v-col cols="12" md="2">
                    <v-list dense nav>
                        <v-list-item-group tile flat>
                            <v-list-item color="yellow darken-2">
                                <v-icon class="ml-2 mr-6">mdi-lightbulb</v-icon>
                                <v-list-item-title>Notes</v-list-item-title>

                            </v-list-item>

                            <v-list-item color="yellow darken-2">
                                <v-icon class="ml-2 mr-6">mdi-bell-outline</v-icon>

                            </v-list-item>

                            <v-list-item color="yellow darken-2">
                                <v-icon class="ml-2 mr-6">mdi-pencil</v-icon>

                            </v-list-item>

                            <v-list-item color="yellow darken-2">
                                <v-icon class="ml-2 mr-6">mdi-package-down</v-icon>

                            </v-list-item>

                            <v-list-item color="yellow darken-2">
                                <v-icon class="ml-2 mr-6">mdi-delete</v-icon>

                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>

            </v-app-drawer>


            <v-app-content>
            </v-app-content>

        </v-app>


    </div>
</template>

<script>
export default {
    name: 'PersistentMini',
    data: () => ({
        drawer: false
    }),
    methods: {
        toggleMenu() {
            this.drawer = false
        }
    }
}
</script>

<style lang="scss" scoped>
.v-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
}

// Demo purposes only
.v-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
}
</style>