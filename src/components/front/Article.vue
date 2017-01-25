<template>
    <main class="wrap">
        <my-header></my-header>
        <section class="article">
            <article class="block">
                <div class="title">{{article.title}}</div>
                <div class="info">{{article.date|toDate}}</div>
                <div class="content" v-html="article.content"></div>
            </article>
        </section>
    </main>
</template>
<script>
    import {mapState} from 'vuex'
    import marked from './../../assets/js/marked.min.js'
    import MyHeader from './MyHeader.vue'
    import MyFooter from './MyFooter.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        /*watch:{
            '$route':['fetchData']
        },*/
        methods: {
            fetchData(){
                this.$store.dispatch('getArticle',this.$route.query.id)
            }
        },
        created(){
            this.fetchData()
        },
        computed:mapState({
            article:state=>{
                state.article.content=marked(state.article.content||'')
                return state.article
            }
        }),
        components:{
            MyHeader,MyFooter
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss">
    @import "../../style/variables";
    .wrap {
        min-height: 100%;
        position: relative;
    }
    section.article {
        line-height: 1.6;
        padding-bottom: 160px;
        article {
            .title {
                margin: 0.65em 0;
                font-size: 1.5em;
            }
            .info {
                color: #7f8c8d;
                margin: 1.2em 0;
                span{
                    margin-left: 0.5rem;
                }
            }
            .content {
                h2, h3, h4, h5, h6 {
                    position: relative;
                    margin: 1em 0;
                    &:before {
                        content: "#";
                        color: $green1;
                    }
                }
            }
        }
    }
</style>