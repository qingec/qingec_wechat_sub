import StationDetail from '@/module/stationManage/page/stationDetail.vue'
import PileDetail from '@/module/stationManage/page/pileDetail.vue'
import StationList from '@/module/stationManage/page/stationList.vue'
import TimePackage from '@/module/stationManage/page/timePackage.vue'


// 导出配置的路由器
export default[{
  path: '/stationList',
  name: 'stationList',
  component: StationList
  // children: [
  //   {
  //     path: 'stationDetail',
  //     name: 'stationDetail',
  //     component: StationDetail
  //   }
  //
  // ]
},
  {
    path: '/stationList/stationDetail',
    name: 'stationDetail',
    component: StationDetail
  },
  {
    path: '/stationList/stationDetail/pileDetail',
    name: 'pileDetail',
    component: PileDetail,
  },
  {
    path: '/stationList/stationDetail/timePackage',
    name: 'timePackage',
    component: TimePackage
  }
]

