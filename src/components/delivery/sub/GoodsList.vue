<script>
import {reactive} from "vue";

export default {
  setup(){
    const data = reactive({goodsList: undefined})
    return {
      data
    }
  },
  methods:{
    showGoodsDetail() {
      this.$router.push({
        name: 'delivery-goods-add2modify'
      })
    }
  },
  mounted() {
    this.$fetchWithIpPort('/delivery/get-goods-list')
        .then(res => res.json())
        .then((res) => {
          this.data.goodsList = res.data
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
<h5>商品列表</h5>
  <div >
    <div class="card">
      <div class="container px-4 text-center">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">一级分类</span>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">二级分类</span>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3">
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">查询</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3">
              <button class="btn btn-outline-secondary" type="button">新建商品</button>
            </div>
          </div>
        </div>
      </div>

      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>商品名</th>
          <th>商品代码</th>
          <th>商品价格</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(goods, index) of this.data.goodsList" class="table-primary" :key="goods.id">
          <td v-text="index + 1"></td>
          <td>{{ goods.goodsName }}</td>
          <td>{{ goods.id }}</td>
          <td>{{ goods.price }}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary" @click="showGoodsDetail">详细信息</button>
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