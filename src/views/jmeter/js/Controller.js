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