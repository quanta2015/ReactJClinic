import { observable, action, runInAction } from 'mobx'
import BaseActions from 'service/BaseActions'
import axios from 'axios'
import { message } from 'antd'
import {removeUser} from 'util/token'
import jwt from 'util/token.js'
import {isN} from 'util/fn.js'

const SEASON_KEY = 'ANSSYS_SEASON'


class Main extends BaseActions {
  @observable
  currUser = undefined

  @action
  async post(url, params) {
    return await this.post(url,params)
  }

  @action
  saveUser(u) {
    this.currUser = u
  }


  @action
  async taskProc(params,type) {
    let url
    switch(type) {
      case 0: url = this.URL_TASK_ACCEPT;break;
      case 1: url = this.URL_TASK_FINISH;break;
      case 2: url = this.URL_TASK_SDBACK;break;
      case 3: url = this.URL_TASK_AUDIT ;break;
      case 4: url = this.URL_TASK_ALLOCATE ;break;
      case 5: url = this.URL_TASK_REMIND ;break;
      case 6: url = this.URL_TASK_REPLY ;break;
    }
    Toast.loading('加载中', 0)
    const r = await request(url,params)
    Toast.hide()
    Toast.info('成功！')
    return r
  }


}

export default new Main()