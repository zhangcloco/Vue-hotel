import App from '../App'

const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
const hotelList = r => require.ensure([], () => r(require('../page/hotelList/hotelList')), 'hotelList')

export default [{
  path: '/',
  component: App, // 顶层路由
  children: [ // 二级路由
    {
      path: '',
      redirect: 'index'
    },
    {
      path: 'index',
      component: index
    },
    {
      path: 'hotelList',
      component: hotelList
    }
  ]
}]
