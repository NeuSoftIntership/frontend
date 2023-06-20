<script>
import {reactive} from "vue";

export default {
  setup(){
    const data  = reactive({courierList: undefined})

    return {
      data
    }
  },
  methods:{
    history_to_courier_add2modify(){
      this.$router.push({
        name: "allot-courier-add2modify",
      });
    },
  },
  mounted() { //
    this.$fetchWithIpPort('/allot/get-allot-courier-list')
        .then(res => res.json())
        .then((res) => {
          this.data.courierList = res.data
          console.log(res.data)
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <h6>配送员列表</h6>
  <div style="height: 100%">
    <!--  搜索  -->
    <div class="input-group con" style="margin: 40px 0 40px 0">
      <input type="text" class="form-control" placeholder="Recipient's username"
             aria-label="Recipient's username with two button addons">
      <button class="btn btn-outline-secondary" type="button">搜索</button>
      <button class="btn btn-outline-secondary" type="button" @click="history_to_courier_add2modify">新建配送员</button>
    </div>
    <!-- 展示数据的table -->
    <table class="table">
      <thead class="table-secondary">
      <tr>
        <th>序号</th>
        <th>配送员ID</th>
        <th>电话号码</th>
        <th>分站</th>
        <th>姓名</th>
        <th>入职时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(courier, index) of this.data.courierList" class="table-primary" :key="courier.id">
        <td v-text="index + 1"></td>
        <td>{{ courier.id }}</td>
        <td>{{ courier.phone }}</td>
        <td>{{ courier.allot }}</td>
        <td>{{ courier.name }}</td>
        <td>{{ courier.enrollTime }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" @click="history_to_courier_add2modify">修改</button>
            <button type="button" class="btn btn-outline-primary">删除</button>
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
  </div>
</template>

<style scoped>

</style>