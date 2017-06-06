<template>
<div class="wrapper">
  <el-row>
    <el-col :span="24">
      <el-card class="page-container">
        <el-form ref="form" v-model="wsForm" label-width="160px">
          <el-row>
            <el-col :span="8">
              <el-form-item>
                <el-button type="primary" @click="startWsPerformanceExecute" :disabled="wsForm.disabled">开始测试</el-button>
                <el-button :disabled="!wsForm.disabled" @click="endWsPerformanceExecute">停止</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="14" :offset="2">
              <el-button type="primary" @click="wsForm.dialogFormAddReqResVisible = true" :disabled="wsForm.disabled">添加请求响应</el-button>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="URL">
                <el-input v-model="wsForm.url" :disabled="wsForm.disabled"></el-input>
              </el-form-item>
              <el-form-item label="连接数">
                <el-input-number style="width:100%" v-model="wsForm.maxConnections" :disabled="wsForm.disabled" :min="1" :max="1000"></el-input-number>
              </el-form-item>
              <el-form-item label="添加首次连接发送消息">
                <el-input placeholder="请输入信息" icon="plus" v-model="wsForm.firstConnMessage" :disabled="wsForm.disabled" :on-icon-click="handleAddFirstConnMessageClick">
                </el-input>
                <div class="">
                  <el-tag :key="messageTag" v-for="messageTag in wsForm.firstConnMessageLst" :closable="true" :close-transition="false" @close="handleFirstMessageTagClose(messageTag)">
                    {{messageTag}}
                  </el-tag>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="14" :offset="2">

              <el-table :data="wsForm.messageTableData" style="width: 100%" height="250">
                <el-table-column prop="msgResponse" label="接收信息" width="250">
                </el-table-column>
                <el-table-column prop="msgRequest" label="请求信息" width="250">
                </el-table-column>
                <el-table-column label="操作">
                  <template scope="scope">
                    <el-button
                      size="small"
                      @click="handleMessageEdit(scope.$index, scope.row)" :disabled="wsForm.disabled">编辑</el-button>
                    <el-button
                      size="small"
                      type="danger"
                      @click="handleMessageDelete(scope.$index, scope.row)" :disabled="wsForm.disabled">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>



          <!-- 编辑请求响应信息对话框 -->
          <el-dialog title="添加请求响应信息" :visible.sync="wsForm.dialogFormEditReqResVisible">
            <el-form :model="wsForm.dialogEditReqResForm" label-width="80px">
              <el-form-item label="接收信息">
                <el-input v-model="wsForm.dialogEditReqResForm.msgResponse"></el-input>
              </el-form-item>
              <el-form-item label="请求信息">
                <el-input v-model="wsForm.dialogEditReqResForm.msgRequest"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="wsForm.dialogFormEditReqResVisible = false">取 消</el-button>
              <el-button type="primary" @click="handleTableEditReqRes">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 编辑请求响应信息对话框 -->

          <!-- 添加请求响应信息对话框 -->
          <el-dialog title="编辑请求响应信息" :visible.sync="wsForm.dialogFormAddReqResVisible">
            <el-form :model="wsForm.dialogAddReqResForm" label-width="80px">
              <el-form-item label="接收信息">
                <el-input v-model="wsForm.dialogAddReqResForm.msgResponse"></el-input>
              </el-form-item>
              <el-form-item label="请求信息">
                <el-input v-model="wsForm.dialogAddReqResForm.msgRequest"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="wsForm.dialogFormAddReqResVisible = false">取 消</el-button>
              <el-button type="primary" @click="handleTableAddReqRes">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 添加请求响应信息对话框 -->

        </el-form>
      </el-card>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-card>
        <div slot="header">
          <span>测试结果</span>
        </div>
      </el-card>
    </el-col>
  </el-row>


</div>
</template>

<script>
export default {
  name: 'WsPerformance',
  data() {
    return {
      wsForm: {
        disabled: false,
        url: '',
        maxConnections: 500,
        firstConnMessage: '',
        messageTableData: [],
        firstConnMessageLst: [],
        dialogFormAddReqResVisible: false,
        dialogAddReqResForm: {
          msgRequest: '',
          msgResponse: ''
        },
        dialogFormEditReqResVisible: false,
        dialogEditReqResForm: {
          msgRequest: '',
          msgResponse: '',
          index: '',
        }
      },
      wsData: {
        url: '',
        maxConnections: '',
        firstConnMessageLst: [],
        reqResMessageLst: {}
      }
    }
  },
  methods: {
    endWsPerformanceExecute() {
      this.wsForm.disabled = false;

      //url
      var url = this.wsForm.url;
      if (this.isEmpty(url)) {
        this.$message('url为空');
        return false;
      }
      this.wsData.url = url;

      //maxConnections
      var maxConnections = this.wsForm.maxConnections;
      if (this.isEmpty(maxConnections)) {
        this.$message('最大连接数为空')
      }


      //开始测试



    },
    startWsPerformanceExecute() {
      this.wsForm.disabled = true;
    },
    handleTableEditReqRes() { //编辑对话框
      var msgResponse = this.wsForm.dialogEditReqResForm.msgResponse;
      var msgRequest = this.wsForm.dialogEditReqResForm.msgRequest;
      var index = this.wsForm.dialogEditReqResForm.index;
      if (this.isEmpty(msgResponse) || this.isEmpty(msgRequest)) {
        this.$message('请输入内容');
        return false;
      }
      if (!this.isJsonString(msgResponse)) {
        this.$message('请输入JSON格式字符串');
        return false;
      }

      this.wsForm.dialogFormEditReqResVisible = false;
      this.wsForm.messageTableData[index].msgResponse = msgResponse;
      this.wsForm.messageTableData[index].msgRequest = msgRequest;

      this.$forceUpdate();
      console.log(this.wsForm.messageTableData);
    },
    handleTableAddReqRes() { //添加对话框
      var msgResponse = this.wsForm.dialogAddReqResForm.msgResponse;
      var msgRequest = this.wsForm.dialogAddReqResForm.msgRequest;
      if (this.isEmpty(msgResponse) || this.isEmpty(msgRequest)) {
        this.$message('请输入内容');
        return false;
      }
      if (!this.isJsonString(msgResponse)) {
        this.$message('请输入JSON格式字符串');
        return false;
      }

      this.wsForm.dialogFormAddReqResVisible = false;
      this.wsForm.messageTableData.push({
        msgResponse: msgResponse,
        msgRequest: msgRequest
      })
    },
    handleFirstMessageTagClose(messageTag) {
      this.wsForm.firstConnMessageLst.splice(this.wsForm.firstConnMessageLst.indexOf(messageTag), 1);
    },
    handleMessageEdit(index, row) {
      console.log(index, row);
      this.wsForm.dialogFormEditReqResVisible = true;
      this.wsForm.dialogEditReqResForm = {
        index: index,
        msgRequest: row['msgRequest'],
        msgResponse: row['msgResponse'],
      }
    },
    handleMessageDelete(index, row) {
      console.log(index, row);
    },
    handleAddFirstConnMessageClick(e) {
      var messageTag = this.wsForm.firstConnMessage;
      if (this.isEmpty(messageTag)) {
        this.$message('请输入内容');
        return false;
      }
      if (!this.isJsonString(messageTag)) {
        this.$message('请输入JSON格式字符串');
        return false;
      }
      this.wsForm.firstConnMessageLst.push(messageTag);
      this.$message('添加首次连接发送消息');
      console.log(JSON.parse(messageTag));
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 15px;
}

.page-container {
  /*margin: 10px 16px;*/
  width: 100%;
  background-color: #FFFFFF;
}
</style>
