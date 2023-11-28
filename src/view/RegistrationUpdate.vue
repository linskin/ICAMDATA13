

<template>

    <el-form :model="form" label-width="120px"  style="margin-top: 5vh">
      <el-form-item class="item" label="Name" >
        <el-input style="margin-top: 0vh" placeholder="First name" v-model="form.Fname" />
        <el-input style="margin-top: 2vh" placeholder="Last name" v-model="form.Lname" />
      </el-form-item>
      <el-form-item label="Gender" class="item">
        <el-radio-group v-model="form.gender">
          <el-radio label="male"/>
          <el-radio label="female" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Job Title"  >
        <el-select v-model="form.region" style="width:24vw;"  placeholder="please select your title">
          <el-option label="Dr." value="shanghai" />
          <el-option label="Prof." value="beijing" />
          <el-option label="Mr." value="beijing" />
          <el-option label="Mrs." value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="email"  >
        <el-autocomplete
            v-model="email"
            :fetch-suggestions="querySearch"
            placeholder="请输入邮箱"
            style="width: 24vw"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="Affiliation" class="item">
        <el-input v-model="form.Affiliation"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Sign Up</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </template>




<script lang="ts" setup>
import {reactive, ref} from 'vue'
import * as queryString from "querystring";
import {createFilter} from "vite";

// do not use same name with ref
const form = reactive({
  Fname: '',
  Lname:'',
  email: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  gender: '',
  Affiliation: '',
})
const email = ref('');
const emailList =ref([
'@gmail.com',
'@yahoo.com',
'@hotmail.com',
'@qq.com',
'@163.com',
'@yeah.net',
'@sohu.com',
'@tom.com',
'@vip.qq.co',
'@foxmail.com',
'@msn.com',
'@sogou.com',
'@21cn.com',
'@126.com',
'@263.net',
'@ask.com',
'@139.com'
  // 可以添加更多的邮箱地址
]);


const onSubmit = () => {
  console.log('submit!')
}
const querySearch = (queryString, cb) => {
  const emails = emailList.value.filter(email =>
      (queryString.split('@')[0]+email).toLowerCase().includes(queryString.toLowerCase())
  );

  const suggestions = emails.map( email => ({value:queryString.split('@')[0]+email}) );
  // const suggestions = emails.map( email => ({value:queryString + emails}) );
  cb(suggestions);
};




</script>

<style scoped>
.item{
  width: 30vw;
}
</style>
