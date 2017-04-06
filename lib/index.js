import extend from "extend"
class Picker {
    static getDefaultSettings () {
        return {
            data: [],
            onChange: function (stat) {

            },
            notExistModeUncheckTypeAll: true
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
            mode: null,
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
        if (self.mode === 'check') {
            if (stat.checked.length === 0)  {
                type = 'empty'
            }
            else if (stat.uncheck.length === 0) {
                type = 'all'
            }
            else {
                type = 'some'
            }
        }
        else {
            if (stat.uncheck.length === 0)  {
                type = 'empty'
            }
            else if (stat.checked.length === 0) {
                type = 'all'
            }
            else {
                type = 'some'
            }
        }
        if (self.settings.notExistModeUncheckTypeAll) {
            if (self.mode === 'uncheck' && type === 'all') {
                self.mode = 'check'
                type = 'empty'
            }
        }
        if (typeof type === 'undefined') {
            throw new Error('node_modules/picker-mode/lib/index.js triggerChange: not match type,Please tell me https://github.com/fast-flow/picker-mode/issues/new')
        }
        if (typeof self.settings.getViewData === 'function') {
            let viewData = self.settings.getViewData()
            stat.viewDataCheckedAll = false
            if (viewData.length !== 0) {
                let viewDataCheckedCount = 0
                viewData.some(function (id) {
                    let unchecked = self.data.forEach(function (item) {
                        if (item.id === id && item.checked === true) {
                            viewDataCheckedCount++
                        }
                    })
                    return unchecked
                })
                if (viewDataCheckedCount === viewData.length) {
                    stat.viewDataCheckedAll = true
                }
            }
        }
        stat.mode = self.mode
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
    uncheckAll = () => {
        const self = this
        self.mode = 'check'
        self.data = self.data.map(function (item) {
            item.checked = false
            return item
        })
        self.triggerChange()
    }
    checkViewData = () => {
        const self = this
        let viewData = self.settings.getViewData()
        viewData.forEach(function (id) {
            self._find(id, function check(item) {
                item.checked = true
                return item
            }, 'checked')
        })
        self.triggerChange()
    }
    uncheckViewData = () => {
        const self = this
        let viewData = self.settings.getViewData()
        viewData.forEach(function (id) {
            self._find(id, function check(item) {
                item.checked = false
                return item
            }, 'checked')
        })
        self.triggerChange()
    }
    clear = () => {
        const self = this
        self.mode = 'check'
        self.data = []
        self.triggerChange()
    }
    concat = (idArray) => {
        const self = this
        let newData = idArray.map(function (id) {
            let checked = self.mode !== 'check'
            return {
                id: id,
                checked: checked
            }
        })
        self.data = self.data.concat(newData)
        self.triggerChange()
    }
}
export default Picker
