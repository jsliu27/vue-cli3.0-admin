<template>
  <div id='tableBox' class="tableBox">
    <!-- 表格 边框为1 style的样式为了去掉内部变宽变粗  规定单元边沿与其内容之间的空白。规定单元格之间的空白。-->
    <table border='1' style='border-collapse: collapse;' sellpadding='0' cellspacing='0'>
      <!-- 表头 -->
      <thead>
        <tr>
          <!-- td是使用v-for遍历数组生成的 -->
          <td v-for="(item, index) in theadData" :key="index">
            {{item}}
          </td>
        </tr>
      </thead>
      <!-- 表体 -->
      <tbody>
        <!-- 这里也是v-for遍历生成的，因为这里除了小计和合计都是重复的所以我想到了遍历 -->
        <!-- template 是模块 我把除了小计和合计之外的dom元素放到了一个模块里面 是为了方便遍历-->
        <template v-for="(item, index) in groupData">
          <!-- 这里存的是标题， groupData中的title-->
          <!-- :colspan=theadData.length这里是合并单元格，合并的单元格的个数是表头数据的长度 -->
          <tr :key="item.title + index">
            <td
              :colspan=theadData.length
              style="text-align: left;"
              >
              {{item.title}}
            </td>
          </tr>
          <!-- 分析页面除了标题和添加按钮，其他的都是重复的所以我又想到了v-for -->
          <!-- 我将里面的内容放到一个模块里是为了方便遍历 -->
          <template v-for="(e, i) in item.data">
            <tr :key="item.title + index + i">
              <!-- 序号 -->
              <td>{{i + 1}}</td>
              <!-- 除了序号以外的其他项 -->
              <!-- 这里的e就是 groupData[index].data v 就是 data里面的值，k 就是 data里面的键 -->
              <td v-for="(v, k, ix) in e" :key="k + ix">
                <!-- 输入框 数字类型 -->
                <!-- v-model双向数据绑定，这里一定是这样的 groupData[index].data[i][k]-->
                <!--
                  解析 groupData[index].data[i][k]
                  groupData 是 一个数组
                  index 是 groupData中对应的索引
                  data 是 groupData中对应的索引的对象的data属性
                  i 是 data的索引
                  k 是 data的索引对应对象里面的每一个键
                  groupData[index].data[i][k] 就是 groupData数组下 index 对应的 对象 中的 data 数组中 i 索引对应的对象的k键对应的值
                -->
                <el-input
                  type="number"
                  size='mini'
                  v-model='groupData[index].data[i][k]'
                  placeholder="请输入内容"
                  ></el-input>
              </td>
              <td>
                <a href=" " @click="removeTr(index, i)">
                  删除
                </a>
                </td>
            </tr>
          </template>
          <!-- 这里是增加按钮 -->
          <tr :key="'add' + index">
            <!-- :colspan=theadData.length这里是合并单元格，合并的单元格的个数是表头数据的长度 -->
            <td
              class="addBox"
              :colspan=theadData.length
              style="text-align: right;"

              >
              <span @click="addTr(index)">新增</span>

            </td>
          </tr>
        </template>
        <!-- 小计 -->
        <tr>
          <td>
            小计:
          </td>
          <!-- 里面的小计值我保存在subtotal对象中 -->
          <!-- v-for是可以遍历对象的，item是值 key 是键 -->
          <td v-for="(item, key) in subtotal" :key="key">
            {{item}}
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            合计
          </td>
          <!-- 里面的合计值我保存在subtotal对象中 -->
          <!-- v-for是可以遍历对象的，item是值 key 是键 -->
          <td v-for="(item, key) in total" :key="key">
            {{item}}
          </td>
          <td>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Table',
  watch: {
    groupData: {
      deep: true,
      handler (val, oldVal) {
        // 计算
        this.calculation(val)
      }
    }
  },
  data () {
    return {
      // thead的数据
      theadData: [
        '序号',
        '本月GS/KPI. 巡视整改指标完成情况',
        '标准分值',
        '员工自评分',
        '上级评分',
        '操作'
      ],
      // 用来记录组的数据
      groupData: [{
        title: '巡视整改',
        data: [
          {
            KPI: '',
            // 标准分值
            standard: '',
            // 自评
            s_evaluation: '',
            // 上级评分
            s_score: ''
          }
        ]
      }, {
        title: '重点工作/KPI',
        data: [
          {
            KPI: '',
            // 标准分值
            standard: '',
            // 自评
            s_evaluation: '',
            // 上级评分
            s_score: ''
          }
        ]
      }
      ],
      // 小计
      subtotal: {
        KPI: 0,
        // 标准分值
        standard: 0,
        // 自评
        s_evaluation: 0,
        // 上级评分
        s_score: 0
      },
      // 合计
      total: {
        KPI: 0,
        // 标准分值
        standard: 0,
        // 自评
        s_evaluation: 0,
        // 上级评分
        s_score: 0
      }
    }
  },
  methods: {
    // 计算小计和合计
    calculation (tableData) {
      let obj = {
        KPI: 0,
        // 标准分值
        standard: 0,
        // 自评
        s_evaluation: 0,
        // 上级评分
        s_score: 0
      }
      let subObj = {
        KPI: 0,
        // 标准分值
        standard: 0,
        // 自评
        s_evaluation: 0,
        // 上级评分
        s_score: 0
      }
      tableData.forEach((item, index, arr) => {
        // 合计
        item.data.forEach((ele, i) => {
          obj.KPI += Number(ele.KPI)
          obj.standard += Number(ele.standard)
          obj.s_evaluation += Number(ele.s_evaluation)
          obj.s_score += Number(ele.s_score)
        })
        // 小计
        if (index === arr.length - 1) {
          item.data.forEach((ele, i) => {
            subObj.KPI += Number(ele.KPI)
            subObj.standard += Number(ele.standard)
            subObj.s_evaluation += Number(ele.s_evaluation)
            subObj.s_score += Number(ele.s_score)
          })
        }
      })
      this.total = Object.assign({}, obj)
      this.subtotal = Object.assign({}, subObj)
    },
    // 增加
    addTr (index) {
      const addItem = {
        KPI: '',
        // 标准分值
        standard: '',
        // 自评
        s_evaluation: '',
        // 上级评分
        s_score: ''
      }
      this.groupData[index].data.push(addItem)
    },
    // 删除
    removeTr (trIndex, tdIndex) {
      if (this.groupData[trIndex].data.length === 1) {
        this.$message('只有一条不能删除，因为太丑了')
      } else {
        this.groupData[trIndex].data.splice(tdIndex, 1)
      }
    }

  }
}
</script>
<style lang="less" scoped>
.tableBox {
  background: #fff;
  padding: 50px;
  table {
    td {
      padding: 5px;
      a {
        text-decoration: none;
      }
    }
    .addBox {
      cursor: pointer;
    }
    thead {
      background: #409eff;
    }
  }
}
</style>