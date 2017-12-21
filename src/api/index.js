/**
 * Created by Clovin on 20/12/2017.
 */
import axios from 'axios'

export function fetchWorkList () {
  return axios.get('http://localhost:8080/workList').then(res => res.data)
}