import alt from '../alt'
import { sortBy } from 'lodash'
import mainActions from '../actions/mainActions'

class mainStore {
    constructor() {
        this.bindActions(mainActions)

        this.posts = []
    }

    onNewPost(newPost) {
    	this.posts.unshift(newPost)
    }

    onPosts(posts) {
        this.posts = sortBy(posts, 'time').reverse()
    }
}

export default alt.createStore(mainStore)
