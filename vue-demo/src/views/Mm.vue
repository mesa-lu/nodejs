<template>
    <div>
        <h1>{{hello}}</h1>

        <button @click="del()">------</button>
        <h1>{{$store.state.number}}</h1>
        <button @click="add()">++++++</button>
        <h1>{{num}}</h1>
        <div>{{$store.getters.getNum}}</div>


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
                this.$store.commit('SUB')
                this.num--
            },
            add() {
                this.$store.commit('ADD')
                this.num++
                this.$store.dispatch('asyncADD')
            }
        }
    }
</script>

<style lang='less'>
</style>