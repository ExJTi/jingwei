<template>
  <div>
    <sk-table :list-query="listQuery" ref="skTable">
      <sk-table-toolbar slot="toolbar" :total="total" @page-change="handlePage" ref="skToolBar">
        <template slot="left">
          <el-select style="width: 120px" class="filter-item" v-model="sort" placeholder="排序">
            <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"> </el-option>
          </el-select>
        </template>

        <template slot="left-rigtht">
          <div class="filter-item sk-normal-font"></div>
        </template>
        <template slot="right">
          <el-button class="filter-item" @click="handleMgr" type="primary">
            创建
          </el-button>
        </template>
      </sk-table-toolbar>
      <el-table
        slot="table"
        :data="tableData"
        ref="tables"
        @column-show-change="columnShowChangesHandle"
        @column-order-change="columnOrderChangesHandle"
        style="width: 100%"
        stripe
        highlight-current-row
      >
        <!-- <el-table-column type="selection" width="45">
        </el-table-column> -->
        <el-table-column label="日期" prop="date" :show="false" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" prop="name" not-control-display width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="地址">
          <template slot-scope="scope">
            <span>{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="300" class-name="small-padding">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
            <sk-more-button :drop-menus="dropMenus" @command="handleCommand" :data="scope.row"></sk-more-button>
          </template>
        </el-table-column>
      </el-table>
    </sk-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :show-default-footer="false">
      <span
        ><sk-table-toolbar slot="toolbar" :total="total" @page-change="handlePage" ref="skToolBar" is-dialog-keydown />
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { SkLayout, SkIconStatus, SkDrawer, SkDialog } from 'sk-ui'
import progressBox from 'sky-engine/components/progressBox'
export default {
  components: {
    [SkLayout.name]: SkLayout,
    [progressBox.name]: progressBox,
    [SkIconStatus.name]: SkIconStatus,
    [SkDrawer.name]: SkDrawer,
    [SkDialog.name]: SkDialog
  },
  name: 'project',
  data() {
    return {
      listQuery: {
        //搜索依据
        title: 0,
        daterange: void 0,
        timestamp: void 0
      },
      total: 0,
      sortOptions: [
        { label: '按ID升序列', key: '+id' },
        { label: '按ID降序', key: '-id' }
      ],
      sort: null,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      dropMenus: [
        {
          command: 'start',
          label: '开机'
        },
        {
          command: 'stop',
          label: '关机'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    handlePage() {
      this.fetch()
    },
    handleMgr(row) {},
    handleSearch() {
      this.fetch()
    },
    fetch() {
      const page = this.$refs.skTable.getPage()
      this.listQuery.page = page.page
      this.listQuery.limit = page.limit
    },
    columnShowChangesHandle(val) {
      console.log(val)
    },
    columnOrderChangesHandle(val) {
      console.log(val)
    },
    handleCommand(val) {
      console.log(val[0], val[1])
    }
  }
}
</script>

<style lang="scss" scoped></style>
