import Store from '../../../store/index'

export const JC = {
    TestPlan: 'TESTPLAN',
    ThreadGroup: 'THREADGROUP',
    Controller: 'CONTROLLER',
    Sampler: 'SAMPLER',
    ConfigElement: 'CONFIGELEMENT',
    Preprocessor: 'PREPROCESSOR',
    Postprocessor: 'POSTPROCESSOR',
    Assertion: 'ASSERTION',
    Timer: 'TIMER',
    Listener: 'LISTENER'
}

export const JT = {
    TestPlan: 'TestPlan',

    /** ThreadGroups */
    SetupThreadGroup: "SetupThreadGroup",
    PostThreadGroup: "PostThreadGroup",
    ThreadGroup: "ThreadGroup",
    ArrivalsThreadGroup: 'ArrivalsThreadGroup',

    /** Controllers */
    IfController: "IfController",
    TransactionController: "TransactionController",
    LoopController: "LoopController",
    WhileController: "WhileController",
    ForeachController: "ForeachController",
    IncludeController: "IncludeController",
    RunTime: "RunTime",
    CriticalSectionController: "CriticalSectionController",
    InterleaveControl: "InterleaveControl",
    OnceOnlyController: "OnceOnlyController",
    RecordingController: "RecordingController",
    GenericController: "GenericController",
    RandomController: "RandomController",
    RandomOrderController: "RandomOrderController",
    ThroughputController: "ThroughputController",
    SwitchController: "SwitchController",
    ModuleController: "ModuleController",

    /** Sampler */
    HttpTestSample: "HttpTestSample",
    TestAction: "TestAction",
    DebugSampler: "DebugSampler",
    JSR223Sampler: "JSR223Sampler",
    AjpSampler: "AjpSampler",
    AccessLogSampler: "AccessLogSampler",
    BeanShellSampler: "BeanShellSampler",
    BoltSampler: "BoltSampler",
    FTPSampler: "FTPSampler",
    GraphQLHTTPSampler: "GraphQLHTTPSampler",
    JDBCSampler: "JDBCSampler",
    PublisherSampler: "PublisherSampler",
    JMSSampler: "JMSSampler",
    SubscriberSampler: "SubscriberSampler",
    JUnitSampler: "JUnitSampler",
    JavaSampler: "JavaSampler",
    LDAPExtSampler: "LDAPExtSampler",
    LDAPSampler: "LDAPSampler",
    SystemSampler: "SystemSampler",
    SmtpSampler: "SmtpSampler",
    TCPSampler: "TCPSampler",
    MailReaderSampler: "MailReaderSampler",


    /** Config Element */
    CSVDataSet: "CSVDataSet",
    HeaderManager: "HeaderManager",
    CookieManager: "CookieManager",
    CacheManager: "CacheManager",
    HttpDefaults: "HttpDefaults",
    BoltConnectionElement: "BoltConnectionElement",
    DNSCacheManager: "DNSCacheManager",
    FtpConfig: "FtpConfig",
    AuthManager: "AuthManager",
    JDBCDataSource: "JDBCDataSource",
    JavaConfig: "JavaConfig",
    LdapExtConfig: "LdapExtConfig",
    LdapConfig: "LdapConfig",
    TCPConfig: "TCPConfig",
    KeystoreConfig: "KeystoreConfig",
    Arguments: "Arguments",
    LoginConfig: "LoginConfig",
    SimpleConfig: "SimpleConfig",
    CounterConfig: "CounterConfig",
    RandomVariableConfig: "RandomVariableConfig",

    // 前置处理器
    JSR223PreProcessor: "JSR223PreProcessor",
    UserParameters: "UserParameters",
    AnchorModifier: "AnchorModifier",
    URLRewritingModifier: "URLRewritingModifier",
    JDBCPreProcessor: "JDBCPreProcessor",
    SampleTimeout: "SampleTimeout",
    RegExUserParameters: "RegExUserParameters",
    BeanShellPreProcessor: "BeanShellPreProcessor",

    // 后置处理器
    HtmlExtractor: "HtmlExtractor",
    JMESPathExtractor: "JMESPathExtractor",
    JSONPostProcessor: "JSONPostProcessor",
    RegexExtractor: "RegexExtractor",
    BoundaryExtractor: "BoundaryExtractor",
    JSR223PostProcessor: "JSR223PostProcessor",
    JDBCPostProcessor: "JDBCPostProcessor",
    XPath2Extractor: "XPath2Extractor",
    XPathExtractor: "XPathExtractor",
    ResultAction: "ResultAction",
    DebugPostProcessor: "DebugPostProcessor",
    BeanShellPostProcessor: "BeanShellPostProcessor",

    // 断言
    ResponseAssertion: "ResponseAssertion",
    JSONPathAssertion: "JSONPathAssertion",
    SizeAssertion: "SizeAssertion",
    JSR223Assertion: "JSR223Assertion",
    XPath2Assertion: "XPath2Assertion",
    HTMLAssertion: "HTMLAssertion",
    JMESPathAssertion: "JMESPathAssertion",
    MD5HexAssertion: "MD5HexAssertion",
    SMIMEAssertion: "SMIMEAssertion",
    XMLSchemaAssertion: "XMLSchemaAssertion",
    XMLAssertion: "XMLAssertion",
    XPathAssertion: "XPathAssertion",
    DurationAssertion: "DurationAssertion",
    CompareAssertion: "CompareAssertion",
    BeanShellAssertion: "BeanShellAssertion",

    // 定时器
    ConstantTimer: "ConstantTimer",
    UniformRandomTimer: "UniformRandomTimer",
    PreciseThroughputTimer: "PreciseThroughputTimer",
    ConstantThroughputTimer: "ConstantThroughputTimer",
    JSR223Timer: "JSR223Timer",
    SyncTimer: "SyncTimer",
    PoissonRandomTimer: "PoissonRandomTimer",
    GaussianRandomTimer: "GaussianRandomTimer",
    BeanShellTimer: "BeanShellTimer",


}


