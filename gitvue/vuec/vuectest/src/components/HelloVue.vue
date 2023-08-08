<template>
    <div>
        <h2>{{ $store.state.count }}</h2>
        <!-- <h2>---------getters相关信息(组件)-------------</h2> -->
        <h2>{{ $store.getters.powerCounter }}</h2>
        <h2>{{ $store.getters.more20stu }}</h2>
        <h2>{{ $store.getters.moreAgestu(12) }}</h2>

    </div>
</template>

<script>
    export default {
        name:"HelloVue",
        // props: {
        //     counter:Number,
        // }
    }
</script>

<style scoped>

</style>

