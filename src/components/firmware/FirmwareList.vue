<!-- 固件列表 -->
<template>
  <div>
       <!-- 表单区域 -->
    <el-table :data="FirmwareList" stripe style="width: 100%" border>
      <!-- 数据表单 -->
      <el-table-column type="index" width="65"> </el-table-column>

      <el-table-column prop="FirmwareId" label="版本号" width="150">
      </el-table-column>

      <el-table-column prop="FirmwareName" label="固件名称" width="170">
      </el-table-column>

      <el-table-column prop="FirmwareDate" label="上传时间" width="170">
      </el-table-column>

      <el-table-column prop="FirmwareUpdatye" label="发布时间" width="180">
      </el-table-column>

      <el-table-column prop="FirmwareDec" label="固件描述" width="160">
      </el-table-column>

      <!-- 操作区 -->
      <el-table-column fixed="right" width="280" label="操作区">
        <template slot-scope="scope">
          <!-- 查看按钮 -->
          <el-button
            size="mini"
            @click="showEditDialog(scope.row.id)"
            type="primary"
          >
            查看
          </el-button>
          <!-- 发布按钮 -->
          <el-button
            size="mini"
            @click="releaseEditDialog(scope.row.id)"
            type="success"
          >
            发布
          </el-button>
          <!-- 下载按钮 -->
          <el-button
            size="mini"
            @click="downloadEditDialog(scope.row.id)"
          >
            下载
          </el-button>
          <!-- 删除按钮 -->
          <el-button
            size="mini"
            type="danger"
            @click="removeRecordById(scope.row.id)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
name:'',
  data () {
    return {
        // 获取列表的参数对象
      queryInfo: {
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 10,
      },
       total: 0,
        FirmwareList:[{
            FirmwareId:"",
            FirmwareName:"",
            FirmwareDate:"",
            FirmwareUpdatye:"",
            FirmwareDec:""
        }]
    };
  },

  components: {},

  created() {
       this.getFirmwareList();
  },

  methods: {
      async getFirmwareList(){
           const { data: res } = await this.$http.get("Firmwares", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取固件列表数据失败");
      this.FirmwareList = res.data.Firmwares;
      this.total = res.data.total;
      },
      showEditDialog(){},
      releaseEditDialog(){},
      downloadEditDialog(){},
      removeRecordById(){},
       // 翻页函数
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getRecordList();
    },
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.queryInfo.pagenum = newPage;
      this.getRecordList();
    },
  }
}

</script>
<style lang='less' scoped>
</style>