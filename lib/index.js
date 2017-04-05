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
        self.mode = 'picker' // "picker" "inverse"
        self.triggerChange()
    }
    _find = (id, handler, caller) => {
        const self = this
        self.data = self.data.map(function(item) {
            if (typeof item.id !== typeof id) {
                console.wran(`node_modules/picker-mode/lib/index.js _find: ${caller}(id) typeof id === "${typeof id}" | typeof data[index].id === ${typeof item.id}`)
            }
            if (item.id === id) {
                item = handler(item)
            }
            return item
        })
    }
    getData () {
        return this.data
    }
    checked = (id) => {
        const self = this
        self._find(id, function checked(item) {
            item.checked = true
            return item
        }, 'checked')
        self.triggerChange()
    }
    clear = () => {
        const self = this
        self.data = []
        self.triggerChange()
    }
    del = (id) => {
        const self = this
        self.data = self.data.filter(function (item) {
            return item.id !== id
        })
        self.triggerChange()
    }
    checkedAll = () => {
        // TODO:// 只将  getShowData 中的内容选中，选中所有数据用 checkedGlobalAll
        self.data = self.data.map(function (item) {
            item.checked = true
        })
        self.triggerChange()
    }
    triggerChange () {
        const self = this
        let type
        let stat = {
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
        if (self.data.length === 0) {
            type = 'empty'
        }
        else if (stat.checked.length === 0) {
            type = 'empty'
        }
        else {
            // checked
            if (stat.uncheck.length === 0) {
                type = 'all'
            }
            else {
                type = 'some'
            }
        }
        if (self.mode === 'inverse') {
            switch(type) {
                case 'all':
                    type = 'globalAll'
                break
                case 'some':
                    type = 'globalSome'
                break
            }
        }
        else {
            
        }
        if (typeof type === 'undefined') {
            throw new Error('node_modules/picker-mode/lib/index.js triggerChange: not match type,Please tell me https://github.com/fast-flow/picker-mode/issues/new')
        }
        stat.type = type
        self.settings.onChange(stat)
    }
    uncheck = (id) => {
        const self = this
        self._find(id, function checked(item) {
            item.checked = false
            return item
        }, 'checked')
        self.triggerChange()
    }
    checkedAll = () => {
        const self = this
        self.data = self.data.map(function (item) {
            if (self.settings.viewData().indexOf(item.id) !== -1) {
                item.checked = true
            }
            return item
        })
        self.triggerChange()
    }
    checkedGlobalAll = () => {
        const self = this
        self.data = self.data.map(function (item) {
            item.checked = true
            return item
        })
        self.mode = 'inverse'
        self.triggerChange()
    }

}
export default Picker
