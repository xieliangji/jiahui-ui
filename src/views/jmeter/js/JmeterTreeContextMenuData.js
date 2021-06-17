import {JC, JL, JT} from "@/views/jmeter/js/JmeterTestElement";
import { CriticalSectionController, ForeachController, GenericController, IfController, IncludeController, InterleaveControl, LoopController, OnceOnlyController, RandomController, RandomOrderController, RunTime, SwitchController, ThroughputController, TransactionController, WhileController } from "@/views/jmeter/js/Controller";
import {
    Arguments,
    AuthManager,
    BoltConnectionElement,
    CacheManager,
    CookieManager, CounterConfig,
    CSVDataSet, DNSCacheManage, FtpConfig,
    HeaderManager,
    HttpDefaults, JavaConfig, JDBCDataSource, KeystoreConfig, LoginConfig, RandomVariableConfig, SimpleConfig, TCPConfig
} from "@/views/jmeter/js/ConfigElement";
import {
    AnchorModifier,
    JDBCPreProcessor,
    JSR223PreProcessor, RegExUserParameter, SampleTimeout,
    URLRewritingModifier,
    UserParameters
} from "@/views/jmeter/js/Preprocessor";
import {PostThreadGroup, SetupThreadGroup, ThreadGroup} from "@/views/jmeter/js/ThreadGroup";
import {
    CompareAssertion,
    DurationAssertion,
    HTMLAssertion, JMESPathAssertion,
    JSONPathAssertion,
    JSR223Assertion, MD5Assertion,
    ResponseAssertion,
    SizeAssertion, XMLAssertion, XMLSchemaAssertion,
    XPath2Assertion, XPathAssertion
} from "@/views/jmeter/js/Assertion";
import {
    BoundaryExtractor, DebugPostProcessor,
    HtmlExtractor, JDBCPostProcessor,
    JMESPathExtractor,
    JSONPostProcessor, JSR223PostProcessor,
    RegexExtractor, ResultAction, XPath2Extractor, XPathExtractor
} from "@/views/jmeter/js/Postprocessor";
import {
    ConstantThroughputTimer,
    ConstantTimer, GaussianRandomTimer, JSR223Timer, PoissonRandomTimer,
    PreciseThroughputTimer, SyncTimer,
    UniformRandomTimer
} from "@/views/jmeter/js/Timer";
import {
    AjpSampler,
    BoltSampler,
    DebugSampler, FTPSampler,
    HttpTestSample, JDBCSampler,
    JSR223Sampler, TCPSampler,
    TestAction
} from "@/views/jmeter/js/Sampler";


function getControllerChildren(parent){
    let prefix = parent === undefined ? '' : parent
    return [
        {name: `${prefix}${JT.IfController}`, label: JL.IfController, children: undefined, elementConstructor: IfController},
        {name: `${prefix}${JT.TransactionController}`, label: JL.TransactionController, children: undefined, elementConstructor: TransactionController},
        {name: `${prefix}${JT.LoopController}`, label: JL.LoopController, children: undefined, elementConstructor: LoopController},
        {name: `${prefix}${JT.WhileController}`, label: JL.WhileController, children: undefined, elementConstructor: WhileController},
        {name: `${prefix}${JT.ForeachController}`, label: JL.ForeachController, children: undefined, elementConstructor: ForeachController},
        {name: `${prefix}${JT.IncludeController}`, label: JL.IncludeController, children: undefined, elementConstructor: IncludeController},
        {name: `${prefix}${JT.RunTime}`, label: JL.RunTime, children: undefined, elementConstructor: RunTime},
        {name: `${prefix}${JT.CriticalSectionController}`, label: JL.CriticalSectionController, children: undefined, elementConstructor: CriticalSectionController},
        {name: `${prefix}${JT.InterleaveControl}`, label: JL.InterleaveControl, children: undefined, elementConstructor: InterleaveControl},
        {name: `${prefix}${JT.OnceOnlyController}`, label: JL.OnceOnlyController, children: undefined, elementConstructor: OnceOnlyController},
        {name: `${prefix}${JT.GenericController}`, label: JL.GenericController, children: undefined, elementConstructor: GenericController},
        {name: `${prefix}${JT.RandomController}`, label: JL.RandomController, children: undefined, elementConstructor: RandomController},
        {name: `${prefix}${JT.RandomOrderController}`, label: JL.RandomOrderController, children: undefined, elementConstructor: RandomOrderController},
        {name: `${prefix}${JT.ThroughputController}`, label: JL.ThroughputController, children: undefined, elementConstructor: ThroughputController},
        {name: `${prefix}${JT.SwitchController}`, label: JL.SwitchController, children: undefined, elementConstructor: SwitchController},
    ]
}


