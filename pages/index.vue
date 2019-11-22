<template>
  <div class="App">
    <AppHeader />
    <AppDescription />
    <div class="container">
      <div class="todos"><AppContent /></div>
    </div>
  </div>
</template>

<script>
import data from '@/data'
import Chapter from '@/models/chapter.model'
import AppHeader from '@/components/AppHeader'
import AppContent from '@/components/AppContent'

export default {
  components: {
    AppHeader,
    AppContent
  },

  async fetch () {
    // Here we are stubbing the initial data. In the real world, this
    // should be the response from the API Backend.
    const initialData = await data()
    Chapter.create({ data: initialData })
  }
}
</script>

<style scoped>
.App {
  padding: 96px 48px 128px;
}

.container {
  display: flex;
  margin: 0 auto;
  width: 960px;
}

.users {
  padding-right: 48px;
  width: calc(100% / 3);
}

.todos {
  width: 100%;
}
</style>
