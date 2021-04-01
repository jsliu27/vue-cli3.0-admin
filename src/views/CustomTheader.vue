<template>
  <section class="custom_theader">
    <el-table
    :data="tableData"
    border
    :key="tableRenderNum"
    style="width: 100%">
    <el-table-column :prop="item.prop" :label="item.label" :width="item.width ? item.width : false" v-for="(item, index) in column" :key="index">
      <template slot="header">
        <section class="c_th_box">
          <span>
            {{ item.label }}
          </span>
          <i v-if="item.isfilter" :class="{'el-icon-s-tools': true, 'search-content-active': item.filter.length > 0}" @click="open_filter_medal(item)"></i>
        </section>
      </template>
    </el-table-column>
    <el-table-column v-if='isHandle' label="操作">
      <template slot="header">
        <section class="c_th_box">
          <span>
            {{ handleConfig.label }}
          </span>
          <i v-if="handleConfig.isfilter" class="el-icon-s-tools" @click="open_all_filter_drawer"></i>
        </section>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="() => dialogVisible = false">
    <section class="dialog_body">
      <el-select v-model="mFilter" placeholder="请选择" clearable>
        <el-option
          v-for="item in mOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="confrom_filter_modal">确 定</el-button>
    </span>
  </el-dialog>
  <el-drawer
    title="显示所有搜索项"
    :visible.sync="drawerVisible"
    :before-close="()=> drawerVisible = false">
    <el-form label-position="right" label-width="80px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
  </el-drawer>
  </section>
</template>
<script>
export default {
  name: 'CustomTheader',
  data () {
    return {
      column: [
        {
          prop: 'date',
          label: '日期',
          width: '180',
          isfilter: true,
          filter: '',
          option: [
            {
              label: '2016-05-01',
              value: '2016-05-01'
            },
            {
              label: '2016-05-02',
              value: '2016-05-02'
            },
            {
              label: '2016-05-03',
              value: '2016-05-03'
            },
            {
              label: '2016-05-04',
              value: '2016-05-04'
            }
          ]
        },
        {
          prop: 'name',
          label: '姓名',
          width: '180',
          filter: '',
          option: []
        },
        {
          prop: 'address',
          label: '地址',
          width: '',
          filter: '',
          option: []
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      dialogVisible: false,
      mFilter: '',
      mOptions: [],
      modalKey: '',
      tableRenderNum: 1,
      isHandle: true,
      handleConfig: {
        label: '操作123',
        isfilter: true
      },
      drawerVisible: false,
      formLabelAlign: {}
    }
  },
  methods: {
    open_filter_medal (thRow) {
      this.mFilter = thRow.filter
      this.modalKey = thRow.prop
      this.mOptions = thRow.option
      this.dialogVisible = true
    },
    confrom_filter_modal () {
      // 获取到对象
      let obj = this.column.find(item => item.prop === this.modalKey)
      const index = this.column.findIndex(item => item.prop === this.modalKey)
      // 有值
      if (this.mFilter.length > 0) {
        // 修改对象
        obj.isfilter = true
        obj.filter = this.mFilter
      } else {
        obj.filter = ''
      }
      // 重新赋值
      console.log('obj====>', obj)
      this.$set(this.column, index, obj)
      console.log('this.column=======>', this.column)
      this.tableRenderNum++
      this.dialogVisible = false
    },
    open_all_filter_drawer () {
      this.drawerVisible = true
    }
  }
}
</script>
<style lang="less" scoped>
.custom_theader {
  .c_th_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      cursor: pointer;
      &.search-content-active {
      color: aqua;
    }
    }

  }
}
</style>
