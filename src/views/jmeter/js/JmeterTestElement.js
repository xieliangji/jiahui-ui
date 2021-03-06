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

    // ???????????????
    JSR223PreProcessor: "JSR223PreProcessor",
    UserParameters: "UserParameters",
    AnchorModifier: "AnchorModifier",
    URLRewritingModifier: "URLRewritingModifier",
    JDBCPreProcessor: "JDBCPreProcessor",
    SampleTimeout: "SampleTimeout",
    RegExUserParameters: "RegExUserParameters",
    BeanShellPreProcessor: "BeanShellPreProcessor",

    // ???????????????
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

    // ??????
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

    // ?????????
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
    TestPlan: "????????????",

    SetupThreadGroup: "setUp?????????",
    PostThreadGroup: "tearDown?????????",
    ThreadGroup: "?????????",

    IfController: "?????????If????????????",
    TransactionController: "???????????????",
    LoopController: "???????????????",
    WhileController: "While?????????",
    ForeachController: "ForEach?????????",
    IncludeController: "Include?????????",
    RunTime: "Runtime?????????",
    CriticalSectionController: "?????????????????????",
    InterleaveControl: "???????????????",
    OnceOnlyController: "??????????????????",
    RecordingController: "???????????????",
    GenericController: "???????????????",
    RandomController: "???????????????",
    RandomOrderController: "?????????????????????",
    ThroughputController: "??????????????????",
    SwitchController: "Switch?????????",
    ModuleController: "???????????????",

    HttpTestSample: "HTTP??????",
    TestAction: "????????????",
    DebugSampler: "???????????????",
    JSR223Sampler: "JSR223 Sampler",
    AjpSampler: "AJP/1.3 ?????????",
    AccessLogSampler: "Access Log Sampler",
    BeanShellSampler: "BeanShell ?????????",
    BoltSampler: "Bolt Request",
    FTPSampler: "FTP??????",
    GraphQLHTTPSampler: "GraphQL HTTP Request",
    JDBCSampler: "JDBC Request",
    PublisherSampler: "JMS??????",
    JMSSampler: "JMS?????????",
    SubscriberSampler: "JMS??????",
    JUnitSampler: "JUnit??????",
    JavaSampler: "Java??????",
    LDAPExtSampler: "LDAP?????????????????????",
    LDAPSampler: "LDAP??????",
    SystemSampler: "OS???????????????",
    SmtpSampler: "SMTP?????????",
    TCPSampler: "TCP?????????",
    MailReaderSampler: "????????????????????????",

    CSVDataSet: "CSV ??????????????????",
    HeaderManager: "HTTP??????????????????",
    CookieManager: "HTTP Cookie?????????",
    CacheManager: "HTTP???????????????",
    HttpDefaults: "HTTP???????????????",
    BoltConnectionElement: "Bolt Connection Configuration",
    DNSCacheManager: "DNS???????????????",
    FtpConfig: "FTP????????????",
    AuthManager: "HTTP???????????????",
    JDBCDataSource: "JDBC Connection Configuration",
    JavaConfig: "Java????????????",
    LdapExtConfig: "LDAP?????????????????????",
    LdapConfig: "LDAP????????????",
    TCPConfig: "TCP???????????????",
    KeystoreConfig: "???????????????",
    Arguments: "?????????????????????",
    LoginConfig: "??????????????????/???",
    SimpleConfig: "??????????????????",
    CounterConfig: "?????????",
    RandomVariableConfig: "????????????",

    JSR223PreProcessor: "JSR223 ???????????????",
    UserParameters: "????????????",
    AnchorModifier: "HTML???????????????",
    URLRewritingModifier: "HTTP URL ???????????????",
    JDBCPreProcessor: "JDBC ???????????????",
    SampleTimeout: "???????????????",
    RegExUserParameters: "???????????????????????????",
    BeanShellPreProcessor: "BeanShell ???????????????",

    HtmlExtractor: "CSS/JQuery?????????",
    JMESPathExtractor: "JSON JMESPath Extractor",
    JSONPostProcessor: "JSON?????????",
    RegexExtractor: "????????????????????????",
    BoundaryExtractor: "???????????????",
    JSR223PostProcessor: "JSR223 ??????????????????",
    JDBCPostProcessor: "JDBC ??????????????????",
    XPath2Extractor: "XPath2 Extractor",
    XPathExtractor: "XPath?????????",
    ResultAction: "?????????????????????",
    DebugPostProcessor: "????????????????????????",
    BeanShellPostProcessor: "BeanShell ??????????????????",

    ResponseAssertion: "????????????",
    JSONPathAssertion: "JSON??????",
    SizeAssertion: "????????????",
    JSR223Assertion: "JSR223 ??????",
    XPath2Assertion: "XPath2 Assertion",
    HTMLAssertion: "HTML??????",
    JMESPathAssertion: "JSON JMESPath Assertion",
    MD5HexAssertion: "MD5Hex??????",
    SMIMEAssertion: "SMIME??????",
    XMLSchemaAssertion: "XML Schema??????",
    XMLAssertion: "XML??????",
    XPathAssertion: "XPath??????",
    DurationAssertion: "??????????????????",
    CompareAssertion: "????????????",
    BeanShellAssertion: "BeanShell??????",

    ConstantTimer: "???????????????",
    UniformRandomTimer: "?????????????????????",
    PreciseThroughputTimer: "???????????????????????????",
    ConstantThroughputTimer: "????????????????????????",
    JSR223Timer: "JSR223 ?????????",
    SyncTimer: "???????????????",
    PoissonRandomTimer: "?????????????????????",
    GaussianRandomTimer: "?????????????????????",
    BeanShellTimer: "BeanShell ?????????",
}


