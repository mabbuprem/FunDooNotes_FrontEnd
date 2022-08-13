<template>
    <div class="ic" style="margin right:10px">
        <img class="ic" style="width:15px" :src="require('../components/icons/add_alert.svg')" />
        <img style="width:15px" class="ic" :src="require('../components/icons/person_add.svg')" />
        <img style="width:15px" class="ic" :src="require('../components/icons/palette.svg')" />
        <img style="width:15px" margin-right:20px class="ic" :src="require('../components/icons/image.svg')" />
        <img style="width:15px" class="ic" :src="require('../components/icons/archive.svg')" />
        <img style="width:15px" class="ic" :src="require('../components/icons/more_vert.svg')" />
    </div>
</template>

<script>
export default {
    name: "NoteIcons",

}

</script>

<style scoped>
.ic{
 display: flex;
flex-direction: row;
justify-content: space-between;
border-radius: 50%;

margin-right: 20px;
/* margin-bottom: 10px; */
/* margin-top: -5px; */
gap:3px;

}
</style>
