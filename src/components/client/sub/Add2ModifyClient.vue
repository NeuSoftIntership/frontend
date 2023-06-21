<script>
export default {
  setup() {
    let is_add = undefined

    return {
      is_add
    }
  },
  mounted() {
    this.is_add = this.$route.query.is_add
  }
}
</script>

<template>
  <div class="card" style="height: 100%">
    <div class="client-info">
      <div><span v-if="!is_add">修改</span><span v-if="is_add">新建</span>客户</div>
      <div>
        <ul class="list-group">
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">客户名</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">电话号码</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">地址</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">邮箱</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">注册时间</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">上次修改时间</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">身份证号码</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div class="btn-group" role="group" aria-label="Basic outlined example"
             style="display: flex; justify-content: space-around">
          <button type="button" class="btn btn-outline-primary">取消</button>
          <button type="button" class="btn btn-outline-primary">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.client-info {
  position: relative;
  width: 80%;
  left: 10%;
  height: 80%;
  top: 10%
}
</style>