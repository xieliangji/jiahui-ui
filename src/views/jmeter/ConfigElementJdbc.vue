<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">Variable Name Bound to Pool</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Variable Name for created pool</div>
        <div class="input">
          <el-input v-model="element.dataSource"></el-input>
        </div>
      </div>
    </div>

    <div class="sugar-top-border">
      <div class="sugar-border-text">Connection Pool Configuration</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Max Number of Connections</div>
        <div class="input">
          <el-input v-model="element.poolMax"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Max Wait</div>
        <div class="input">
          <el-input v-model="element.timeout"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Time Between Eviction Runs(ms)</div>
        <div class="input">
          <el-input v-model="element.trimInterval"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Auto Commit</div>
        <div class="input">
          <el-select v-model="element.autocommit">
            <el-option :value="false" label="False"></el-option>
            <el-option :value="true" label="True"></el-option>
          </el-select>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Transaction Isolation</div>
        <div class="input">
          <el-select v-model="element.transactionIsolation">
            <el-option value="TRANSACTION_NONE" label="TRANSACTION_NONE"></el-option>
            <el-option value="TRANSACTION_READ_UNCOMMITTED" label="TRANSACTION_READ_UNCOMMITTED"></el-option>
            <el-option value="TRANSACTION_READ_COMMITTED" label="TRANSACTION_READ_COMMITTED"></el-option>
            <el-option value="TRANSACTION_SERIALIZABLE" label="TRANSACTION_SERIALIZABLE"></el-option>
            <el-option value="DEFAULT" label="DEFAULT"></el-option>
            <el-option value="TRANSACTION_REPEATABLE_READ" label="TRANSACTION_REPEATABLE_READ"></el-option>
          </el-select>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Preinit Pool</div>
        <div class="input">
          <el-select v-model="element.preinit">
            <el-option :value="false" label="False"></el-option>
            <el-option :value="true" label="True"></el-option>
          </el-select>
        </div>
      </div>
      <div class="sugar-normal-line" style="text-align: center;">Init SQL statements separated by new line</div>
      <div style="height: 200px">
        <jmeter-editor language="sql" :read-only="false" :script="element.initQuery" @scriptUpdate="handleSqlUpdate"></jmeter-editor>
      </div>
    </div>

    <div class="sugar-top-border">
      <div class="sugar-border-text">Connection Validation By Pool</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Test While Idle</div>
        <div class="input">
          <el-select v-model="element.keepAlive">
            <el-option :value="false" label="False"></el-option>
            <el-option :value="true" label="True"></el-option>
          </el-select>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Soft Min Evictable Idle Time(ms)</div>
        <div class="input">
          <el-input v-model="element.connectionAge"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Validation Query</div>
        <div class="input">
          <el-select v-model="element.checkQuery" placeholder="选择或自定义添加" filterable allow-create default-first-option>
            <el-option value="select 1 from INFORMATION_SCHEMA.SYSTEM_USERS"></el-option>
            <el-option value="select 1 from dual"></el-option>
            <el-option value="select 1 from sysibm.sysdummy1"></el-option>
            <el-option value="select 1"></el-option>
            <el-option value="select 1 from rdb$database"></el-option>
            <el-option value=""></el-option>
          </el-select>
        </div>
      </div>
    </div>

    <div class="sugar-top-border">
      <div class="sugar-border-text">Database Connection Configuration</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Database URL</div>
        <div class="input">
          <el-input v-model="element.dbUrl"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">JDBC Driver class</div>
        <div class="input">
          <el-select v-model="element.driver" placeholder="选择或自定义添加" filterable allow-create default-first-option>
            <el-option value="com.mysql.jdbc.Driver"></el-option>
            <el-option value="org.postgresql.Driver"></el-option>
            <el-option value="oracle.jdbc.OracleDriver"></el-option>
            <el-option value="com.ingres.jdbc.IngresDriver"></el-option>
            <el-option value="com.microsoft.sqlserver.jdbc.SQLServerDriver"></el-option>
            <el-option value="com.microsoft.jdbc.sqlserver.SQLServerDriver"></el-option>
            <el-option value="org.apache.derby.jdbc.ClientDriver"></el-option>
            <el-option value="org.hsqldb.jdbc.JDBCDriver"></el-option>
            <el-option value="com.ibm.db2.jcc.DB2Driver"></el-option>
            <el-option value="org.h2.Driver"></el-option>
            <el-option value="org.firebirds.jdbc.FBDriver"></el-option>
            <el-option value="org.mariadb.jdbc.Driver"></el-option>
            <el-option value="org.sqlite.JDBC"></el-option>
            <el-option value="net.sourceforge.jtds.jdbc.Driver"></el-option>
            <el-option value="com.exasol.jdbc.EXADriver"></el-option>
          </el-select>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Username</div>
        <div class="input">
          <el-input v-model="element.username"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Password</div>
        <div class="input">
          <el-input type="password" v-model="element.password"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
      <div class="label">Connection Properties</div>
      <div class="input">
        <el-input v-model="element.connectionProperties"></el-input>
      </div>
    </div>

    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "ConfigElementJdbc",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleSqlUpdate(sql){
      this.element.initQuery = sql
    }
  }
}
</script>

<style scoped>
.label{
  width: 270px !important;
}
</style>