import {AbstractTestElement, TestElements} from "@/views/jmeter/js/JmeterTestElement";

export function IfController(){
    AbstractTestElement.call(this, TestElements.IfController)
    this.condition = '' // string Expression
    this.useExpression = true // bool Interpret Condition as Variable Expression?
    this.evaluateAll = false // bool Evaluate for all children
}


export function TransactionController(){
    AbstractTestElement.call(this, TestElements.TransactionController)
    this.parent = false // bool
    this.includeTimers = false // bool
}


export function LoopController(){
    AbstractTestElement.call(this, TestElements.LoopController)
    this.loops = 1
    this.continueForever = false
}


export function WhileController(){
    AbstractTestElement.call(this, TestElements.WhileController)
    this.condition = ''
}


export function ForeachController(){
    AbstractTestElement.call(this, TestElements.ForeachController)
    this.inputVal = ''  // string 输入变量前缀
    this.startIndex = ''    // string 开始循环字段
    this.endIndex =''   // string 结束循环字段
    this.returnVal = '' // string 输出变量名称
    this.useSeparator = true // string 数字之前加上下划线
}


export function IncludeController(){
    AbstractTestElement.call(this, TestElements.IncludeController)
    this.includePath = '' // 文件名
}


export function RunTime(){
    AbstractTestElement.call(this, TestElements.RunTime)
    this.seconds = '1'
}

export function CriticalSectionController(){
    AbstractTestElement.call(this, TestElements.CriticalSectionController)
    this.lockName = 'global_lock'
}


export function InterleaveControl(){
    AbstractTestElement.call(this, TestElements.InterleaveControl)
    this.style = 1 // int
    this.accrossThreads = false // bool
}


export function OnceOnlyController(){
    AbstractTestElement.call(this, TestElements.OnceOnlyController)
}


export function GenericController(){
    AbstractTestElement.call(this, TestElements.GenericController)
}


export function RandomController(){
    AbstractTestElement.call(this, TestElements.RandomController)
    this.style = 1 // 1 -false 0- true
}


export function RandomOrderController(){
    AbstractTestElement.call(this, TestElements.RandomOrderController)
}


export function ThroughputController(){
    AbstractTestElement.call(this, TestElements.ThroughputController)
    this.style = 1 //
    this.maxThroughput = '1' // style = 0有效
    this.perThread = false
    this.percentThroughput = '1.0' // style = 1有效
}


export function SwitchController(){
    AbstractTestElement.call(this, TestElements.SwitchController)
    this.value = '' // string switch value
}