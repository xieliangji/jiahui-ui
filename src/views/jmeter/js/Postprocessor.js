import {AbstractJDBC, AbstractJSR223, AbstractTestElement, TestElements} from "@/views/jmeter/js/JmeterTestElement";

export function HtmlExtractor(){
    AbstractTestElement.call(this, TestElements.HtmlExtractor)
    this.scope = 'parent'
    this.variable = ''
    this.extractorImpl = ''
    this.refName = ''
    this.expr = ''
    this.attribute = ''
    this.matchNumber = ''
    this.default = ''
    this.defaultEmptyValue = false
}


export function JMESPathExtractor(){
    AbstractTestElement.call(this, TestElements.JMESPathExtractor)
    this.scope = 'parent'
    this.variable = ''
    this.referenceName = ''
    this.jmesPathExpr = ''
    this.matchNumber = ''
    this.defaultValue = ''
}


export function JSONPostProcessor(){
    AbstractTestElement.call(this, TestElements.JSONPostProcessor)
    this.scope = 'parent'
    this.variable = ''
    this.referenceNames = ''
    this.jsonPathExprs = ''
    this.matchNumbers = ''
    this.defaultValues = ''
    this.computeConcat = false
}


export function RegexExtractor(){
    AbstractTestElement.call(this, TestElements.RegexExtractor)
    this.scope = 'parent' // string
    this.variable = '' // string
    this.useHeaders = 'false' // string
    this.refName = '' // string 引用名称
    this.regex = '' // string 正则表达式
    this.template = '' // string 模板
    this.matchNumber = '' // string 匹配数字
    this.default = '' // string 缺省值
    this.defaultEmptyValue = false // bool 使用空默认值
}


export function BoundaryExtractor(){
    AbstractTestElement.call(this, TestElements.BoundaryExtractor)
    this.variable = '' // string
    this.scope = 'parent' // string 应用于
    this.useHeaders = 'false' // string
    this.refName = '' // string
    this.lboundary = '' // string 左边界
    this.rboundary = '' // string 右边界
    this.matchNumber = '' // string
    this.default = ''
    this.defaultEmptyValue = false // bool
}


export function JSR223PostProcessor(){
    AbstractJSR223.call(this, TestElements.JSR223PostProcessor)
}


export function JDBCPostProcessor(){
    AbstractJDBC.call(this, TestElements.JDBCPostProcessor)
}


export function XPath2Extractor(){
    AbstractTestElement.call(this, TestElements.XPath2Extractor)
    this.scope = 'parent'
    this.variable = ''
    this.refName = ''
    this.xpathQuery = ''
    this.matchNumber = '0'
    this.default = ''
    this.namespaces = ''
    this.fragment = false
}


export function XPathExtractor(){
    AbstractTestElement.call(this, TestElements.XPathExtractor)
    this.scope = 'parent'
    this.variable = ''
    this.tolerant = false
    this.quiet = true
    this.reportErrors = false
    this.showWarnings = false
    this.fragment = false
    this.namespace = false
    this.validate = false
    this.whitespace = false
    this.downloadDtds = false
    this.refName = ''
    this.xpathQuery = ''
    this.matchNumber = '-1'
    this.default = ''
}


export function ResultAction(){
    AbstractTestElement.call(this, TestElements.ResultAction)
    this.action = 0
}


export function DebugPostProcessor(){
    AbstractTestElement.call(this, TestElements.DebugPostProcessor)
    this.displayJMeterProperties = false
    this.displayJMeterVariables = true
    this.displaySamplerProperties = true
    this.displaySystemProperties = false
}