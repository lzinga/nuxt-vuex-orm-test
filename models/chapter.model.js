import { Model } from '@vuex-orm/core'
import Scene from '@/models/scene.model'

export default class Chapter extends Model {
    static entity = "chapters"

    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(''),
            scenes: this.hasMany(Scene, 'chapter_id')
        }
    }
}