function getConfigChildren(){
    return [
        {name: JT.CSVDataSet, label: JL.CSVDataSet, children: undefined, elementConstructor: CSVDataSet},
        {name: JT.HeaderManager, label: JL.HeaderManager, children: undefined, elementConstructor: HeaderManager},
        {name: JT.CookieManager, label: JL.CookieManager, children: undefined, elementConstructor: CookieManager},
        {name: JT.CacheManager, label: JL.CacheManager, children: undefined, elementConstructor: CacheManager},
        {name: JT.HttpDefaults, label: JL.HttpDefaults, children: undefined, elementConstructor: HttpDefaults},
        {name: JT.BoltConnectionElement, label: JL.BoltConnectionElement, children: undefined, elementConstructor: BoltConnectionElement},
        {name: JT.DNSCacheManager, label: JL.DNSCacheManager, children: undefined, elementConstructor: DNSCacheManage},
        {name: JT.FtpConfig, label: JL.FtpConfig, children: undefined, elementConstructor: FtpConfig},
        {name: JT.AuthManager, label: JL.AuthManager, children: undefined, elementConstructor: AuthManager},
        {name: JT.JDBCDataSource, label: JL.JDBCDataSource, children: undefined, elementConstructor: JDBCDataSource},
        {name: JT.JavaConfig, label: JL.JavaConfig, children: undefined, elementConstructor: JavaConfig},
        {name: JT.TCPConfig, label: JL.TCPConfig, children: undefined, elementConstructor: TCPConfig},
        {name: JT.KeystoreConfig, label: JL.KeystoreConfig, children: undefined, elementConstructor: KeystoreConfig},
        {name: JT.Arguments, label: JL.Arguments, children: undefined, elementConstructor: Arguments},
        {name: JT.LoginConfig, label: JL.LoginConfig, children: undefined, elementConstructor: LoginConfig},
        {name: JT.SimpleConfig, label: JL.SimpleConfig, children: undefined, elementConstructor: SimpleConfig},
        {name: JT.CounterConfig, label: JL.CounterConfig, children: undefined, elementConstructor: CounterConfig},
        {name: JT.RandomVariableConfig, label: JL.RandomVariableConfig, children: undefined, elementConstructor: RandomVariableConfig},
    ]
}


function getPreprocessorChildren(){
    return [
        {name: JT.JSR223PreProcessor, label: JL.JSR223PreProcessor, children: undefined, elementConstructor: JSR223PreProcessor},
        {name: JT.UserParameters, label: JL.UserParameters, children: undefined, elementConstructor: UserParameters},
        {name: JT.AnchorModifier, label: JL.AnchorModifier, children: undefined, elementConstructor: AnchorModifier},
        {name: JT.URLRewritingModifier, label: JL.URLRewritingModifier, children: undefined, elementConstructor: URLRewritingModifier},
        {name: JT.JDBCPreProcessor, label: JL.JDBCPreProcessor, children: undefined, elementConstructor: JDBCPreProcessor},
        {name: JT.SampleTimeout, label: JL.SampleTimeout, children: undefined, elementConstructor: SampleTimeout},
        {name: JT.RegExUserParameters, label: JL.RegExUserParameters, children: undefined, elementConstructor: RegExUserParameter},
    ]
}


function getPostprocessorChildren(){
    return [
        {name: JT.HtmlExtractor, label: JL.HtmlExtractor, children: undefined, elementConstructor: HtmlExtractor},
        {name: JT.JMESPathExtractor, label: JL.JMESPathExtractor, children: undefined, elementConstructor: JMESPathExtractor},
        {name: JT.JSONPostProcessor, label: JL.JSONPostProcessor, children: undefined, elementConstructor: JSONPostProcessor},
        {name: JT.RegexExtractor, label: JL.RegexExtractor, children: undefined, elementConstructor: RegexExtractor},
        {name: JT.BoundaryExtractor, label: JL.BoundaryExtractor, children: undefined, elementConstructor: BoundaryExtractor},
        {name: JT.JSR223PostProcessor, label: JL.JSR223PostProcessor, children: undefined, elementConstructor: JSR223PostProcessor},
        {name: JT.JDBCPostProcessor, label: JL.JDBCPostProcessor, children: undefined, elementConstructor: JDBCPostProcessor},
        {name: JT.XPath2Extractor, label: JL.XPath2Extractor, children: undefined, elementConstructor: XPath2Extractor},
        {name: JT.XPathExtractor, label: JL.XPathExtractor, children: undefined, elementConstructor: XPathExtractor},
        {name: JT.ResultAction, label: JL.ResultAction, children: undefined, elementConstructor: ResultAction},
        {name: JT.DebugPostProcessor, label: JL.DebugPostProcessor, children: undefined, elementConstructor: DebugPostProcessor},
    ]
}


