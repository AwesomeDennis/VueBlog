/**
 * Created by Turanto on 2016/12/12.
 */
export default{
    SET_USER: (state, user) => {
        state.user = user
    },
    SET_ARTICLES: (state, articles) => {
        state.articles = articles
    },
    SET_LINKS: (state,links)=>{
        state.links=links
    },
    SET_ARTICLE: (state,article)=>{
        state.article=article
    },
    LOADING_TOGGLE: (state, isLoading) => {
        state.isLoading = isLoading
    },
    SET_TOAST(state, payload){
        state.toast.info = payload.info
        state.toast.btnNum = payload.btnNum
        state.toast.promise = new Promise((resolve, reject) => {
            state.toast.toastResolve=resolve
            state.toast.toastReject=reject
        })
    },
    TOASTING_TOGGLE: (state, isToasting) => {
        state.isToasting = isToasting
    }
}