export const JL = {
    TestPlan: "测试计划",

    SetupThreadGroup: "setUp线程组",
    PostThreadGroup: "tearDown线程组",
    ThreadGroup: "线程组",

    IfController: "如果（If）控制器",
    TransactionController: "事务控制器",
    LoopController: "循环控制器",
    WhileController: "While控制器",
    ForeachController: "ForEach控制器",
    IncludeController: "Include控制器",
    RunTime: "Runtime控制器",
    CriticalSectionController: "临界部分控制器",
    InterleaveControl: "交替控制器",
    OnceOnlyController: "仅一次控制器",
    RecordingController: "录制控制器",
    GenericController: "简单控制器",
    RandomController: "随机控制器",
    RandomOrderController: "随机顺序控制器",
    ThroughputController: "吞吐量控制器",
    SwitchController: "Switch控制器",
    ModuleController: "模块控制器",

    HttpTestSample: "HTTP请求",
    TestAction: "测试活动",
    DebugSampler: "调试取样器",
    JSR223Sampler: "JSR223 Sampler",
    AjpSampler: "AJP/1.3 取样器",
    AccessLogSampler: "Access Log Sampler",
    BeanShellSampler: "BeanShell 取样器",
    BoltSampler: "Bolt Request",
    FTPSampler: "FTP请求",
    GraphQLHTTPSampler: "GraphQL HTTP Request",
    JDBCSampler: "JDBC Request",
    PublisherSampler: "JMS发布",
    JMSSampler: "JMS点到点",
    SubscriberSampler: "JMS订阅",
    JUnitSampler: "JUnit请求",
    JavaSampler: "Java请求",
    LDAPExtSampler: "LDAP扩展请求默认值",
    LDAPSampler: "LDAP请求",
    SystemSampler: "OS进程取样器",
    SmtpSampler: "SMTP取样器",
    TCPSampler: "TCP取样器",
    MailReaderSampler: "邮件阅读者取样器",

    CSVDataSet: "CSV 数据文件设置",
    HeaderManager: "HTTP信息头管理器",
    CookieManager: "HTTP Cookie管理器",
    CacheManager: "HTTP缓存管理器",
    HttpDefaults: "HTTP请求默认值",
    BoltConnectionElement: "Bolt Connection Configuration",
    DNSCacheManager: "DNS缓存管理器",
    FtpConfig: "FTP默认请求",
    AuthManager: "HTTP授权管理器",
    JDBCDataSource: "JDBC Connection Configuration",
    JavaConfig: "Java默认请求",
    LdapExtConfig: "LDAP扩展请求默认值",
    LdapConfig: "LDAP默认请求",
    TCPConfig: "TCP取样器配置",
    KeystoreConfig: "密钥库配置",
    Arguments: "用户定义的变量",
    LoginConfig: "登陆配置元件/素",
    SimpleConfig: "简单配置元件",
    CounterConfig: "计数器",
    RandomVariableConfig: "随机变量",

    JSR223PreProcessor: "JSR223 预处理程序",
    UserParameters: "用户参数",
    AnchorModifier: "HTML链接解析器",
    URLRewritingModifier: "HTTP URL 重写修饰符",
    JDBCPreProcessor: "JDBC 预处理程序",
    SampleTimeout: "取样器超时",
    RegExUserParameters: "正则表达式用户参数",
    BeanShellPreProcessor: "BeanShell 预处理程序",

    HtmlExtractor: "CSS/JQuery提取器",
    JMESPathExtractor: "JSON JMESPath Extractor",
    JSONPostProcessor: "JSON提取器",
    RegexExtractor: "正则表达式提取器",
    BoundaryExtractor: "边界提取器",
    JSR223PostProcessor: "JSR223 后置处理程序",
    JDBCPostProcessor: "JDBC 后置处理程序",
    XPath2Extractor: "XPath2 Extractor",
    XPathExtractor: "XPath提取器",
    ResultAction: "结果状态处理器",
    DebugPostProcessor: "调试后置处理程序",
    BeanShellPostProcessor: "BeanShell 后置处理程序",

    ResponseAssertion: "响应断言",
    JSONPathAssertion: "JSON断言",
    SizeAssertion: "大小断言",
    JSR223Assertion: "JSR223 断言",
    XPath2Assertion: "XPath2 Assertion",
    HTMLAssertion: "HTML断言",
    JMESPathAssertion: "JSON JMESPath Assertion",
    MD5HexAssertion: "MD5Hex断言",
    SMIMEAssertion: "SMIME断言",
    XMLSchemaAssertion: "XML Schema断言",
    XMLAssertion: "XML断言",
    XPathAssertion: "XPath断言",
    DurationAssertion: "断言持续时间",
    CompareAssertion: "比较断言",
    BeanShellAssertion: "BeanShell断言",

    ConstantTimer: "固定定时器",
    UniformRandomTimer: "统一随机定时器",
    PreciseThroughputTimer: "准确的吞吐量定时器",
    ConstantThroughputTimer: "常数吞吐量定时器",
    JSR223Timer: "JSR223 定时器",
    SyncTimer: "同步定时器",
    PoissonRandomTimer: "泊松随机定时器",
    GaussianRandomTimer: "高斯随机定时器",
    BeanShellTimer: "BeanShell 定时器",
}


