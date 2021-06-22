import {
    AbstractAjp, AbstractFTP,
    AbstractHttp,
    AbstractJDBC,
    AbstractJSR223,
    AbstractTcp, AbstractTestElement,
    TestElements
} from "@/views/jmeter/js/JmeterTestElement";

export function HttpTestSample(){
    AbstractHttp.call(this, TestElements.HttpTestSample)
    this.method = 'GET'
    this.followRedirects = true
    this.autoRedirects = false
    this.useKeepAlive = true
    this.doMultipartPost = false
    this.browserCompatibleMultipart = false
    this.files = []
}


export function AjpSampler(){
    AbstractAjp.call(this, TestElements.AjpSampler)
    this.method = 'GET'
    this.followRedirects = true
    this.autoRedirects = false
    this.useKeepAlive = true
    this.doMultipartPost = false
    this.browserCompatibleMultipart = false
    this.files = []
}


export function JSR223Sampler(){
    AbstractJSR223.call(this, TestElements.JSR223Sampler)
}


export function JDBCSampler(){
    AbstractJDBC.call(this, TestElements.JDBCSampler)
}


export function TCPSampler(){
    AbstractTcp.call(this, TestElements.TCPSampler)
    this.username = ''
    this.password = ''
}


export function TestAction(){
    AbstractTestElement.call(this, TestElements.TestAction)
    this.action = 1 // int logical action
    this.target = 0 // int Target
    this.duration = '0' // string Duration
}


export function DebugSampler(){
    AbstractTestElement.call(this, TestElements.DebugSampler)
    this.displayJMeterProperties = false
    this.displayJMeterVariables = true
    this.displaySystemProperties = false
}


export function BoltSampler(){
    AbstractTestElement.call(this, TestElements.BoltSampler)
    this.cypher = ''
    this.params = ''
    this.recordQueryResults = false
}


export function FTPSampler(){
    AbstractFTP.call(this, TestElements.FTPSampler)
    this.username = ''
    this.password = ''
}

export function GraphQL(){
    AbstractHttp.call(this, TestElements.GraphQLHTTPSampler)
}