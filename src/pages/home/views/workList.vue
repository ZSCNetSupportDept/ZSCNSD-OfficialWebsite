<template>
  <div class="work-list" id="worklist">
    <div class="work-list__header">
      <h1>值班表</h1>
      <h2>认准我们的值班人员</h2>
    </div>
    <div class="work-list__content">
      <div class="tabs__header">
        <nav>
          <ul>
            <li v-for="item in data.table" @click="changeTab(item.title)">{{ item.title }}</li>
          </ul>
        </nav>
      </div>

      <div class="tabs__content">
        <table>
          <thead>
          <tr>
            <th>值班区域</th>
            <th>值班人员</th>
            <th>联系电话</th>
          </tr>
          </thead>

          <tbody v-for="pane in data.table" v-if="pane.title === nowPane">
          <tr v-for="item in pane.content">
            <td>{{ item.place }}</td>
            <td>{{ item.worker }}</td>
            <td>{{ item.phone }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  //  import workListModule from 'src/store/module/home/workList'

  export default {
    name: 'workList',
    props: {
      data: {
        required: true
      }
    },
    data () {
      return {
        nowPane: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][new Date().getDay()]
      }
    },
    methods: {
      changeTab (title) {
        this.nowPane = title
      }
    }
  }
</script>

<style scoped>

</style>