function getAssertionChildren(){
    return [
        {name: JT.ResponseAssertion, label: JL.ResponseAssertion, children: undefined, elementConstructor: ResponseAssertion},
        {name: JT.JSONPathAssertion, label: JL.JSONPathAssertion, children: undefined, elementConstructor: JSONPathAssertion},
        {name: JT.SizeAssertion, label: JL.SizeAssertion, children: undefined, elementConstructor: SizeAssertion},
        {name: JT.JSR223Assertion, label: JL.JSR223Assertion, children: undefined, elementConstructor: JSR223Assertion},
        {name: JT.XPath2Assertion, label: JL.XPath2Assertion, children: undefined, elementConstructor: XPath2Assertion},
        {name: JT.HTMLAssertion, label: JL.HTMLAssertion, children: undefined, elementConstructor: HTMLAssertion},
        {name: JT.JMESPathAssertion, label: JL.JMESPathAssertion, children: undefined, elementConstructor: JMESPathAssertion},
        {name: JT.MD5HexAssertion, label: JL.MD5HexAssertion, children: undefined, elementConstructor: MD5Assertion},
        {name: JT.XMLSchemaAssertion, label: JL.XMLSchemaAssertion, children: undefined, elementConstructor: XMLSchemaAssertion},
        {name: JT.XMLAssertion, label: JL.XMLAssertion, children: undefined, elementConstructor: XMLAssertion},
        {name: JT.XPathAssertion, label: JL.XPathAssertion, children: undefined, elementConstructor: XPathAssertion},
        {name: JT.DurationAssertion, label: JL.DurationAssertion, children: undefined, elementConstructor: DurationAssertion},
        {name: JT.CompareAssertion, label: JL.CompareAssertion, children: undefined, elementConstructor: CompareAssertion},
    ]
}


function getTimerChildren(){
    return [
        {name: JT.ConstantTimer, label: JL.ConstantTimer, children: undefined, elementConstructor: ConstantTimer},
        {name: JT.UniformRandomTimer, label: JL.UniformRandomTimer, children: undefined, elementConstructor: UniformRandomTimer},
        {name: JT.PreciseThroughputTimer, label: JL.PreciseThroughputTimer, children: undefined, elementConstructor: PreciseThroughputTimer},
        {name: JT.ConstantThroughputTimer, label: JL.ConstantThroughputTimer, children: undefined, elementConstructor: ConstantThroughputTimer},
        {name: JT.JSR223Timer, label: JL.JSR223Timer, children: undefined, elementConstructor: JSR223Timer},
        {name: JT.SyncTimer, label: JL.SyncTimer, children: undefined, elementConstructor: SyncTimer},
        {name: JT.PoissonRandomTimer, label: JL.PoissonRandomTimer, children: undefined, elementConstructor: PoissonRandomTimer},
        {name: JT.GaussianRandomTimer, label: JL.GaussianRandomTimer, children: undefined, elementConstructor: GaussianRandomTimer},
    ]
}


function getListenerChildren(){
    return [

    ]
}


function getThreadGroupChildren(){
    return [
        {name: JT.SetupThreadGroup, label: JL.SetupThreadGroup, children: undefined, elementConstructor: SetupThreadGroup},
        {name: JT.PostThreadGroup, label: JL.PostThreadGroup, children: undefined, elementConstructor: PostThreadGroup},
        {name: JT.ThreadGroup, label: JL.ThreadGroup, children: undefined, elementConstructor: ThreadGroup},
    ]
}


