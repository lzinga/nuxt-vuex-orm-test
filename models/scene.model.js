import { Model } from '@vuex-orm/core'

export default class Scene extends Model {
    static entity = "scenes"

    static fields() {
        return {
            id: this.attr(null),
            chapter_id: this.attr(null),
            name: this.attr(''),
            text: this.attr('')
        }
    }
}