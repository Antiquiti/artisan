<template>
    <div class="title">
        <h3 v-html="title" class="title text-center" id="custom">{{title}}</h3>
        <p v-html="quote" class="quote--gray text-center">{{quote}}</p>
    </div>
</template>

<script>
export default {
    props: ["title", "quote"]
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/css/title.scss';
</style>