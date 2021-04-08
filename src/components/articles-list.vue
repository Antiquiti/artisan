<template>
    
    <div class="row justify-content-center" id="gallery">

        <div class="col-md-4 col__offset">         
            <Article v-bind:key="article.id" v-for="article in oddArticles" v-bind:article="article" />
        </div>

        <div class="col-md-4"> 
            <Article v-bind:key="article.id" v-for="article in evenArticles" v-bind:article="article" />
        </div>      
    </div>

</template>

<script>
import Article from './article.vue'

export default {
    props: ["oddArticles", "evenArticles"],
    components: {
        Article
    }

}
</script>

<style lang="scss">
@import '~@/assets/css/articles-list.scss';
</style>