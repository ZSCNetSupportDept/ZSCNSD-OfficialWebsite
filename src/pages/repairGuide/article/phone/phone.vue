<template>
  <section>
    <h2>电话报修</h2>
    <p>请尽可能按照周内值班时间点负责人进行电话报修,如果联系不上,请联系周内其他负责人</p>
    <div class="table-container">
      <table class="table">
        <thead>
        <tr>
          <th style="text-align: left">值班时间</th>
          <th style="text-align: left">值班人员（单位）</th>
          <th style="text-align: left">联系电话</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td style="text-align: left">工作日</td>
          <td style="text-align: left">信息中心</td>
          <td style="text-align: left">88332760</td>
        </tr>

        <tr v-for="items in workList.table">
          <td style="text-align: left">{{ items.title }}</td>
          <template v-for="item in items.content" v-if="item.place === '值班组长'">
            <td style="text-align: left">{{ item.worker }}</td>
            <td style="text-align: left">{{ item.phone }}</td>
          </template>
        </tr>

        <tr v-for="item in workList.tousu">
          <td style="text-align: left">投诉电话</td>
          <td style="text-align: left">{{ item.worker }}</td>
          <td style="text-align: left">{{ item.phone }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
  import workListModule from '../../../../store/module/home/workList'

  export default {
    asyncData ({ store }) {
      store.registerModule('workList', workListModule)
      return store.dispatch('workList/FETCH_WORK_LIST')
    },
    destroyed () {
      this.$store.unregisterModule('workList')
    },
    computed: {
      workList () {
        return this.$store.state.workList.workList
      }
    }
  }
</script>

<style scoped>

</style>