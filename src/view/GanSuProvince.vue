<template>

  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />
      <el-row>
        <el-col
            v-for="(o, index) in 1"
            :key="o"
            :span="8"
            :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img

                src="src/assets/ganSuDiTu.png"
                class="image"
            />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button" on-click="toGanSu">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>


    </el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />12312</el-col>
  </el-row>


</template>

<script>
export default {
  name: "GanSu"
}
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>