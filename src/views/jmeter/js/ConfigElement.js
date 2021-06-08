import {AbstractHttp, AbstractTcp, AbstractTestElement, TestElements} from "@/views/jmeter/js/JmeterTestElement";

export function CSVDataSet(){
    AbstractTestElement.call(this, TestElements.CSVDataSet)
    this.filename = ''
    this.fileEncoding = ''
    this.variableNames = ''
    this.ignoreFirstLine = false
    this.delimiter = ','
    this.quotedData = false
    this.recycle = true
    this.stopThread = false
    this.shareMode = 'shareMode.all'
}


export function HeaderManager(){
    AbstractTestElement.call(this, TestElements.HeaderManager)
    this.headers = []
}


export function CookieManager(){
    AbstractTestElement.call(this, TestElements.CookieManager)
    this.cookies = []
    this.clearEachIteration = false
    this.controlledByThreadGroup = false
    this.policy = "standard"
}


export function CacheManager(){
    AbstractTestElement.call(this, TestElements.CacheManager)
    this.clearEachIteration = false
    this.controlledByThread = false
    this.useExpires = true
    this.maxSize = 5000
}


export function HttpDefaults(){
    AbstractHttp.call(this, TestElements.HttpDefaults)
}


export function BoltConnectionElement(){
    AbstractTestElement.call(this, TestElements.BoltConnectionElement)
    this.boltUri = "bolt://localhost:7687"
    this.username = "neo4j"
    this.password = ""
}


export function DNSCacheManage(){
    AbstractTestElement.call(this, TestElements.DNSCacheManager)
    this.clearEachIteration = false
    this.isCustomResolver = false
    this.servers = []
    this.hosts = []
}


export function FtpConfig(){
    AbstractTestElement.call(this, TestElements.FtpConfig)
    this.server = ''
    this.port = ''
    this.filename = ''
    this.localFilename = ''
    this.inputData = ''
    this.binaryMode = false
    this.saveResponse = false
    this.upload = false
}


export function AuthManager(){
    AbstractTestElement.call(this, TestElements.AuthManager)
    this.clearEachIteration = false
    this.controlledByThreadGroup = false
    this.authList = []
}


export function JDBCDataSource(){
    AbstractTestElement.call(this, TestElements.JDBCDataSource)
    this.dataSource = ''    // string 数据源名称
    this.poolMax = '0'  // string 最大连接数
    this.timeout = '10000' // string 连接超时
    this.trimInterval = '60000' // string eviction runs
    this.autocommit = true // bool auto commit
    this.transactionIsolation = 'DEFAULT' // string Transaction isolation
    this.preinit = false // bool preinit
    this.initQuery = '' // string sql 脚本
    this.keepAlive = true // bool test while idle
    this.connectionAge = '5000' // string
    this.checkQuery = '' // string validation query
    this.dbUrl = '' // string 数据库地址
    this.driver = '' // string 数据库驱动
    this.username = '' // 用户名
    this.password = '' // 密码
    this.connectionProperties = '' // 连接属性
}


export function JavaConfig(){
    AbstractTestElement.call(this, TestElements.JavaConfig)
    this.classname = "org.apache.jmeter.protocol.java.test.JavaTest"
    this.arguments = []
}


export function LDAP(){
    AbstractTestElement.call(this, TestElements.LdapExtConfig)

}


export function TCPConfig(){
    AbstractTcp.call(this, TestElements.TCPConfig)
}


export function KeystoreConfig(){
    AbstractTestElement.call(this, TestElements.KeystoreConfig)
    this.preload = 'True'
    this.clientCertAliasVarName = 'certAlias'
    this.startIndex = '0'
    this.endIndex = '-1'
}


export function Arguments(){
    AbstractTestElement.call(this, TestElements.Arguments)
    this.arguments = []
}


export function SimpleConfig(){
    AbstractTestElement.call(this, TestElements.SimpleConfig)
    this.arguments = [
        {id: 1, name: 'TestElement.name', value: '简单配置元件'},
        {id: 2, name: 'TestElement.gui_class', value: 'org.apache.jmeter.config.gui.SimpleConfigGui'},
        {id: 3, name: 'TestElement.test_class', value: 'org.apache.jmeter.config.ConfigTestElement'},
        {id: 4, name: 'TestElement.enabled', value: 'true'},
        {id: 5, name: 'TestPlan.comments', value: ''},
    ]
}


export function LoginConfig(){
    AbstractTestElement.call(this, TestElements.LoginConfig)
    this.username = ''
    this.password = ''
}


export function CounterConfig(){
    AbstractTestElement.call(this, TestElements.CounterConfig)
    this.incr = '' // string 递增
    this.end = '' // string 最大值
    this.format = '' // string 数字格式
    this.name = '' // string 引用名称
    this.perUser = false // bool 与每用户独立的跟踪计数器
    this.resetOnTgIteration = false // bool 在每个线程组上重置计数器
    this.start = '' // string 起始值
}


export function RandomVariableConfig(){
    AbstractTestElement.call(this, TestElements.RandomVariableConfig)
    this.variableName = '' // string 变量名称
    this.outputFormat = '' // string 输出格式
    this.minimumValue = '1' // string 最小值
    this.maximumValue = '' // string 最大值
    this.randomSeed = '' // string 随机种子
    this.perThread = false // bool 每线程
}