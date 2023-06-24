<script>
import {reactive} from "vue";

export default {
  setup() {
    const data = reactive({merchantList: undefined})

    return {
      data
    }
  },
  methods: {
    history_to_merchant_detail(){
      this.$router.push({
        name: 'delivery-goods-add2modify-merchant'
      })
    }
  },
  mounted() { // /delivery/get-merchant-list
    this.$fetchWithIpPort('/delivery/get-merchant-list')
        .then(res => res.json())
        .then((res) => {
          this.data.merchantList = res.data
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <h5>供货商列表</h5>
  <div>
    <div class="card">
      <div class="container px-4 text-center">
        <div class="row">
          <div class="col-9">
            <div class="p-3">
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                <button class="btn btn-outline-secondary" type="button">搜索</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3">
              <button class="btn btn-outline-secondary" type="button">新建供货商</button>
            </div>
          </div>
        </div>
      </div>

      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>供货商</th>
          <th>地址</th>
          <th>联系人</th>
          <th>联系方式</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(merchant, index) of this?.data.merchantList" class="table-primary" :key="merchant.id">
          <td v-text="index + 1"></td>
          <td>{{ merchant.merchantName }}</td>
          <td>{{ merchant.address }}</td>
          <td>{{ merchant.contact }}</td>
          <td>{{ merchant.phone }}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary" @click="history_to_merchant_detail">详细信息
              </button>
              <button type="button" class="btn btn-outline-primary">删除</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

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