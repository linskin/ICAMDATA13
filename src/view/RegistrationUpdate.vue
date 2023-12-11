

<template>

    <el-form :model="form"  style="margin-top: 5vh"
             ref="ruleFormRef"
             :rules="rules"
             label-width="120px"
             class="demo-ruleForm"

             status-icon>
      <el-form-item class="item" label="First Name" prop="Fname">
        <el-input   v-model="form.Fname" />
      </el-form-item>
      <el-form-item class="item" label="Last Name" prop="Lname" >
        <el-input   v-model="form.Lname" />
      </el-form-item>
      <el-form-item label="Gender" class="item" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio label="Male"/>
          <el-radio label="Female" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Job Title" prop="region"  >
        <el-select v-model="form.region" style="width:24vw;"  placeholder="please select your title" >
          <el-option label="Dr." value="博士" />
          <el-option label="Prof." value="教授" />
          <el-option label="Mr." value="先生" />
          <el-option label="Mrs." value="女士" />
        </el-select>
      </el-form-item>
      <el-form-item label="Country"  prop="country" >
        <el-select v-model="form.country" style="width:24vw;"  placeholder="please select your country">
          <el-option v-for="country in countries" :key="country" :label="country" :value="country" />
        </el-select>
      </el-form-item>
      <el-form-item label="email"  prop="email">
        <el-autocomplete
            v-model="form.email"
            :fetch-suggestions="querySearch"
            placeholder="请输入邮箱"
            style="width: 24vw"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="Affiliation" class="item" prop="Affiliation">
        <el-input v-model="form.Affiliation"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Sign Up</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </template>




<script lang="ts" setup>
import {reactive, ref} from 'vue';
import type { FormInstance, FormRules } from 'element-plus'
interface RuleForm {
  Fname: string
  region: string
  Lname: string
  email: string
  country: string
  gender: boolean
  Affiliation: string
}


// do not use same name with ref
const form = reactive({
  Fname: '',
  Lname:'',
  email: '',
  region: '',
  country: '',
  gender: '',
  Affiliation: '',
})

const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  Fname: [
    { required: true, message: 'Please input First name', trigger: 'blur' },
  ],
  Lname:[
    { required:true,message:'Please input Last name',trigger:'blur'}
  ],
  email: [
    { validator:validateEmail, message: 'Please input a valid email', trigger:'blur'},
  ],
  region: [
    { required: true, message: 'Please choose your region', trigger: 'blur' },
  ],
  country: [
    { required: true, message: 'Please choose your country', trigger: 'blur' },

  ],
  gender: [
    { required: true, message: 'Please choose your gender', trigger: 'blur' },

  ],
  Affiliation: [
    { required: true, message: 'Please input your Affiliation', trigger: 'blur' }
  ]

})
function validateEmail(rule, value, callback) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(value)) {
    callback();
  } else {
    callback(new Error('请输入有效的邮箱地址'));
  }
}
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
  '@139.com',
  '@nwnw.edu.cn'
  // 可以添加更多的邮箱地址
]);


const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
  'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
  'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Congo, Democratic Republic of the (Congo-Kinshasa)', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)',
  'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
  'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (fmr. "Swaziland")', 'Ethiopia', 'Fiji', 'Finland', 'France',
'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
'Hungary',
'Iceland',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland',
'Israel',
'Italy',
'Ivory Coast',
'Jamaica',
'Japan',
'Jordan',
'Kazakhstan',
  'Kenya',
'Kiribati',
'Korea, North',
'Korea, South',
'Kosovo',
'Kuwait',
'Kyrgyzstan',
'Laos',
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Madagascar',
'Malawi',
'Malaysia',
'Maldives',
'Mali',
'Malta',
'Marshall Islands',
'Mauritania',
'Mauritius',
'Mexico',
'Micronesia',
'Moldova',
'Monaco',
'Mongolia',
'Montenegro',
'Morocco',
'Mozambique',
'Myanmar (Burma)',
'Namibia',
'Nauru',
'Nepal',
'Netherlands',
'New Zealand',
'Nicaragua',
'Niger',
'Nigeria',
'North Macedonia (formerly Macedonia)',
'Norway',
'Oman',
'Pakistan',
'Palau',
'Panama',
'Papua New Guinea',
'Paraguay',
'Peru',
'Philippines',
'Poland',
'Portugal',
'Qatar',
'Romania',
'Russia',
'Rwanda',
'Saint Kitts and Nevis',
'Saint Lucia',
'Saint Vincent and the Grenadines',
'Samoa',
'San Marino',
'Sao Tome and Principe',
'Saudi Arabia',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leone',
'Singapore',
'Slovakia',
'Slovenia',
'Solomon Islands',
'Somalia',
'South Africa',
'South Sudan',
'Spain',
'Sri Lanka',
'Sudan',
'Suriname',
'Sweden',
'Switzerland',
'Syria',
'Taiwan,China',
'Tajikistan',
'Tanzania',
'Thailand',
'Togo',
'Tonga',
'Trinidad and Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Tuvalu',
'Uganda',
'Ukraine',
'United Arab Emirates',
'United Kingdom',
'United States of America',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'Vatican City (Holy See)',
'Venezuela',
'Vietnam',
'Yemen',
'Zambia',
'Zimbabwe'
];
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
