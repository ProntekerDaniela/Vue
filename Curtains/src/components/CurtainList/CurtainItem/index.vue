<template>
    <div class="curtain">
        <div>{{curtain.firm}} | {{curtain.material}} | {{curtain.width_length}}| {{curtain.price}} </div>
    </div>
</template>

<script>
    export default {
        name: 'CurtainItem',
        props: {
           curtain: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="css" scoped>
.curtain {
    width: 400px;
    color: black;
    border: 2px solid RosyBrown;
    margin: 3px;
    border-radius: 4px;
}
</style>