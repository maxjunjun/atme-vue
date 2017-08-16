const Edit = r => require.ensure([], () => r(require('./edit')), 'demo')
const List = r => require.ensure([], () => r(require('./list')), 'demo')

export default {
  Edit,
  List
}
