<template>
    <nav class="nav justify-content-center">
        <a v-bind:key="elements.id" v-for="elements in navElements" :href="elements.href" class="nav__anchor">{{elements.text}}</a>
    </nav>
</template>

<script>
export default {
    props:["navElements"]
}
</script>

<style lang="scss">
@import '~@/assets/css/nav.scss';
</style>