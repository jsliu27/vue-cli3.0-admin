<template>
  <div id="table" class="table">
    <el-table
      :data='tableData'
      stripe
      border
      row-class-name="pTr"
      >
        <el-table-column
          type="expand"
          label="序号"
          width="50"
        >
          <template
            slot-scope="props"
            >
            <section
              class="tableChildren"
              >
                <el-table
                  :data='props.row.children'
                  border
                  style="width:100%;"
                  >
                  <el-table-column
                    v-for="(ele, i) in cTableHead"
                    :key="i"
                    :label="ele.name"
                    >
                      <template  slot-scope="scope">
                        <el-date-picker
                          v-if="ele.key === 'finishTime'"
                          v-model="scope.row[ele.key]"
                          type="date"
                          size="mini"
                          style="width: 100%;"
                          placeholder="选择日期">
                        </el-date-picker>
                        <span
                          v-else-if="ele.key === 'planType'"
                          >
                          {{scope.row[ele.key] === 0 ? '阶段验收' : '合同验收'}}
                        </span>
                        <span
                          v-else-if="ele.key === 'finishState'"
                          :class="{finish:scope.row[ele.key] === 1}"
                          >
                          {{scope.row[ele.key] === 0 ? '未完成' : '已完成'}}
                        </span>
                        <span
                          v-else-if="ele.key === 'overdue'"
                          :class="{
                            finish: scope.row[ele.key] === 1,
                            overdue: scope.row[ele.key] === -1}"
                          >
                          {{scope.row[ele.key] === 0 ?
                            '待确认' :
                            scope.row[ele.key] === 1 ?
                            '正常' :
                            '超期'
                          }}
                          <i
                            style="cursor: pointer;"
                            v-if="scope.row[ele.key] == -1"
                            class="el-icon-edit-outline"
                            >
                          </i>
                        </span>
                        <span
                          v-else
                          >
                          {{scope.row[ele.key]}}
                        </span>
                      </template>
                  </el-table-column>
                  <el-table-column
                    label="操作"
                    width="350"
                    >
                      <template slot-scope="scope">
                        <el-button
                          type="danger"
                          icon="el-icon-circle-check"
                          size="mini"
                          @click="planHandle(scope.row)"
                          >
                            验收情况
                        </el-button>
                        <el-button
                          type="danger"
                          icon="el-icon-circle-check"
                          size="mini"
                          @click="reviewHandle(scope.row)"
                          >
                            评审情况
                        </el-button>
                        <el-button
                          type="primary"
                          size="mini"
                          @click="finishHandle(scope.row)"
                          >
                            完成确认
                        </el-button>
                      </template>
                  </el-table-column>
                </el-table>
              </section>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item, index) in pTableHead"
          :key="index"
          :label="item.name"
          :prop="item.key"
          >
        </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'tableChild',
  data () {
    return {

      // 表格数据
      tableData: [
        {
          id: 1,
          name: 'XXX项目合同-123',
          number: 'ABCD-EFG-20180130-HIG-11',
          partyA: '海军装备部项目管理中心',
          partyB: '中国兵器110所',
          total: 500,
          nodeNumber: 5,
          finishNumber: 1,
          children: [
            {
              id: 1,
              planTime: '2018-02-15',
              planType: 0,
              address: '瑞府大街荣福里4号',
              pattern: '认证环境测试',
              finishTime: '2018-02-15',
              finishState: 1,
              overdue: 1
            },
            {
              id: 2,
              planTime: '2018-03-01',
              planType: 0,
              address: '瑞府大街荣福里4号XXXXXXXX',
              pattern: 'XXXXXXXXXXXXXXXXX',
              finishTime: '2018-02-15',
              finishState: 0,
              overdue: -1
            },
            {
              id: 3,
              planTime: '2018-03-01',
              planType: 0,
              address: '瑞府大街荣福里4号XXXXXXXX',
              pattern: 'XXXXXXXXXXXXXXXXX',
              finishTime: '2018-02-15',
              finishState: 0,
              overdue: 0
            }
          ]
        }, {
          id: 2,
          name: 'XXX项目合同-321',
          number: 'ABCD-EFG-20190130-HIG-22',
          partyA: '空军装备部项目管理中心',
          partyB: '中国兵器120所',
          total: 1500,
          nodeNumber: 8,
          finishNumber: 4,
          children: [
            {
              id: 1,
              planTime: '2018-02-15',
              planType: 0,
              address: '瑞府大街荣福里4号',
              pattern: '认证环境测试',
              finishTime: '2018-02-15',
              finishState: 1,
              overdue: 1
            },
            {
              id: 2,
              planTime: '2018-03-01',
              planType: 0,
              address: '瑞府大街荣福里4号XXXXXXXX',
              pattern: 'XXXXXXXXXXXXXXXXX',
              finishTime: '2018-02-15',
              finishState: 0,
              overdue: -1
            },
            {
              id: 3,
              planTime: '2018-03-01',
              planType: 0,
              address: '瑞府大街荣福里4号XXXXXXXX',
              pattern: 'XXXXXXXXXXXXXXXXX',
              finishTime: '2018-02-15',
              finishState: 0,
              overdue: 0
            }
          ]
        }, {
          id: 3,
          name: 'XXX项目合同-123',
          number: 'ABCD-EFG-20180130-HIG-11',
          partyA: '海军装备部项目管理中心',
          partyB: '中国兵器110所',
          total: 500,
          nodeNumber: 10,
          finishNumber: 2,
          children: [
            {
              id: 1,
              planTime: '2018-02-15',
              planType: 0,
              address: '瑞府大街荣福里4号',
              pattern: '认证环境测试',
              finishTime: '2018-02-15',
              finishState: 1,
              overdue: 1
            },
            {
              id: 2,
              planTime: '2018-03-01',
              planType: 0,
              address: '瑞府大街荣福里4号XXXXXXXX',
              pattern: 'XXXXXXXXXXXXXXXXX',
              finishTime: '2018-02-15',
              finishState: 0,
              overdue: -1
            },
            {
              id: 3,
              planTime: '2018-03-01',
              planType: 0,
              address: '瑞府大街荣福里4号XXXXXXXX',
              pattern: 'XXXXXXXXXXXXXXXXX',
              finishTime: '2018-02-15',
              finishState: 0,
              overdue: 0
            }
          ]
        }
      ],
      // 外层表格的表头
      pTableHead: [

        {
          name: '合同/任务书名称',
          key: 'name'
        },
        {
          name: '合同/任务书编号',
          key: 'number'
        },
        {
          name: '甲方/委托方',
          key: 'partyA'
        },
        {
          name: '乙方/承研方',
          key: 'partyB'
        },
        {
          name: '金额(万元)',
          key: 'total'
        },
        {
          name: '验收节点数',
          key: 'nodeNumber'
        },
        {
          name: '完成验收节点数',
          key: 'finishNumber'
        }
      ],
      // 内层表格的表头
      cTableHead: [
        {
          name: '序号',
          key: 'id'
        },
        {
          name: '计划验收时间',
          key: 'planTime'
        },
        {
          name: '验收类型',
          key: 'planType'
        },
        {
          name: '验收地点',
          key: 'address'
        },
        {
          name: '验收方式',
          key: 'pattern'
        },
        {
          name: '完成时间',
          key: 'finishTime'
        },
        {
          name: '完成状态',
          key: 'finishState'
        },
        {
          name: '超期情况',
          key: 'overdue'
        }
      ]
    }
  },
  mounted () {
    this.changePtrI()
  },
  methods: {
    // 改变父表格中的第一个td中的i
    changePtrI () {
      setTimeout(() => {
        // 获取到所有tr
        const ptrArr = document.querySelectorAll('.pTr')
        // 获取到第一个td中的el-table__expand-icon
        for (let i = 0; i < ptrArr.length; i++) {
          const ptr = ptrArr[i]
          const expandIcon = ptr.querySelector('.el-table__expand-icon')
          expandIcon.style.transition = 'none'
          expandIcon.style.transform = 'none'
          expandIcon.style.display = 'flex'
          expandIcon.style['align-items'] = 'center'
          expandIcon.style['justify-content'] = 'space-between'
          expandIcon.innerHTML = `
            <i
            class='ptdi_icon ptdi_jia'></i>
            <span class='ptdi_text'>${i + 1}</span>
          `
          expandIcon.addEventListener('click', function () {
            let i = this.querySelector('.ptdi_icon')
            if (i.className.indexOf('jian') > -1) {
              i.className = 'ptdi_icon ptdi_jia'
            } else {
              i.className = 'ptdi_icon ptdi_jian'
              // 父元素tr
              const tr = this.parentElement.parentElement.parentElement
              if (!/expanded/.test(tr.className)) {
                tr.className = tr.className + ' expanded'
              }
              // 获取tr的所有兄弟
              const siblings = _siblings(tr)
              // 遍历素有兄弟将所有兄弟中的expand的类名去掉
              for (let i = 0; i < siblings.length; i++) {
                // eslint-disable-next-line camelcase
                const s_tr = siblings[i]
                // 正则匹配如果有expanded类名的返回true没有返回false
                // 判断条件也可以用indexOf s_tr.className.indexOf('expanded') > -1
                if (/expanded/.test(s_tr.className)) {
                  // 将 expanded替换成空
                  s_tr.className = s_tr.className.replace('expanded', '')
                  // 同时干掉他下面的元素
                  s_tr.nextSibling.style.display = 0
                  // 将所有的兄弟内的标签换成加号
                  const i = s_tr.querySelector('.ptdi_jian')
                  i.className = 'ptdi_icon ptdi_jia'
                }
              }
              console.log('siblings====>', siblings)
            }
          })
        }
      }, 0)
      function _siblings (elm) {
        var siblings = []
        // 获取父元素第一个孩子
        var child = elm.parentElement.firstChild
        // for循环 child=下一个兄弟
        for (; child; child = child.nextSibling) {
          // 判断是不是元素节点这个人是不是自己
          if (child.nodeType === 1 && child !== elm) {
            siblings.push(child)
          }
        }
        return siblings
      }
    },
    // 验收情况点击触发的事件
    planHandle (rowData) {
      console.log(rowData)
    },
    // 评审情况点击触发的事件
    reviewHandle (rowData) {
      console.log(rowData)
    },
    // 完成确认点击触发的事件
    finishHandle (rowData) {
      console.log(rowData)
    }
  }
}
</script>
<style lang="less" scoped>
.table {
  width: 90%;
  margin: 50px auto;
  .tableChildren {
    width: 100%;
    .finish {
      color: #67c23a;
    }
    .overdue {
      color: #f56c6c;
    }
  }
}
</style>
