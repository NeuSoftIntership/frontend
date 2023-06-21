<script>
import {reactive} from "vue";

export default {
  setup() {
    const data = reactive({repGoodsList: undefined})

    return {
      data
    }
  },
  methods:{
    async setSafeCount(index) {
      const {value: text} = await this.$swal.fire({
        title: '输入安全值',
        input: 'text',
        inputLabel: '安全数量',
        inputPlaceholder: '输入安全数量'
      })
      if (text) {
        try{
          this.data.repGoodsList[index].safeCount = parseInt(text)
        }catch (e) {
          this.$swal.fire('请输入一个有效的数字')
        }
        this.$swal.fire(`Entered count: ${text}`)
      }
    },
    async setWarnCount(index){
      const {value: text} = await this.$swal.fire({
        title: '输入预警值',
        input: 'text',
        inputLabel: '预警数量',
        inputPlaceholder: '输入预警数量'
      })
      if (text) {
        try{
          this.data.repGoodsList[index].warnCount = parseInt(text)
        }catch (e){
          this.$swal.fire('请输入一个有效的数字')
        }
        this.$swal.fire(`Entered count: ${text}`)
      }
    }
  },
  mounted() {
    this.$fetchWithIpPort('/repository/get-rep-goods-list')
        .then(res => res.json())
        .then((res) => {
          this.data.repGoodsList = res.data
          console.log(res.data)
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <div class="input-group mb-3">
    <datalist id="class1">
      <option>1</option>
      <option>11</option>
      <option>111</option>
      <option>1111</option>
    </datalist>
    <span class="input-group-text" id="basic-addon1">一级分类</span>
    <input type="text" class="form-control" list="class1" placeholder="Username" aria-label="Username"
           aria-describedby="basic-addon1">

    <datalist id="class2">
      <option>2</option>
      <option>22</option>
      <option>222</option>
      <option>2222</option>
    </datalist>
    <span class="input-group-text" id="basic-addon2">二级分类</span>
    <input type="text" class="form-control" list="class2" placeholder="Username" aria-label="Username"
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
      <th>商品名</th>
      <th>商品数量</th>
      <th>商品预警值</th>
      <th>商品安全数量</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(goods, index) of this.data.repGoodsList" class="table-primary" :key="goods.id">
      <td v-text="index + 1"></td>
      <td>{{ goods.goodsName }}</td>
      <td>{{ goods.count }}</td>
      <td>{{ goods.warnCount }}</td>
      <td>{{ goods.safeCount }}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary" @click="setWarnCount(index)">设置预警数量</button>
          <button type="button" class="btn btn-outline-primary" @click="setSafeCount(index)">设置安全数量</button>
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