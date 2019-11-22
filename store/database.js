import VuexORM from '@vuex-orm/core'
import Chapter from '@/models/chapter.model'
import Scene from '@/models/scene.model'

const database = new VuexORM.Database()
database.register(Chapter)
database.register(Scene)

export const plugins = [
  VuexORM.install(database)
]