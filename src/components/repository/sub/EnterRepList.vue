<script>
import {reactive} from "vue";

export default {
  setup() {
    const data = reactive({repRequestEnterList: undefined})

    return {
      data
    }
  },
  methods: {
    setEnterRep(index) {
      // 执行入库的代码操作
      this.$swal.fire({
        title: `下标 ${index} 入库成功`,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat`
      })
    },
    history_to_enter_rep_detail(index){
      this.$router.push({
        name: "rep-request-enter-detail"
      });
    }
  },
  mounted() {
    this.$fetchWithIpPort('/repository/get-rep-request-enter-list')
        .then(res => res.json())
        .then((res) => {
          this.data.repRequestEnterList = res.data
          console.log(res.data)
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <h5>入库列表</h5>

  <div class="input-group mb-3">
    <datalist id="class1">
      <option>1</option>
      <option>11</option>
      <option>111</option>
      <option>1111</option>
    </datalist>
    <span class="input-group-text" id="basic-addon1">选择补货日期</span>
    <input type="date" class="form-control" placeholder="Username" aria-label="Username"
           aria-describedby="basic-addon1">

    <span style="margin: 0 20px 0 20px"></span>
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
           aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">查询</button>
  </div>

  <!-- 展示数据的table -->
  <table class="table">
    <thead class="table-secondary">
    <tr>
      <th>序号</th>
      <th>所属订单号</th>
      <th>补货请求号</th>
      <th>请求状态</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(repRequest, index) of this.data.repRequestEnterList" class="table-primary" :key="repRequest.id">
      <td v-text="index + 1"></td>
      <td>{{ repRequest.orderId }}</td>
      <td>{{ repRequest.lackId }}</td>
      <td>{{ repRequest.requestStatus }}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary" @click="history_to_enter_rep_detail(index)">查看详情</button>
          <button type="button" class="btn btn-outline-primary" @click="setEnterRep(index)">入库</button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>

  <!-- 分页 -->
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link">1</a></li>
      <li class="page-item"><a class="page-link">2</a></li>
      <li class="page-item"><a class="page-link">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>