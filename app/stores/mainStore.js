import alt from '../alt'
import mainActions from '../actions/mainActions'

class mainStore {
    constructor() {
        this.bindActions(mainActions)

        this.posts = []
    }

    onNewPost(newPost) {

    }

    onPosts(posts) {
        this.posts = posts
    }
}

export default alt.createStore(mainStore)
