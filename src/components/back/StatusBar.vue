<template>
    <header class="statusBar">
        <router-link :to="{path:'/archive'}" tag="button" class="home">
            <i class="fa fa-fire fa-2x"></i>
        </router-link>
    </header>
    <div class="user">
        <span>

        </span>
        <button>
            <span></span>
            <i class="fa fa-sign-out"></i>
        </button>
    </div>
</template>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
<style>

</style>
