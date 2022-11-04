import {BaseObj} from './BaseObj'
import {func} from './TypeEnum'

/**
 * 函数对象
 */
class FuncObj extends BaseObj {

  constructor(value, arg1, arg2 = null, arg3 = null) {
    super()
    this.type = func
    this.value = value
    this.arg1 = arg1
    this.arg2 = arg2
    this.arg3 = arg3
  }

  generateHtml() {
    super.generateHtml();
  }
}

export {FuncObj}