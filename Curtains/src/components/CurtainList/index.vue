<template>
    <div class="curtainList">
        <curtain-item v-for="curtain in getCurtainList" :key="curtain.id"
            :curtain="curtain"
        />
    </div>
</template>

<script>
import CurtainItem from "./CurtainItem";
import { mapGetters } from "vuex"
    export default {
        name: 'CurtainList',
        components: {
            CurtainItem
        },
        computed: {
            ...mapGetters(['getCurtainList'])
        },
    }
</script>

<style lang="css" scoped>
.curtainList {
    margin-left: 550px;
}
</style>