function getSamplerChildren(){
    return [
        {name: JT.HttpTestSample, label: JL.HttpTestSample, children: undefined, elementConstructor: HttpTestSample},
        {name: JT.TestAction, label: JL.TestAction, children: undefined, elementConstructor: TestAction},
        {name: JT.DebugSampler, label: JL.DebugSampler, children: undefined, elementConstructor: DebugSampler},
        {name: JT.JSR223Sampler, label: JL.JSR223Sampler, children: undefined, elementConstructor: JSR223Sampler},
        {name: JT.AjpSampler, label: JL.AjpSampler, children: undefined, elementConstructor: AjpSampler},
        {name: JT.BoltSampler, label: JL.BoltSampler, children: undefined, elementConstructor: BoltSampler},
        {name: JT.FTPSampler, label: JL.FTPSampler, children: undefined, elementConstructor: FTPSampler},
        {name: JT.JDBCSampler, label: JL.JDBCSampler, children: undefined, elementConstructor: JDBCSampler},
        {name: JT.TCPSampler, label: JL.TCPSampler, children: undefined, elementConstructor: TCPSampler},
    ]
}


function getSecondaryChildren(category){
    let commons = [
        {name: JC.ConfigElement, label: '配置元素', children: getConfigChildren(), elementConstructor: undefined},
        {name: JC.Preprocessor, label: '前置处理器', children: getPreprocessorChildren(), elementConstructor: undefined},
        {name: JC.Postprocessor, label: '后置处理器', children: getPostprocessorChildren(), elementConstructor: undefined},
        {name: JC.Assertion, label: '断言', children: getAssertionChildren(), elementConstructor: undefined},
        {name: JC.Timer, label: '定时器', children: getTimerChildren(), elementConstructor: undefined},
        {name: JC.Listener, label: '监听器', children: getListenerChildren(), elementConstructor: undefined},
    ]
    let children = []
    if(category === JC.TestPlan){
        children.push({name: JC.ThreadGroup, label: '线程组', children: getThreadGroupChildren(), elementConstructor: undefined})
    }
    if(category === JC.ThreadGroup){
        children.push({name: `thread${JC.Controller}`, label: '逻辑控制器', children: getControllerChildren(undefined), elementConstructor: undefined})
        children.push({name: `thread${JC.Sampler}`, label: '取样器', children: getSamplerChildren(), elementConstructor: undefined})
    }
    if(category === JC.Controller){
        children.push({name: `controller${JC.Controller}`, label: '逻辑控制器', children: getControllerChildren(undefined), elementConstructor: undefined})
        children.push({name: `controller${JC.Sampler}`, label: '取样器', children: getSamplerChildren(), elementConstructor: undefined})
    }
    for(let index = 0; index < commons.length; index++){
        children.push(commons[index])
    }
    return children
}


export function getMenuData(category){
    let commons = [
        {name: 'copy', label: '复制', children: undefined, elementConstructor: undefined},
        {name: 'cut', label: '剪切', children: undefined, elementConstructor: undefined},
        {name: 'paste', label: '粘贴', children: undefined, elementConstructor: undefined},
        {name: 'delete', label: '删除', children: undefined, elementConstructor: undefined},
        {name: 'disable', label: '禁用', children: undefined, elementConstructor: undefined},
        {name: 'enable', label: '启用', children: undefined, elementConstructor: undefined},
        {name: 'switch', label: '切换', children: undefined, elementConstructor: undefined}
    ]

    let menuData = []
    if(category === JC.TestPlan){
        menuData.push({name: 'add', label: '添加', children: getSecondaryChildren(category), elementConstructor: undefined})
        menuData.push({name: 'paste', label: '粘贴', children: undefined, elementConstructor: undefined})
        menuData.push({name: 'disable', label: '禁用', children: undefined, elementConstructor: undefined})
        menuData.push({name: 'enable', label: '启用', children: undefined, elementConstructor: undefined})
        menuData.push({name: 'switch', label: '切换', children: undefined, elementConstructor: undefined})
    } else {
        switch (category){
            case JC.ThreadGroup: {
                menuData.push({name: 'add', label: '添加', children: getSecondaryChildren(category), elementConstructor: undefined})
                break
            }
            case JC.Controller: {
                menuData.push({name: 'add', label: '添加', children: getSecondaryChildren(category), elementConstructor: undefined})
                menuData.push({name: 'changeController', label: '改变控制器', children: getControllerChildren('change'), elementConstructor: undefined})
                menuData.push({name: 'insertParent', label: '插入上级', children: getControllerChildren('insert'), elementConstructor: undefined})
                break
            }
            case JC.Sampler: {
                menuData.push({name: 'add', label: '添加', children: getSecondaryChildren(category), elementConstructor: undefined})
                menuData.push({name: 'insertParent', label: '插入上级', children: getControllerChildren('insert'), elementConstructor: undefined})
                break
            }
            default: break
        }
        for(let index = 0; index < commons.length; index++){
            menuData.push(commons[index])
        }
    }

    return menuData
}