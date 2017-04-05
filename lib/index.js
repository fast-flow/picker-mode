import extend from "extend"
class Picker {
    static getDefaultSettings () {
        return {
            data: [],
            onChange: function (stat) {

            }
        }
    }
    constructor (settings) {
        const self = this
        settings = extend(true, Picker.getDefaultSettings(), settings)
        self.settings = settings
        self.data = self.settings.data
        self.mode = 'check' // "check" "uncheck"
        self.triggerChange()
    }
    _find = (id, handler, caller) => {
        const self = this
        self.data = self.data.map(function(item) {
            if (typeof item.id !== typeof id) {
                console.warn(`node_modules/picker-mode/lib/index.js _find: ${caller}(id) typeof id === "${typeof id}" | typeof data[index].id === ${typeof item.id}`)
            }
            if (item.id === id) {
                item = handler(item)
            }
            return item
        })
    }
    check = (id) => {
        const self = this
        if (typeof id === 'undefined') {
            throw new Error('node_modules/picker-mode/lib/index.js check: check(id) must have id')
        }
        if (!Array.isArray(id)) {
            id = [id]
        }
        id.forEach(function (id) {
            self._find(id, function check(item) {
                item.checked = true
                return item
            }, 'checked')
        })
        self.triggerChange()
    }
    uncheck = (id) => {
        const self = this
        if (typeof id === 'undefined') {
            throw new Error('node_modules/picker-mode/lib/index.js uncheck: check(id) must have id')
        }
        if (!Array.isArray(id)) {
            id = [id]
        }
        id.forEach(function (id) {
            self._find(id, function uncheck(item) {
                item.checked = false
                return item
            }, 'uncheck')
        })
        self.triggerChange()
    }
    del = (id) => {
        const self = this
        if (typeof id === 'undefined') {
            throw new Error('node_modules/picker-mode/lib/index.js del: del(id) must have id')
        }
        if (!Array.isArray(id)) {
            id = [id]
        }
        id.forEach(function (id) {
            self.data = self.data.filter(function (item) {
                return item.id !== id
            })
        })
        self.triggerChange()
    }
    triggerChange () {
        const self = this
        let type
        let stat = {
            mode: self.mode,
            checked: [],
            uncheck: []
        }
        self.data.forEach(function (item) {
            if (item.checked) {
                stat.checked.push(item.id)
            }
            else {
                stat.uncheck.push(item.id)
            }
        })
        if (stat.checked.length === 0)  {
            type = 'empty'
        }
        else if (self.mode === 'inverse') {
            // mode.inverse 只能通过 picker.checkedGlobalAll() 设置
            if (stat.uncheck.length === 0) {
                type = 'globalAll'
            }
            else {
                type = 'globalSome'
            }
        }
        else {
            if (stat.uncheck.length === 0) {
                type = 'all'
            }
            else {
                type = 'some'
            }
            if (typeof self.settings.getDataCount === 'function') {
                /*
                    NOTE:
                    不使用 === 是因为如下场景
                    1. 用户选择了所有数据
                    2. 用户翻译了，获取了新的 dataCount  10
                    3. 但是某条数据被另外一个人登陆次账户后删除
                    4. 导致 dataCount = 9
                    5. 而 checked.length 却是 10
                */
                if (stat.checked.length >= self.settings.getDataCount()) {
                    type = 'pickerAll'
                }
            }
        }
        if (typeof type === 'undefined') {
            throw new Error('node_modules/picker-mode/lib/index.js triggerChange: not match type,Please tell me https://github.com/fast-flow/picker-mode/issues/new')
        }
        stat.type = type
        self.settings.onChange(stat)
    }
    checkAll = () => {
        const self = this
        self.mode = 'uncheck'
        self.data = self.data.map(function (item) {
            item.checked = true
            return item
        })
        self.triggerChange()
    }
}
export default Picker
