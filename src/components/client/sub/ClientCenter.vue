<script>
import {reactive} from "vue";

export default {
  setup() {
    let client_info_list = reactive([])
    return {
      client_info_list
    }
  },
  methods: {
    history_to_modify(){
      this.$router.push({
        path: "/nav/client-home/client-add2modify",
        query:{
          is_add: false
        }
      });
    },
    history_to_orders(clientName){
      this.$router.push({
        path: "/nav/client-home/client-orders",
        query:{
          clientName: clientName
        }
      });
    }
  },
  created() {

  },
  beforeUpdate() {

  },
  mounted() {
    this.$fetchWithIpPort('/client/get-client')
        .then(res => res.json())
        .then((res) => {
          this.client_info_list.push(...res.data)
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <div>
    <!--  搜索  -->
    <div class="input-group con" style="margin: 40px 0 40px 0">
      <input type="text" class="form-control" placeholder="Recipient's username"
             aria-label="Recipient's username with two button addons">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          搜索条件
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">姓名</a></li>
          <li><a class="dropdown-item" href="#">电话</a></li>
          <li><a class="dropdown-item" href="#">邮箱</a></li>
        </ul>
      </div>
      <button class="btn btn-outline-secondary" type="button">搜索</button>
    </div>
    <!-- 展示数据的table -->
    <table class="table">
      <thead class="table-secondary">
      <tr>
        <th>序号</th>
        <th>客户姓名</th>
        <th>身份证号码</th>
        <th>电话号码</th>
        <th>地址</th>
        <th>邮箱</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(client, index) of this.client_info_list" class="table-primary" :key="client.id">
        <td v-text="index + 1"></td>
        <td>{{ client.name }}</td>
        <td>{{ client.id }}</td>
        <td>{{ client.phone }}</td>
        <td>{{ client.address }}</td>
        <td>{{ client.email }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" @click="history_to_orders(client.name)">查看订单</button>
            <button type="button" class="btn btn-outline-primary" @click="history_to_modify">修改</button>
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