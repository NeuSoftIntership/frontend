<script>
import {reactive} from "vue";

export default {
  setup() {
    const data = reactive({class1: undefined, class2: undefined})

    return {
      data
    }
  },
  methods:{
    getClazz2ByClass1Id(clazz1Id){
      console.log(clazz1Id)
      this.$fetchWithIpPort(`/delivery/get-class2`)
          .then(res => res.json())
          .then((res) => {
            this.data.class2 = res.data
            console.log(this.data.class2)
          })
          .catch((e) => {
            console.log(e)
          })
    },
    async createClazz1() {
      const {value: email} = await this.$swal.fire({
        title: '新建一级分类',
        input: 'text',
        inputLabel: '分类名',
      })

      if (email) {
        this.$swal.fire(`新建分类: ${email}`)
      }
    },
    async createClazz2() {
      const {value: email} = await this.$swal.fire({
        title: '新建二级分类',
        input: 'text',
        inputLabel: '分类名',
      })

      if (email) {
        this.$swal.fire(`新建分类: ${email}`)
      }
    }
  },
  mounted() {
    this.$fetchWithIpPort('/delivery/get-class1')
        .then(res => res.json())
        .then((res) => {
          this.data.class1 = res.data
        })
        .catch((e) => {
          console.log(e)
        })
    this.$fetchWithIpPort('/delivery/get-class2')
        .then(res => res.json())
        .then((res) => {
          this.data.class2 = res.data
        })
        .catch((e) => {
          console.log(e)
        })
  }
}
</script>

<template>
  <h5>商品类别管理</h5>
  <div class="goods-type-box">
    <!-- 一级分类 -->
    <div>
      <div class="card">
        <!--  搜索  -->
        <div class="input-group con" style="margin: 40px 0 40px 0">
          <input type="text" class="form-control"
                 aria-label="Recipient's username with two button addons">
          <button class="btn btn-outline-secondary" type="button">搜索</button>
          <button class="btn btn-outline-secondary" type="button" @click="createClazz1">新建</button>
        </div>
        <!--展示信息的table-->
        <table class="table table-hover">
          <thead class="table-secondary">
          <tr>
            <th>序号</th>
            <th>类名</th>
            <th>二级分类数量</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(clazz, index) of this.data.class1" class="table-primary" :key="clazz.id" @click="getClazz2ByClass1Id(clazz.id)">
            <td v-text="index + 1"></td>
            <td>{{clazz.name}}</td>
            <td>{{clazz.subCount}}</td>
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
    <!-- 二级分类-->
    <div>
      <div class="card">
        <!--  搜索  -->
        <div class="input-group con" style="margin: 40px 0 40px 0">
          <input type="text" class="form-control"
                 aria-label="Recipient's username with two button addons">
          <button class="btn btn-outline-secondary" type="button">搜索</button>
          <button class="btn btn-outline-secondary" type="button" @click="createClazz2">新建</button>
        </div>
        <!--展示信息的table-->
        <table class="table table-hover">
          <thead class="table-secondary">
          <tr>
            <th>序号</th>
            <th>类名</th>
            <th>商品种类</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(clazz, index) of this.data.class2" class="table-primary" :key="clazz.id">
            <td v-text="index + 1"></td>
            <td>{{clazz.name}}</td>
            <td>{{clazz.subCount}}</td>
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
  </div>
</template>

<style scoped>
.goods-type-box {
  display: flex;
  justify-content: space-between;
}

.goods-type-box > div {
  width: 45%;
}
</style>