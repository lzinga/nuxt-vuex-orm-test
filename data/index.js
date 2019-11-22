// Emulating todo records which should be returned from API backend
// in the real world.
export default async function data () {
  return [
    {
      id: 1,
      title: 'Create awesome application!',
      scenes: [{ id: 3, name: 'Scene 1' }, { id: 4, name: 'Scene 2' }]
    },
    {
      id: 2,
      title: 'Create awesome application!',
        scenes: [{ id: 5, name: 'Scene 1' }]
    },
    {
      id: 3,
      title: 'Create awesome application!',
      scenes: []
    }
  ]
}