export const TestElements = {
    Element: {category: '', type: '', guiclass: '', testclass: '', label: ''},

    // ????????????
    TestPlan: {category: JC.TestPlan, type: JT.TestPlan, guiclass: 'TestPlanGui', testclass: 'TestPlan', label: '????????????'},

    // ?????????
    SetupThreadGroup: {category: JC.ThreadGroup, type: JT.SetupThreadGroup, guiclass: "SetupThreadGroupGui", testclass: "SetupThreadGroup", label: JL.SetupThreadGroup},
    PostThreadGroup: {category: JC.ThreadGroup, type: JT.PostThreadGroup, guiclass: "PostThreadGroupGui", testclass: "PostThreadGroup", label: JL.PostThreadGroup},
    ThreadGroup: {category: JC.ThreadGroup, type: JT.ThreadGroup, guiclass: "ThreadGroupGui", testclass: "ThreadGroup", label: JL.ThreadGroup},

    // ?????????
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

    // ?????????
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

    // ????????????
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

    // ???????????????
    JSR223PreProcessor: {category: JC.Preprocessor, type: JT.JSR223PreProcessor, guiclass: "TestBeanGUI", testclass: "JSR223PreProcessor", label: JL.JSR223PreProcessor},
    UserParameters: {category: JC.Preprocessor, type: JT.UserParameters, guiclass: "UserParametersGui", testclass: "UserParameters", label: JL.UserParameters},
    AnchorModifier: {category: JC.Preprocessor, type: JT.AnchorModifier, guiclass: "AnchorModifierGui", testclass: "AnchorModifier", label: JL.AnchorModifier},
    URLRewritingModifier: {category: JC.Preprocessor, type: JT.URLRewritingModifier, guiclass: "URLRewritingModifierGui", testclass: "URLRewritingModifier", label: JL.URLRewritingModifier},
    JDBCPreProcessor: {category: JC.Preprocessor, type: JT.JDBCPreProcessor, guiclass: "TestBeanGUI", testclass: "JDBCPreProcessor", label: JL.JDBCPreProcessor},
    SampleTimeout: {category: JC.Preprocessor, type: JT.SampleTimeout, guiclass: "SampleTimeoutGui", testclass: "SampleTimeout", label: JL.SampleTimeout},
    RegExUserParameters: {category: JC.Preprocessor, type: JT.RegExUserParameters, guiclass: "RegExUserParametersGui", testclass: "RegExUserParameters", label: JL.RegExUserParameters},
    BeanShellPreProcessor: {category: JC.Preprocessor, type: JT.BeanShellPreProcessor, guiclass: "TestBeanGUI", testclass: "BeanShellPreProcessor", label: JL.BeanShellPreProcessor},

    // ???????????????
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

    // ??????
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

    // ?????????
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
    this.name = ''
    this.address = ''
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

export function TestString(){
    this.id = Store.getters.testElementId()
    this.string = ''
}


export function Substitution(){
    this.id = Store.getters.testElementId()
    this.regex = ''
    this.substitute = ''
}


export function HttpFile(){
    this.id = Store.getters.testElementId()
    this.path = ''
    this.paramName = ''
    this.mimetype = ''
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


export function AbstractAjp(element){
    AbstractTestElement.call(this, element)
    this.protocol = '' // string ??????
    this.domain = '' // string ??????
    this.path = '' // string ??????
    this.port = '' // string ?????????
    this.contentEncoding = '' // string ????????????
    this.postBodyRaw = false // bool ????????????????????????
    this.arguments = [] // element ????????????

    this.imageParser = false // bool ???html?????????????????????????????????
    this.concurrentDwn = false // bool ????????????
    this.concurrentPool = 6  // string ??????
    this.embeddedUrlRe = ''  // string ????????????
    this.embeddedUrlExcludeRe = '' // string ?????????????????????

    this.md5 = false // bool ?????????????????????md5??????
}


export function AbstractHttp(element){
    AbstractAjp.call(this, element)
    this.implementation = ''  // string ???????????????
    this.connectTimeout = '30000' // string ????????????
    this.responseTimeout = '30000' // string ????????????
    this.ipSourceType = 0  // int ???????????????
    this.ipSource = '' // string ?????????
    this.proxyScheme = '' // string ??????scheme
    this.proxyHost = '' // string ???????????????ip
    this.proxyPort = '' // string ????????????????????????
    this.proxyUser = '' // string ????????????????????????
    this.proxyPass = '' // string ?????????????????????
}


export function AbstractTcp(element){
    AbstractTestElement.call(this, element)
    this.classname = '' // string
    this.server = '' // string
    this.port = '' //string
    this.cTimeout = '' // string
    this.timeout = '' // string
    this.reUseConnection = true // bool ????????????
    this.closeConnection = false // bool ????????????
    this.noDelay = false // bool ???????????????
    this.soLinger = '' // string
    this.eolByte = '' // string ???????????????
    this.request = '' // string  ??????????????????
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


export function AbstractFTP(element){
    AbstractTestElement.call(this, element)
    this.server = ''
    this.port = ''
    this.filename = ''
    this.localFilename = ''
    this.inputData = ''
    this.binaryMode = false
    this.saveResponse = false
    this.upload = false
}