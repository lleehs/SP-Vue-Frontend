import accountModule from '@/account/store/accountModule'
import authenticationModule from '@/authentication/store/authenticationModule'
import travelModule from '@/travel/store/travelModule'
import travelBoardModule from '@/travel_board/store/travelBoardModule'
import { createStore } from 'vuex'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    travelModule,
    travelBoardModule,
    authenticationModule,
    accountModule,
  }
})
