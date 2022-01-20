<template>
    <div>
        <h1>{{hello}}</h1>

        <button @click="del()">------</button>
        <h1>{{$store.state.mm.number}}</h1>
        <button @click="add()">++++++</button>
        <h1>{{num}}</h1>
        <div>{{$store.getters['mm/getNum']}}</div>


    </div>
</template>
<script>
    export default {
        name: 'mm',
        data () {
            return {
                hello: 'hello MM',
                num: 0,
            }
        },
        methods: {
            del(){ 
                this.$store.commit('mm/SUB')
                this.num--
            },
            add() {
                this.$store.commit('mm/ADD',{num:5})
                this.num++
                this.$store.dispatch('mm/asyncADD',{num:5})
            }
        },

        created() {
            console.log(this.$store)
        }
    }
</script>

<style lang='less'>
</style>