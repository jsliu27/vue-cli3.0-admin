<template>
  <div>
    <p>{{list}}</p>

    <el-form>
    <el-row>
      <el-col :span="10">
      <el-form-item label="Name" label-width="50px" width="200px">
        <el-input v-model="name" />
      </el-form-item>
      </el-col>
      <el-col :span="4">
      <el-form-item>
        <el-button @click="toFaher" type="primary">点击</el-button>
        <el-button @click="reset" type="primary">重置</el-button>
      </el-form-item>
      </el-col>
    </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    toFaher () {
      this.$emit('getSon', this.name)
    },
    reset () {
      this.name = ''
      this.$emit('getSon', this.name)
    }
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>
<style>
</style>
