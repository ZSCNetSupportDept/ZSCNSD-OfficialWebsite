<template>
  <div class="work-list" id="worklist">
    <div class="container">
      <div class="work-list__header">
        <h1>值班表</h1>
        <h2>认准我们的值班人员</h2>
      </div>

      <div class="work-list__content">
        <div class="tabs__header">
          <nav>
            <ul>
              <li v-for="item in data.table">
                <a @click="changeTab(item.title)" class="btn"
                   :class="{ 'active': nowPane === item.title }">{{ item.title }}</a>
              </li>
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

          <p>*投诉电话：<span v-for="tousu in data.tousu">{{ `${tousu.worker} -- ${tousu.phone} `}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'workList',
    props: {
      data: {
        required: true
      }
    },
    data () {
      return {
        nowPane: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][new Date().getDay()]
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
  .work-list {
    margin: 0 0 3rem 0;
  }

  .work-list__header {
    text-align: center;
  }

  .work-list__header h1 {
    margin-bottom: .5rem;
    font-size: 2rem;
    font-weight: 500;
    color: #5e696a;
  }

  .work-list__header h2 {
    margin-bottom: .8rem;
    font-size: .8rem;
    color: #5e696a;
  }

  .tabs__header li {
    display: inline-block;
    margin: 0 .5rem 1rem 0;
  }

  .tabs__content table {
    width: 100%;
    margin-bottom: .5rem;
    text-align: left;
    font-size: 1rem;
    overflow-x: scroll;
  }

  th {
    font-weight: 600;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  th, td {
    padding: .7rem .5rem;
    border: 1px solid #ddd;
  }

  .tabs__content > p {
    text-align: right;
  }
</style>