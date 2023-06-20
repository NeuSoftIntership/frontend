<script>
export default {

}
</script>

<template>
  <h5>修改/新建配送员</h5>
  <div class="card" style="height: 100%; width: 70%;top: 25%;height: 50%;left: 15%">
    <div class="client-info">
      <div>
        <ul class="list-group">
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">配送员姓名</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">配送站</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">配送员联系电话</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="addon-wrapping">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping" style="width: 9em;">入职时间</span>
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

</style>