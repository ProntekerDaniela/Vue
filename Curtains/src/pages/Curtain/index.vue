<template>
    <div>
        <h3>Штори</h3>
        <div>
            <label>
                Фірма штор
                <input type="text" v-model="firm">
            </label>
            <br>
            <br>
            <br>
            <label>
                Матеріал
                <input type="text" v-model.number="material">
            </label>
            <br>
            <br>
            <br>
            <label>
                Ширина,довжина
                <input type="text" v-model="width_length">
            </label>
            <br>
            <br>
            <br>
            <label>
                Ціна
                <input type="text" v-model.number="price">
            </label>
        </div>
        <br>
        <button @click="curtaiN">Додати штори</button>
    </div>
</template>
  
<script>
import { mapActions } from "vuex";
    export default {
        name: 'Curtain',
        data() {
            return {
                firm: "Введіть назву",
                material: "Введіть матеріал",
                width_length: "Введіть довжину і ширину",
                price: 0
            }
        },
        methods: {
            ...mapActions(['curtain']),
            curtaiN() {
                this.curtain({
                    firm: this.firm,
                    material: this.material,
                    width_length: this.width_length,
                    price: this.price
                })
                this.$router.push({path:'/'})
            }
        },
    }
</script>

<style lang="css" scoped>
button,label {
    border: 2px solid Maroon;
    background: RosyBrown;
    color: white;
    padding: 15px;
}
</style>