export const TestElements = {
    Element: {category: '', type: '', guiclass: '', testclass: '', label: ''},

    // 测试计划
    TestPlan: {category: JC.TestPlan, type: JT.TestPlan, guiclass: 'TestPlanGui', testclass: 'TestPlan', label: '测试计划'},

    // 线程组
    SetupThreadGroup: {category: JC.ThreadGroup, type: JT.SetupThreadGroup, guiclass: "SetupThreadGroupGui", testclass: "SetupThreadGroup", label: JL.SetupThreadGroup},
    PostThreadGroup: {category: JC.ThreadGroup, type: JT.PostThreadGroup, guiclass: "PostThreadGroupGui", testclass: "PostThreadGroup", label: JL.PostThreadGroup},
    ThreadGroup: {category: JC.ThreadGroup, type: JT.ThreadGroup, guiclass: "ThreadGroupGui", testclass: "ThreadGroup", label: JL.ThreadGroup},

    // 控制器
    IfController: {category: JC.Controller, type: JT.IfController, guiclass: "IfControllerPanel", testclass: "IfController", label: JL.IfController},
    TransactionController: {category: JC.Controller, type: JT.TransactionController, guiclass: "TransactionControllerGui", testclass: "TransactionController", label: JL.TransactionController},
    LoopController: {category: JC.Controller, type: JT.LoopController, guiclass: "LoopControlPanel", testclass: "LoopController", label: JL.LoopController},
    WhileController: {category: JC.Controller, type: JT.WhileController, guiclass: "WhileControllerGui", testclass: "WhileController", label: JL.WhileController},
    ForeachController: {category: JC.Controller, type: JT.ForeachController, guiclass: "ForeachControlPanel", testclass: "ForeachController", label: JL.ForeachController},
    IncludeController: {category: JC.Controller, type: JT.IncludeController, guiclass: "IncludeControllerGui", testclass: "IncludeController", label: JL.IncludeController},
    RunTime: {category: JC.Controller, type: JT.RunTime, guiclass: "RunTimeGui", testclass: "RunTime", label: JL.RunTime},
    CriticalSectionController: {category: JC.Controller, type: JT.CriticalSectionController, guiclass: "CriticalSectionControllerGui", testclass: "CriticalSectionController", label: JL.CriticalSectionController},
    InterleaveControl: {category: JC.Controller, type: JT.InterleaveControl, guiclass: "InterleaveControlGui", testclass: "InterleaveControl", label: JL.InterleaveControl},
    OnceOnlyController: {category: JC.Controller, type: JT.OnceOnlyController, guiclass: "OnceOnlyControllerGui", testclass: "OnceOnlyController", label: JL.OnceOnlyController},
    RecordingController: {category: JC.Controller, type: JT.RecordingController, guiclass: "RecordController", testclass: "RecordingController", label: JL.RecordingController},
    GenericController: {category: JC.Controller, type: JT.GenericController, guiclass: "LogicControllerGui", testclass: "GenericController", label: JL.GenericController},
    RandomController: {category: JC.Controller, type: JT.RandomController, guiclass: "RandomControlGui", testclass: "RandomController", label: JL.RandomController},
    RandomOrderController: {category: JC.Controller, type: JT.RandomOrderController, guiclass: "RandomOrderControllerGui", testclass: "RandomOrderController", label: JL.RandomOrderController},
    ThroughputController: {category: JC.Controller, type: JT.ThroughputController, guiclass: "ThroughputControllerGui", testclass: "ThroughputController", label: JL.ThroughputController},
    SwitchController: {category: JC.Controller, type: JT.SwitchController, guiclass: "SwitchControllerGui", testclass: "SwitchController", label: JL.SwitchController},
    ModuleController: {category: JC.Controller, type: JT.ModuleController, guiclass: "ModuleControllerGui", testclass: "ModuleController", label: JL.ModuleController},

    // 取样器
    HttpTestSample: {category: JC.Sampler, type: JT.HttpTestSample, guiclass: "HttpTestSampleGui", testclass: "HTTPSamplerProxy", label: JL.HttpTestSample},
    TestAction: {category: JC.Sampler, type: JT.TestAction, guiclass: "TestActionGui", testclass: "TestAction", label: JL.TestAction},
    DebugSampler: {category: JC.Sampler, type: JT.DebugSampler, guiclass: "TestBeanGUI", testclass: "DebugSampler", label: JL.DebugSampler},
    JSR223Sampler: {category: JC.Sampler, type: JT.JSR223Sampler, guiclass: "TestBeanGUI", testclass: "JSR223Sampler", label: JL.JSR223Sampler},
    AjpSampler: {category: JC.Sampler, type: JT.AjpSampler, guiclass: "AjpSamplerGui", testclass: "AjpSampler", label: JL.AjpSampler},
    AccessLogSampler: {category: JC.Sampler, type: JT.AccessLogSampler, guiclass: "TestBeanGUI", testclass: "AccessLogSampler", label: JL.AccessLogSampler},
    BeanShellSampler: {category: JC.Sampler, type: JT.BeanShellSampler, guiclass: "BeanShellSamplerGui", testclass: "BeanShellSampler", label: JL.BeanShellSampler},
    BoltSampler: {category: JC.Sampler, type: JT.BoltSampler, guiclass: "TestBeanGUI", testclass: "BoltSampler", label: JL.BoltSampler},
    FTPSampler: {category: JC.Sampler, type: JT.FTPSampler, guiclass: "FtpTestSamplerGui", testclass: "FTPSampler", label: JL.FTPSampler},
    GraphQLHTTPSampler: {category: JC.Sampler, type: JT.GraphQLHTTPSampler, guiclass: "GraphQLHTTPSamplerGui", testclass: "HTTPSamplerProxy", label: JL.GraphQLHTTPSampler},
    JDBCSampler: {category: JC.Sampler, type: JT.JDBCSampler, guiclass: "TestBeanGUI", testclass: "JDBCSampler", label: JL.JDBCSampler},
    PublisherSampler: {category: JC.Sampler, type: JT.PublisherSampler, guiclass: "JMSPublisherGui", testclass: "PublisherSampler", label: JL.PublisherSampler},
    JMSSampler: {category: JC.Sampler, type: JT.JMSSampler, guiclass: "JMSSamplerGui", testclass: "JMSSampler", label: JL.JMSSampler},
    SubscriberSampler: {category: JC.Sampler, type: JT.SubscriberSampler, guiclass: "JMSSubscriberGui", testclass: "SubscriberSampler", label: JL.SubscriberSampler},
    JUnitSampler: {category: JC.Sampler, type: JT.JUnitSampler, guiclass: "JUnitTestSamplerGui", testclass: "JUnitSampler", label: JL.JUnitSampler},
    JavaSampler: {category: JC.Sampler, type: JT.JavaSampler, guiclass: "JavaTestSamplerGui", testclass: "JavaSampler", label: JL.JavaSampler},
    LDAPExtSampler: {category: JC.Sampler, type: JT.LDAPExtSampler, guiclass: "LdapExtTestSamplerGui", testclass: "LDAPExtSampler", label: JL.LDAPExtSampler},
    LDAPSampler: {category: JC.Sampler, type: JT.LDAPSampler, guiclass: "LdapTestSamplerGui", testclass: "LDAPSampler", label: JL.LDAPSampler},
    SystemSampler: {category: JC.Sampler, type: JT.SystemSampler, guiclass: "SystemSamplerGui", testclass: "SystemSampler", label: JL.SystemSampler},
    SmtpSampler: {category: JC.Sampler, type: JT.SmtpSampler, guiclass: "SmtpSamplerGui", testclass: "SmtpSampler", label: JL.SmtpSampler},
    TCPSampler: {category: JC.Sampler, type: JT.TCPSampler, guiclass: "TCPSamplerGui", testclass: "TCPSampler", label: JL.TCPSampler},
    MailReaderSampler: {category: JC.Sampler, type: JT.MailReaderSampler, guiclass: "MailReaderSamplerGui", testclass: "MailReaderSampler", label: JL.MailReaderSampler},

    // 配置元素
    CSVDataSet: {category: JC.ConfigElement, type: JT.CSVDataSet, guiclass: "TestBeanGUI", testclass: "CSVDataSet", label: JL.CSVDataSet},
    HeaderManager: {category: JC.ConfigElement, type: JT.HeaderManager, guiclass: "HeaderPanel", testclass: "HeaderManager", label: JL.HeaderManager},
    CookieManager: {category: JC.ConfigElement, type: JT.CookieManager, guiclass: "CookiePanel", testclass: "CookieManager", label: JL.CookieManager},
    CacheManager: {category: JC.ConfigElement, type: JT.CacheManager, guiclass: "CacheManagerGui", testclass: "CacheManager", label: JL.CacheManager},
    HttpDefaults: {category: JC.ConfigElement, type: JT.HttpDefaults, guiclass: "HttpDefaultsGui", testclass: "ConfigTestElement", label: JL.HttpDefaults},
    BoltConnectionElement: {category: JC.ConfigElement, type: JT.BoltConnectionElement, guiclass: "TestBeanGUI", testclass: "BoltConnectionElement", label: JL.BoltConnectionElement},
    DNSCacheManager: {category: JC.ConfigElement, type: JT.DNSCacheManager, guiclass: "DNSCachePanel", testclass: "DNSCacheManager", label: JL.DNSCacheManager},
    FtpConfig: {category: JC.ConfigElement, type: JT.FtpConfig, guiclass: "FtpConfigGui", testclass: "ConfigTestElement", label: JL.FtpConfig},
    AuthManager: {category: JC.ConfigElement, type: JT.AuthManager, guiclass: "AuthPanel", testclass: "AuthManager", label: JL.AuthManager},
    JDBCDataSource: {category: JC.ConfigElement, type: JT.JDBCDataSource, guiclass: "TestBeanGUI", testclass: "JDBCDataSource", label: JL.JDBCDataSource},
    JavaConfig: {category: JC.ConfigElement, type: JT.JavaConfig, guiclass: "JavaConfigGui", testclass: "JavaConfig", label: JL.JavaConfig},
    LdapExtConfig: {category: JC.ConfigElement, type: JT.LdapExtConfig, guiclass: "LdapExtConfigGui", testclass: "ConfigTestElement", label: JL.LdapExtConfig},
    LdapConfig: {category: JC.ConfigElement, type: JT.LdapConfig, guiclass: "LdapConfigGui", testclass: "ConfigTestElement", label: JL.LdapConfig},
    TCPConfig: {category: JC.ConfigElement, type: JT.TCPConfig, guiclass: "TCPConfigGui", testclass: "ConfigTestElement", label: JL.TCPConfig},
    KeystoreConfig: {category: JC.ConfigElement, type: JT.KeystoreConfig, guiclass: "TestBeanGUI", testclass: "KeystoreConfig", label: JL.KeystoreConfig},
    Arguments: {category: JC.ConfigElement, type: JT.Arguments, guiclass: "ArgumentsPanel", testclass: "Arguments", label: JL.Arguments},
    LoginConfig: {category: JC.ConfigElement, type: JT.LoginConfig, guiclass: "LoginConfigGui", testclass: "ConfigTestElement", label: JL.LoginConfig},
    SimpleConfig: {category: JC.ConfigElement, type: JT.SimpleConfig, guiclass: "SimpleConfigGui", testclass: "ConfigTestElement", label: JL.SimpleConfig},
    CounterConfig: {category: JC.ConfigElement, type: JT.CounterConfig, guiclass: "CounterConfigGui", testclass: "CounterConfig", label: JL.CounterConfig},
    RandomVariableConfig: {category: JC.ConfigElement, type: JT.RandomVariableConfig, guiclass: "TestBeanGUI", testclass: "RandomVariableConfig", label: JL.RandomVariableConfig},

    // 前置处理器
    JSR223PreProcessor: {category: JC.Preprocessor, type: JT.JSR223PreProcessor, guiclass: "TestBeanGUI", testclass: "JSR223PreProcessor", label: JL.JSR223PreProcessor},
    UserParameters: {category: JC.Preprocessor, type: JT.UserParameters, guiclass: "UserParametersGui", testclass: "UserParameters", label: JL.UserParameters},
    AnchorModifier: {category: JC.Preprocessor, type: JT.AnchorModifier, guiclass: "AnchorModifierGui", testclass: "AnchorModifier", label: JL.AnchorModifier},
    URLRewritingModifier: {category: JC.Preprocessor, type: JT.URLRewritingModifier, guiclass: "URLRewritingModifierGui", testclass: "URLRewritingModifier", label: JL.URLRewritingModifier},
    JDBCPreProcessor: {category: JC.Preprocessor, type: JT.JDBCPreProcessor, guiclass: "TestBeanGUI", testclass: "JDBCPreProcessor", label: JL.JDBCPreProcessor},
    SampleTimeout: {category: JC.Preprocessor, type: JT.SampleTimeout, guiclass: "SampleTimeoutGui", testclass: "SampleTimeout", label: JL.SampleTimeout},
    RegExUserParameters: {category: JC.Preprocessor, type: JT.RegExUserParameters, guiclass: "RegExUserParametersGui", testclass: "RegExUserParameters", label: JL.RegExUserParameters},
    BeanShellPreProcessor: {category: JC.Preprocessor, type: JT.BeanShellPreProcessor, guiclass: "TestBeanGUI", testclass: "BeanShellPreProcessor", label: JL.BeanShellPreProcessor},

    // 后置处理器
    HtmlExtractor: {category: JC.Postprocessor, type: JT.HtmlExtractor, guiclass: "HtmlExtractorGui", testclass: "HtmlExtractor", label: JL.HtmlExtractor},
    JMESPathExtractor: {category: JC.Postprocessor, type: JT.JMESPathExtractor, guiclass: "JMESPathExtractorGui", testclass: "JMESPathExtractor", label: JL.JMESPathExtractor},
    JSONPostProcessor: {category: JC.Postprocessor, type: JT.JSONPostProcessor, guiclass: "JSONPostProcessorGui", testclass: "JSONPostProcessor", label: JL.JSONPostProcessor},
    RegexExtractor: {category: JC.Postprocessor, type: JT.RegexExtractor, guiclass: "RegexExtractorGui", testclass: "RegexExtractor", label: JL.RegexExtractor},
    BoundaryExtractor: {category: JC.Postprocessor, type: JT.BoundaryExtractor, guiclass: "BoundaryExtractorGui", testclass: "BoundaryExtractor", label: JL.BoundaryExtractor},
    JSR223PostProcessor: {category: JC.Postprocessor, type: JT.JSR223PostProcessor, guiclass: "TestBeanGUI", testclass: "JSR223PostProcessor", label: JL.JSR223PostProcessor},
    JDBCPostProcessor: {category: JC.Postprocessor, type: JT.JDBCPostProcessor, guiclass: "TestBeanGUI", testclass: "JDBCPostProcessor", label: JL.JDBCPostProcessor},
    XPath2Extractor: {category: JC.Postprocessor, type: JT.XPath2Extractor, guiclass: "XPath2ExtractorGui", testclass: "XPath2Extractor", label: JL.XPath2Extractor},
    XPathExtractor: {category: JC.Postprocessor, type: JT.XPathExtractor, guiclass: "XPathExtractorGui", testclass: "XPathExtractor", label: JL.XPathExtractor},
    ResultAction: {category: JC.Postprocessor, type: JT.ResultAction, guiclass: "ResultActionGui", testclass: "ResultAction", label: JL.ResultAction},
    DebugPostProcessor: {category: JC.Postprocessor, type: JT.DebugPostProcessor, guiclass: "TestBeanGUI", testclass: "DebugPostProcessor", label: JL.DebugPostProcessor},
    BeanShellPostProcessor: {category: JC.Postprocessor, type: JT.BeanShellPostProcessor, guiclass: "TestBeanGUI", testclass: "BeanShellPostProcessor", label: JL.BeanShellPostProcessor},

    // 断言
    ResponseAssertion: {category: JC.Assertion, type: JT.ResponseAssertion, guiclass: "AssertionGui", testclass: "ResponseAssertion", label: JL.ResponseAssertion},
    JSONPathAssertion: {category: JC.Assertion, type: JT.JSONPathAssertion, guiclass: "JSONPathAssertionGui", testclass: "JSONPathAssertion", label: JL.JSONPathAssertion},
    SizeAssertion: {category: JC.Assertion, type: JT.SizeAssertion, guiclass: "SizeAssertionGui", testclass: "SizeAssertion", label: JL.SizeAssertion},
    JSR223Assertion: {category: JC.Assertion, type: JT.JSR223Assertion, guiclass: "TestBeanGUI", testclass: "JSR223Assertion", label: JL.JSR223Assertion},
    XPath2Assertion: {category: JC.Assertion, type: JT.XPath2Assertion, guiclass: "XPath2AssertionGui", testclass: "XPath2Assertion", label: JL.XPath2Assertion},
    HTMLAssertion: {category: JC.Assertion, type: JT.HTMLAssertion, guiclass: "HTMLAssertionGui", testclass: "HTMLAssertion", label: JL.HTMLAssertion},
    JMESPathAssertion: {category: JC.Assertion, type: JT.JMESPathAssertion, guiclass: "JMESPathAssertionGui", testclass: "JMESPathAssertion", label: JL.JMESPathAssertion},
    MD5HexAssertion: {category: JC.Assertion, type: JT.MD5HexAssertion, guiclass: "MD5HexAssertionGUI", testclass: "MD5HexAssertion", label: JL.MD5HexAssertion},
    SMIMEAssertion: {category: JC.Assertion, type: JT.SMIMEAssertion, guiclass: "SMIMEAssertionGui", testclass: "SMIMEAssertion", label: JL.SMIMEAssertion},
    XMLSchemaAssertion: {category: JC.Assertion, type: JT.XMLSchemaAssertion, guiclass: "XMLSchemaAssertionGUI", testclass: "XMLSchemaAssertion", label: JL.XMLSchemaAssertion},
    XMLAssertion: {category: JC.Assertion, type: JT.XMLAssertion, guiclass: "XMLAssertionGui", testclass: "XMLAssertion", label: JL.XMLAssertion},
    XPathAssertion: {category: JC.Assertion, type: JT.XPathAssertion, guiclass: "XPathAssertionGui", testclass: "XPathAssertion", label: JL.XPathAssertion},
    DurationAssertion: {category: JC.Assertion, type: JT.DurationAssertion, guiclass: "DurationAssertionGui", testclass: "DurationAssertion", label: JL.DurationAssertion},
    CompareAssertion: {category: JC.Assertion, type: JT.CompareAssertion, guiclass: "TestBeanGUI", testclass: "CompareAssertion", label: JL.CompareAssertion},
    BeanShellAssertion: {category: JC.Assertion, type: JT.BeanShellAssertion, guiclass: "BeanShellAssertionGui", testclass: "BeanShellAssertion", label: JL.BeanShellAssertion},

    // 定时器
    ConstantTimer: {category: JC.Timer, type: JT.ConstantTimer, guiclass: "ConstantTimerGui", testclass: "ConstantTimer", label: JL.ConstantTimer},
    UniformRandomTimer: {category: JC.Timer, type: JT.UniformRandomTimer, guiclass: "UniformRandomTimerGui", testclass: "UniformRandomTimer", label: JL.UniformRandomTimer},
    PreciseThroughputTimer: {category: JC.Timer, type: JT.PreciseThroughputTimer, guiclass: "TestBeanGUI", testclass: "PreciseThroughputTimer", label: JL.PreciseThroughputTimer},
    ConstantThroughputTimer: {category: JC.Timer, type: JT.ConstantThroughputTimer, guiclass: "TestBeanGUI", testclass: "ConstantThroughputTimer", label: JL.ConstantThroughputTimer},
    JSR223Timer: {category: JC.Timer, type: JT.JSR223Timer, guiclass: "TestBeanGUI", testclass: "JSR223Timer", label: JL.JSR223Timer},
    SyncTimer: {category: JC.Timer, type: JT.SyncTimer, guiclass: "TestBeanGUI", testclass: "SyncTimer", label: JL.SyncTimer},
    PoissonRandomTimer: {category: JC.Timer, type: JT.PoissonRandomTimer, guiclass: "PoissonRandomTimerGui", testclass: "PoissonRandomTimer", label: JL.PoissonRandomTimer},
    GaussianRandomTimer: {category: JC.Timer, type: JT.GaussianRandomTimer, guiclass: "GaussianRandomTimerGui", testclass: "GaussianRandomTimer", label: JL.GaussianRandomTimer},
    BeanShellTimer: {category: JC.Timer, type: JT.BeanShellTimer, guiclass: "TestBeanGUI", testclass: "BeanShellTimer", label: JL.BeanShellTimer},
}

