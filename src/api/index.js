/**
 * Created by Clovin on 26/12/2017.
 */

import axios from 'axios'
import {getDomain} from 'create-api'

const domain = getDomain()

export function fetchWorkList () {
  return axios.get(domain + '/api/workList').then(res => res.data)
}