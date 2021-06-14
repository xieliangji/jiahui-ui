import {AbstractJDBC, AbstractJSR223, AbstractTestElement, TestElements} from "@/views/jmeter/js/JmeterTestElement";

export function JSR223PreProcessor(){
    AbstractJSR223.call(this, TestElements.JSR223PreProcessor)
}


export function UserParameters(){
    AbstractTestElement.call(this, TestElements.UserParameters)
    this.perIteration = false
    this.names = []
    this.threadValues = [[]]
}


export function AnchorModifier(){
    AbstractTestElement.call(this, TestElements.AnchorModifier)
}


export function URLRewritingModifier(){
    AbstractTestElement.call(this, TestElements.URLRewritingModifier)
    this.argumentName = ''
    this.pathExtension = false
    this.pathExtensionNoEqual = false
    this.pathExtensionNoQuestionMark = false
    this.cacheValue = false
    this.encode = false
}


export function JDBCPreProcessor(){
    AbstractJDBC.call(this, TestElements.JDBCPreProcessor)
}


export function SampleTimeout(){
    AbstractTestElement.call(this, TestElements.SampleTimeout)
    this.timeout = 10000
}


export function RegExUserParameter(){
    AbstractTestElement.call(this, TestElements.RegExUserParameters)
    this.regexRefName = ''
    this.paramNamesGrNr = ''
    this.paramValuesGrNr = ''
}