export function Argument(){
    this.id = Store.getters.testElementId()
    this.name = ''
    this.value = ''
    this.metadata = ''
    this.desc = ''
}


export function Header(){
    this.id = Store.getters.testElementId()
    this.name = ''
    this.value = ''
}


export function Cookie(){
    this.id = Store.getters.testElementId()
    this.name = ''
    this.value = ''
    this.domain = ''
    this.path = ''
    this.secure = false
    this.expires = 0
    this.pathSpecified = true
    this.domainSpecified = true
}


export function HttpArgument(){
    Argument.call(this)
    this.alwaysEncode = false
    this.useEquals = true
    this.contentType = 'text/plain'
}


export function DnsServer(){
    this.id = Store.getters.testElementId()
    this.name = ''
}


export function DnsHost(){
    this.id = Store.getters.testElementId()
    this.host = ''
    this.nameOrIp = ''
}


export function Authorization(){
    this.id = Store.getters.testElementId()
    this.url = ''
    this.username = ''
    this.password = ''
    this.domain = ''
    this.realm = ''
    this.mechanism = 'BASIC'
}


export function AbstractTestElement(element){
    this.id = Store.getters.testElementId()
    this.category = element.category
    this.type = element.type
    this.testname = element.label
    this.guiclass = element.guiclass
    this.testclass = element.testclass
    this.enabled = true
    this.comments = ''
    this.children = []
}


