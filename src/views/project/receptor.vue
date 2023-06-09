<template>
  <div>
    <el-table
      :data='tableData'
      style='width: 100%'>
      <el-table-column type='expand'>
        <template slot-scope='props'>
          <el-form class='demo-table-expand' inline label-position='left'>
            <el-form-item label='当前时间'>
              <span>{{ props.row.currentTime }}</span>
            </el-form-item>
            <el-form-item label='cookie'>
              <span>{{ props.row.cookie }}</span>
            </el-form-item>
            <el-form-item label='URI'>
              <span>{{ props.row.url }}</span>
            </el-form-item>
            <el-form-item label='IP'>
              <span>{{ props.row.ip }}</span>
            </el-form-item>
            <el-form-item label='浏览器名称'>
              <span>{{ props.row.browerName }}</span>
            </el-form-item>
            <el-form-item label='浏览器版本'>
              <span>{{ props.row.browerVersion }}</span>
            </el-form-item>
            <el-form-item label='OS'>
              <span>{{ props.row.osName }}</span>
            </el-form-item>
            <el-form-item label='Arch'>
              <span>{{ props.row.arch }}</span>
            </el-form-item>
            <el-form-item label='httpOnly'>
              <span>{{ props.row.httpOnly }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
<!--      <el-table-column-->
<!--        label='URI'-->
<!--        prop='url'-->
<!--      >-->
<!--      </el-table-column>-->
      <el-table-column
        label='IP'
        prop='ip'>
      </el-table-column>
      <el-table-column
        label='time'
        prop='currentTime'
      >
      </el-table-column>

      <el-table-column
        label='cookie'
        prop='cookie'>
      </el-table-column>

      <el-table-column
        fixed='right'
        label='操作'
        width='120'>
        <template slot-scope='scope'>
          <el-button
            size='small'
            type='text'
            @click.native.prevent='deleteRow(scope.$index, tableData)'>
            移除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>

</template>

<script>
export default {
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    getAllXssUser () {
      this.$http({
        url: this.$http.adornUrl('/xss/data/getPage'),
        method: 'post',
        data: this.$http.adornData(this.pageParam)
      }).then(({data}) => {
        // if (data && data.code === 0) {
        //   this.$alert(data.log.error)
        // } else {
        //   this.$message.error(data.msg)
        // }
        console.log(data)
        this.tableData = data.records
      })
    }
  },
  created () {
    this.getAllXssUser()
  },
  data () {
    return {
      search: '',
      tableData: [],
      pageParam: {
        curPage: 1,
        pageSize: 10,
        search: ''
      },
      params: {
        'countId': 'string',
        'current': 1,
        'maxLimit': 3,
        'optimizeCountSql': true,
        'orders': [
          {
            'asc': true,
            'column': 'id'
          }
        ],
        'pages': 0,
        'records': [
          {}
        ],
        'searchCount': true,
        'size': 0,
        'total': 0
      }
    }
  }
}
</script>


<style>
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
