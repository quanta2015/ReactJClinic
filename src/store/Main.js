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


}

export default new Main()