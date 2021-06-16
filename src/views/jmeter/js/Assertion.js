import {AbstractJSR223, AbstractTestElement, TestElements} from "@/views/jmeter/js/JmeterTestElement";

function AbstractAssertion(element){
    AbstractTestElement.call(this, element)
    this.scope = 'parent'
    this.variable = ''
}


export function ResponseAssertion(){
    AbstractAssertion.call(this, TestElements.ResponseAssertion)
    this.testField = 'Assertion.response_data' // string 测试字段
    this.testType = 16 // int 模式匹配规则
    this.testString = [] // collection 测试模式
    this.assumeSuccess = false // bool
    this.customMessage = '' // string 自定义错误消息
}


export function JSONPathAssertion(){
    AbstractTestElement.call(this, TestElements.JSONPathAssertion)
    this.jsonPath = '' // string 断言是否存在json路径
    this.jsonValidation = false // bool 附加断言值
    this.isRegex = true // bool 是否为正则表达式匹配断言
    this.expectedValue = '' // string 期望值
    this.expectNull = false // bool 是否期望为空
    this.invert =false // bool Invert 断言
}


export function SizeAssertion(){
    AbstractAssertion.call(this, TestElements.SizeAssertion)
    this.testField = 'SizeAssertion.response_network_sze' // 测试字段
    this.size = '' // string 字节大小
    this.operator = 1 // int比较类型
}


export function JSR223Assertion(){
    AbstractJSR223.call(this, TestElements.JSR223Assertion)
}


export function XPath2Assertion(){
    AbstractAssertion.call(this, TestElements.XPath2Assertion)
    this.negate = false
    this.namespaces = ''
    this.xpath = '/'
}


export function HTMLAssertion(){
    AbstractTestElement.call(this, TestElements.HTMLAssertion)
    this.htmlAssertionDocType = 'omit' // string tidy setting
    this.htmlAssertionFormat = 0 // long 格式
    this.htmlAssertionErrorOnly = false // bool 是否仅错误
    this.htmlAssertionErrorThreshold = 0 // long 错误阈值
    this.htmlAssertionWarningThreshold = 0 // long 警告阈值
    this.htmlAssertionFilename = '' // string 断言报告输出文件
}


export function JMESPathAssertion(){
    AbstractTestElement.call(this, TestElements.JMESPathAssertion)
    this.jsonPath = '' // string 断言是否存在json路径
    this.jsonValidation = false // bool 附加断言值
    this.isRegex = true // bool 是否为正则表达式匹配断言
    this.expectedValue = '' // string 期望值
    this.expectNull = false // bool 是否期望为空
    this.invert =false // bool Invert 断言
}


export function MD5Assertion(){
    AbstractTestElement.call(this, TestElements.MD5HexAssertion)
    this.size = ''
}


export function XMLSchemaAssertion(){
    AbstractTestElement.call(this, TestElements.XMLSchemaAssertion)
    this.xmlSchemaAssertionFilename = ''
}


export function XMLAssertion(){
    AbstractTestElement.call(this, TestElements.XMLAssertion)
}


export function XPathAssertion(){
    AbstractAssertion.call(this, TestElements.XPathAssertion)
    this.tolerant = false
    this.quiet = true
    this.reportErrors = false
    this.showWarnings = false
    this.fragment = false
    this.namespace = false
    this.validate = false
    this.whitespace = false
    this.downloadDtds = false
    this.negate = false
    this.xpath = '/'
}


export function DurationAssertion(){
    AbstractAssertion.call(this, TestElements.DurationAssertion)
    this.duration = ''
}


export function CompareAssertion(){
    AbstractTestElement.call(this, TestElements.CompareAssertion)
    this.compareContent = true
    this.compareTime = -1
    this.stringsToSkip = []
}