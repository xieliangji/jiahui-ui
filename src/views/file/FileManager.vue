<template>
  <div class="sugar-file">

    <div class="file-dialog">
      <div class="dialog-header">
        <div class="header-logo"></div>
        <div class="header-title">文件管理</div>
        <div class="header-close" @click="$emit('close')"><i class="iconfont icon-guanbi"></i></div>
      </div>

      <div class="dialog-content">
        <div class="content-query">
          <div class="sugar-normal-line sugar-flex-row">
            <div class="sugar-label-input">
              <div class="label">文件名</div>
              <div class="input">
                <el-input v-model="uploadQuery.name" placeholder="模糊查询" @keydown.enter="handleQuery"></el-input>
              </div>
            </div>
            <div class="sugar-label-input">
              <div class="label">上传人</div>
              <div class="input">
                <el-input v-model="uploadQuery.uploaderName" placeholder="精确查询" @keydown.enter="handleQuery"></el-input>
              </div>
            </div>
            <div class="sugar-label-input">
              <div class="label">文件类型</div>
              <div class="input">
                <el-select v-model="uploadQuery.fileType" @keydown.enter="handleQuery">
                  <el-option :value="0" label="全部"></el-option>
                  <el-option :value="1" label="Jar"></el-option>
                  <el-option :value="2" label="Zip"></el-option>
                  <el-option :value="3" label="JS"></el-option>
                  <el-option :value="4" label="Py"></el-option>
                </el-select>
              </div>
            </div>
            <div class="sugar-label-input">
              <div class="label">上传日期</div>
              <div class="input">
                <el-date-picker v-model="uploadQuery.uploadTimes" type="daterange" value-format="yyyy-MM-dd" range-separator="~" start-placeholder="起始日期" end-placeholder="结束日期" style="height: 32px;" @keydown.enter="handleQuery"></el-date-picker>
              </div>
            </div>
            <div class="sugar-label-input">
              <el-button type="primary" @click="handleQuery">查询</el-button>
              <el-button type="primary" @click="showUpload = true"><span style="color: #2ebf91;">上传</span></el-button>
            </div>
          </div>
        </div>

        <div class="content-table">
          <div class="table-margin"></div>
          <div class="table-detail">
            <el-table :data="uploads.list" ref="fileTable" :expand-row-keys="expands" @expand-change="handleExpandChange" height="100%" empty-text="未上传文件" row-key="id" highlight-current-row @row-click="handleFileClick">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <div class="table-form">
                    <el-form label-width="80px">
                      <el-form-item label="编号" prop="id">
                        <el-input v-model="props.row.id" disabled></el-input>
                      </el-form-item>
                      <el-form-item label="文件名" prop="name">
                        <el-input v-model="props.row.name"></el-input>
                      </el-form-item>
                      <el-form-item label="文件类型">
                        <el-select v-model="props.row.fileType" disabled>
                          <el-option :value="1" label="Jar"></el-option>
                          <el-option :value="2" label="Zip"></el-option>
                          <el-option :value="3" label="JS"></el-option>
                          <el-option :value="4" label="Py"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="备注" prop="remark">
                        <el-input v-model="props.row.remark" type="textarea" resize="none" :autosize="{minRows:4, maxRows:8}"></el-input>
                      </el-form-item>
                      <el-form-item label="上传人">
                        <el-input v-model="props.row.uploaderName" disabled></el-input>
                      </el-form-item>
                      <el-form-item label="上传时间">
                        <el-input v-model="props.row['uploadTime']" disabled></el-input>
                      </el-form-item>
                      <el-form-item label="更新人">
                        <el-input v-model="props.row.updaterName" disabled></el-input>
                      </el-form-item>
                      <el-form-item label="更新时间">
                        <el-input v-model="props.row.updateTime" disabled></el-input>
                      </el-form-item>
                      <el-form-item style="text-align: right;">
                        <el-button type="primary" @click="handleUpdate(props.row)">更新</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="id" label="#" width="100px"></el-table-column>
              <el-table-column prop="name" label="文件名"></el-table-column>
              <el-table-column prop="fileType" label="类型" width="180px">
                <template slot-scope="scope">
                  {{scope.row.fileType === 1 ? "Jar": (scope.row.fileType === 2 ? "Zip": (scope.row.fileType === 3? "JS": (scope.row.fileType === 4 ? "Py": "")))}}
                </template>
              </el-table-column>
              <el-table-column prop="uploaderName" label="上传人" width="180px"></el-table-column>
              <el-table-column prop="uploadTime" label="上传日期" width="180px"></el-table-column>
              <el-table-column fixed="right" width="50px">
                <div slot="header" class="sugar-table-header">操作</div>
                <template slot-scope="scope">
                  <el-button v-if="scope" type="primary" @click="handleDelete"><span style="color: #ff6d6f;">删除</span></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>

        <div class="content-pagination">
          <el-pagination layout="total,sizes,prev,pager,next" :pager-count="5" :total="uploads.total" :page-sizes="[10,15,20]" :page-size.sync="uploadQuery.pageSize" :current-page.sync="uploadQuery.pageNum" @size-change="handleQuery" @current-change="handleQuery"></el-pagination>
        </div>
      </div>


      <div v-if="showUpload" class="file-upload">

        <div class="file-upload-dialog">
          <div class="file-upload-select" style="text-align: center;">
            <el-upload drag accept=".jar,.zip,.js,.py" action="#" :auto-upload="false" :on-change="handleChange" :http-request="handleFileUpload">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jar/zip/js/py文件</div>
            </el-upload>
          </div>
          <div class="sugar-normal-line sugar-label-input">
            <div class="label">文件名</div>
            <div class="input">
              <el-input v-model="upload.name"></el-input>
            </div>
          </div>
          <div class="sugar-normal-line sugar-label-input">
            <div class="label">类型</div>
            <div class="input">
              <el-select v-model="upload.fileType">
                <el-option :value="1" label="Jar"></el-option>
                <el-option :value="2" label="Zip"></el-option>
                <el-option :value="3" label="JS"></el-option>
                <el-option :value="4" label="Py"></el-option>
              </el-select>
            </div>
          </div>
          <div class="sugar-label-input">
            <div class="label">备注</div>
            <div class="input">
              <el-input v-model="upload.remark" type="textarea" :autosize="{minRows:4, maxRows: 8}" resize="none"></el-input>
            </div>
          </div>
          <div style="margin-top: 20px; text-align: right;">
            <el-button type="primary" @click="showUpload = false">取消</el-button>
            <el-button type="primary" @click="handleFileUpload">确定</el-button>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "FileManager",
  data(){
    return {
      showUpload: false,
      upload: {name: '', fileType: '', remark: '', fileList: []},

      uploadQuery: {name: '', uploaderName: '', fileType: 0, uploadTimes: [], pageSize: 10, pageNum: 1},
      uploads: {pageSize: 10, pageNum: 1, total: 0, list: []},

      currentFile: undefined,
      expands: [],
    }
  },
  methods: {
    handleQuery(){
      let uploadQuery = {
        name: this.uploadQuery.name,
        uploaderName: this.uploadQuery.uploaderName,
        fileType: this.uploadQuery.fileType,
        uploadStartTime: this.uploadQuery.uploadTimes.length > 0 ? this.uploadQuery.uploadTimes[0] : null,
        uploadEndTime: this.uploadQuery.uploadTimes.length > 0 ? this.uploadQuery.uploadTimes[1] : null,
        pageSize: this.uploadQuery.pageSize,
        pageNum: this.uploadQuery.pageNum
      }
      this.$axios.post(this.$RESTAPI.sugarFileQuery, uploadQuery).then(response => {
        if(response.data.code === 0){
          this.uploads = response.data.payload
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err => {
        this.$message({message: err, type: "error", duration: 3000})
      })
    },

    handleChange(file, fileList){
      let fileName = file.name
      if(!fileName.endsWith('.jar') && !fileName.endsWith('.zip') && fileName.endsWith('.js') && fileName.endsWith('.py')){
        this.$message({message: '不支持上传的文件格式', type: 'error', duration: 3000})
        return
      }
      if(fileList.length > 1){
        fileList.splice(0,1)
      }
      this.upload.fileList = fileList
      this.upload.name = this.upload.fileList[0].name
      let lastDotIndex = this.upload.name.lastIndexOf('.')
      switch (this.upload.name.substring(lastDotIndex)){
        case '.jar': this.upload.fileType = 1; break
        case '.zip': this.upload.fileType = 2; break
        case '.js': this.upload.fileType = 3; break
        case '.py': this.upload.fileType = 4; break
      }
    },

    handleFileUpload(){
      if(this.upload.fileList.length === 0){
        this.$message({message: '未选择要上传的文件', type: "error", duration: 3000})
      } else {
        let data = new FormData()
        data.append("name", this.upload.name)
        data.append("fileType", this.upload.fileType)
        data.append("uploaderId", this.$store.state.sugarAccount.id)
        data.append("remark", this.upload.remark)
        data.append("file", this.upload.fileList[0].raw)
        this.$axios.post(this.$RESTAPI.sugarFileUpload, data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
          if(response.data.code === 0){
            this.$message({message: '上传成功', type: 'success', duration: 3000})
            this.showUpload = false
            this.handleQuery()
          } else {
            this.$message({message: response.data.message, type: 'error', duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: 'error', duration: 3000})
        })
      }

    },


    handleFileClick(row){
      this.currentFile = row
    },

    handleDelete(){
      this.$confirm("删除（卸载）当前文件？", "", {confirmButtonText: '确定', cancelButtonText: '取消'}).then(() => {
        this.$axios.get(`${this.$RESTAPI.sugarFileDelete}?id=${this.currentFile.id}`).then(response => {
          if(response.data.code === 0){
            this.$message({message: '删除成功', type: "success", duration: 3000})
            this.handleQuery()
          } else {
            this.$message({message: response.data.message, type: 'error', duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      }).catch(() => {})
    },

    handleExpandChange(row, expandedRows){
      this.expands = []
      if(expandedRows.length > 0){
        this.expands.push(row.id)
      } else {
        this.handleQuery()
      }
      this.currentFile = row
      this.$refs.fileTable.setCurrentRow(row)
    },

    handleUpdate(file){
      if(file.name === ''){
        this.$message({message: '文件名称不能为空', type: "error", duration: 3000})
        return
      }
      let updateFile = {
        id: file.id,
        name: file.name,
        remark: file.remark,
        updaterId: this.$store.state.sugarAccount.id
      }
      this.$confirm("确定更新？", "", {confirmButtonText: '确定', cancelButtonText: '取消'}).then(() => {
        this.$axios.post(this.$RESTAPI.sugarFileUpdate, updateFile).then(response => {
          if(response.data.code === 0){
            this.$message({message: '更新成功', type: "success", duration: 3000})
            this.handleQuery()
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      }).catch(() => {
        this.expands = []
        this.handleQuery()
      })
    },


  },
  mounted() {
    this.handleQuery()
  },
}
</script>

<style scoped lang="scss">

.sugar-file{
  position: fixed; left: 0; right: 0; top: 0; bottom: 0;
  background-color: rgba(0,0,0,.3); z-index: 2001;



  .table-detail {

    &::v-deep .el-table {
      border-bottom: 1px solid #DCDFE6 !important;
      border-top: 1px solid #DCDFE6 !important;
      background: transparent !important;
      .current-row{
        background: #eef7f2 !important;
      }
      tr{
        background: transparent !important;
        height: 36px !important;
        line-height: 36px !important;

        td, th{
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid #DCDFE6 !important;
        }
      }
    }
    &::v-deep .el-button{
      padding: 0 5px !important;
      height: 20px !important;
      line-height: 20px !important;
      font-size: 10px !important;
      margin-left: 5px !important;
    }

    .table-form{
      padding: 10px 200px; background-color: #FFFFFF;
      &::v-deep .el-button{
        padding: 0 10px !important;
        height: 32px !important;
        line-height: 32px !important;
        font-size: 14px !important;
      }
      &::v-deep .el-input__inner{
        height: 32px !important; line-height: 32px !important;
      }
    }
  }

  .content-pagination{
    &::v-deep .el-pagination__total{font-weight: bold !important;}
    &::v-deep .el-pagination{color: #536976 !important; padding: 0!important;}
    &::v-deep .el-input__inner{background: transparent !important; border-radius: 2px !important;
      &:hover { border-color: #8e9eab !important;}
    }
    &::v-deep .btn-prev, &::v-deep .btn-next, &::v-deep li{background: transparent !important; &:hover{ color: #2ebf91 !important;}}
    &::v-deep li.active{color: #2ebf91 !important;}
  }
}

.file-dialog{
  position: fixed; top: 100px; left: calc(50% - 720px); right: calc(50% - 720px); bottom: 100px; height: calc(100vh - 200px);
  z-index: 2022;
  background-color: #eef2f3;
  border-radius: 3px;
  box-shadow: 0 0 3px #2c3e50;

  .dialog-header{
    height: 32px; line-height: 32px;
    display: flex; flex-flow: row nowrap;
    text-align: center; font-weight: bold;
    border-bottom: 1px solid #DCDFE6;
    box-sizing: border-box;
    .header-logo{
      width: 48px;
      background: {
        image: url("../../assets/logo.svg");
        size: 48px 32px;
      };
    }
    .header-close{
      width: 32px; background-color: #bdc3c7; color: #ff6d6f; border-top-right-radius: 3px; cursor: pointer;
    }
    .header-title{
      flex-grow: 1; font-size: 15px;
    }
  }

  .dialog-content{
    height: calc(100% - 32px);
    overflow: auto;


    .content-query{
      height: 60px; border-bottom: 1px solid #DCDFE6; padding: 20px;

      .sugar-label-input{
        flex-grow: 1;
        margin: 0 10px;
      }
    }

    .content-table{
      height: calc(100% - 100px);

      .table-margin {
        height: 20px;
      }

      .table-detail{
        height: calc(100% - 20px);
        padding: 0 10px;
      }
    }

    .content-pagination{
      height: 32px; line-height: 32px; text-align: right; padding: 3px 5px 0 0;
    }
  }
}

.file-upload {
  position: relative;
  z-index: 2025;
  height: 100%;
  top: -100%;
  background-color: rgba(0,0,0,.1);

  .file-upload-dialog{
    position: relative;
    //height: 550px;
    width: 600px;
    background-color: #FFFFFF;
    top: 100px;
    left: calc(50% - 300px);
    padding: 10px 20px;
    border-radius: 3px;
    box-shadow: 0 0 3px #2c3e50;

    .sugar-label-input{
      margin-top: 20px;
      .label{
        width: 80px;
      }
    }

    &::v-deep .el-upload:focus{
      border-color: #2ebf91 !important;
      color: #2ebf91 !important;
      .el-upload-dragger{
        border-color: #2ebf91 !important;
      }
    }

    &::v-deep .el-upload-dragger{
      height: 100px !important;
      width: 300px !important;
      &:hover{
        border-color: #2ebf91 !important;
      }
      .el-icon-upload{
        line-height: 70px !important;
        font-size: 50px !important;
        margin: 0 !important;
      }
      .el-upload__text{
        em{
          color: #2ebf91 !important;
        }
      }
    }
    &::v-deep .el-upload__tip{
      margin: 0 !important;
      color: #ff6d6f !important;
    }
  }
}

</style>