import PersonalCenter from '@/module/personalCenter/page/personalManage.vue'
import Recharge from '@/module/personalCenter/page/recharge.vue'
import ChargeCard from '@/module/personalCenter/page/chargeCard.vue'
import AddCar from '@/module/personalCenter/page/addCar.vue'
// import Collection from '@/module/personalCenter/page/collection.vue'
import Comment from '@/module/personalCenter/page/comment.vue'
import CustomerService from '@/module/personalCenter/page/customerService.vue'
import Feedback from '@/module/personalCenter/page/feedback.vue'
import Order from '@/module/personalCenter/page/order.vue'
import QuestionAnswer from '@/module/personalCenter/page/questionAnswer.vue'
import Setting from '@/module/personalCenter/page/setting.vue'
import CarInfo from '@/module/personalCenter/page/carInfo.vue'
import FeedbackInfo from '@/module/personalCenter/page/feedbackInfo.vue'


// 导出配置的路由器
export default[{
    path: '/personalCenter',
    name: 'personalCenter',
    component: PersonalCenter
    // children: [
    //   {
    //     path: 'recharge',
    //     name: 'recharge',
    //     component: Recharge
    //   },
    //   {
    //     path: 'chargeCard',
    //     name: 'chargeCard',
    //     component: ChargeCard
    //   },
    //   {
    //     path: 'addCar',
    //     name: 'addCar',
    //     component: AddCar
    //   },
    //   {
    //     path: 'collection',
    //     name: 'collection',
    //     component: Collection
    //   },
    //   {
    //     path: 'comment',
    //     name: 'comment',
    //     component: Comment
    //   },
    //   {
    //     path: 'customerService',
    //     name: 'customerService',
    //     component: CustomerService
    //   },
    //   {
    //     path: 'feedback',
    //     name: 'feedback',
    //     component: Feedback
    //   },
    //   {
    //     path: 'order',
    //     name: 'order',
    //     component: Order
    //   },
    //   {
    //     path: 'questionAnswer',
    //     name: 'questionAnswer',
    //     component: QuestionAnswer
    //   },
    //   {
    //     path: 'setting',
    //     name: 'setting',
    //     component: Setting
    //   }
    // ]
},
  { //充值金额
    path: '/personalCenter/recharge',
    name: 'recharge',
    component: Recharge
  },
  { //充电卡信息
    path: '/personalCenter/chargeCard',
    name: 'chargeCard',
    component: ChargeCard
  },
  {
    path: '/personalCenter/addCar',
    name: 'addCar',
    component: AddCar
  },
  { //评论信息
    path: '/personalCenter/comment',
    name: 'comment',
    component: Comment
  },
  {
    path: '/personalCenter/feedback',
    name: 'feedback',
    component: Feedback
  },
  { //客服信息
    path: '/personalCenter/customerService',
    name: 'customerService',
    component: CustomerService
  },
  { //订单信息
    path: '/personalCenter/order',
    name: 'order',
    component: Order
  },
  { //反馈信息
    path: '/feedbackInfo',
    name: 'feedbackInfo',
    component: FeedbackInfo,
  },
  { //问答信息
    path: '/personalCenter/questionAnswer',
    name: 'questionAnswer',
    component: QuestionAnswer
  },
  { //设置信息
    path: '/personalCenter/setting',
    name: 'setting',
    component: Setting
  },
  { //爱车信息
    path: '/personalCenter/addCar/carInfo',
    name: 'carInfo',
    component: CarInfo
  }
]

