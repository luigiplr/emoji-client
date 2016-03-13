import _ from 'lodash'
import emojis from './emojis'

export default emoji => {
    let emoji_name = false
    _.forEach(emojis, (e, name) => {
        if (e === emoji) emoji_name = name
    })
    return `https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/${emoji_name}.png`
}
