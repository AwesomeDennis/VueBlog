/**
 * Created by Turanto on 2016/12/12.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './../components/back/Login.vue'
import Console from './../components/back/Console.vue'
import Archive from './../components/front/Archive.vue'
import Article from './../components/front/Article.vue'
import Articles from './../components/back/Articles.vue'
import Editor from './../components/back/Editor.vue'

export default new Router({
    routes: [
        {path: '/', component: Login},
        {
            path: '/console',
            component: Console,
            children: [
                {
                    path: '',
                    component: Articles,
                },
                {
                    path: 'articles',
                    component: Articles,
                    name: 'articles'
                },
                {
                    path: 'editor',
                    component: Editor,
                    name: 'editor'
                }
            ]
        },
        {path: '/archive', component: Archive},
        {path: '/article', component: Article}
    ]
})