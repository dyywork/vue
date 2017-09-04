import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Content from '@/components/common/Content'
import Header from '@/components/common/Header'
import SiderBar from '@/components/common/SiderBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      components: {
        default:Content,
        /*Header:Header,
        SiderBar:SiderBar*/
      },
      children:[{
        path:'/',
        component:resolve => require(['../components/Hello.vue'], resolve)
      },{
        path:'/table',
        component:resolve => require(['../components/tabOne/table.vue'],resolve)
      },{
        path:'/form',
        component:resolve => require(['../components/tabOne/form.vue'],resolve)
      }]
    }
  ]
})
