<template>
    
    <article class="article">
        <img v-if="article.image" class="img-fluid" alt="House example" :src="article.image">
        <h2 v-html="article.heading" class="article__heading">{{article.heading}}</h2>
        <p v-html="article.description" class="article__description">{{article.description}}</p>
    </article>

</template>

<script>
export default {
    props: ["article"]
}
</script>

<style lang="scss">
@import '~@/assets/css/article.scss';
</style>