export function AbstractHttp(element){
    AbstractTestElement.call(this, element)
    this.protocol = '' // string 协议
    this.domain = '' // string 域名
    this.path = '' // string 路径
    this.port = '' // string 端口号
    this.contentEncoding = '' // string 内容编码
    this.postBodyRaw = false // bool 请求参数是否原生
    this.arguments = [] // element 请求参数
    this.implementation = ''  // string 客户端实现
    this.connectTimeout = '30000' // string 连接超时
    this.responseTimeout = '30000' // string 响应超时
    this.imageParser = false // bool 从html文件获取所有内含的资源
    this.concurrentDwn = false // bool 并行下载
    this.concurrentPool = 6  // string 数量
    this.embeddedUrlRe = ''  // string 匹配网址
    this.embeddedUrlExcludeRe = '' // string 网址必须不匹配
    this.ipSourceType = 0  // int 源地址类型
    this.ipSource = '' // string 源地址
    this.proxyScheme = '' // string 代理scheme
    this.proxyHost = '' // string 代理服务器ip
    this.proxyPort = '' // string 代理服务器端口号
    this.proxyUser = '' // string 代理服务器用户名
    this.proxyPass = '' // string 代理服务器密码
    this.md5 = false // bool 是否保存响应为md5哈希
}


export function AbstractTcp(element){
    AbstractTestElement.call(this, element)
    this.classname = '' // string
    this.server = '' // string
    this.port = '' //string
    this.cTimeout = '' // string
    this.timeout = '' // string
    this.reUseConnection = true // bool 重用连接
    this.closeConnection = false // bool 关闭连接
    this.noDelay = false // bool 设置无延迟
    this.soLinger = '' // string
    this.eolByte = '' // string 行尾字节值
    this.request = '' // string  要发送的文本
}


export function AbstractJSR223(element){
    AbstractTestElement.call(this, element)
    this.scriptLanguage = 'groovy'
    this.parameters = ''
    this.filename = ''
    this.cacheKey = true
    this.script = ''
}


export function AbstractJDBC(element){
    AbstractTestElement.call(this, element)
    this.dataSource = ''
    this.queryType = 'Select Statement'
    this.query = ''
    this.queryArguments = ''
    this.queryArgumentsTypes = ''
    this.variableNames = ''
    this.resultVariable = ''
    this.queryTimeout = ''
    this.resultSetMaxRows = ''
    this.resultSetHandler = 'Store as String'
}