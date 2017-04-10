var React = require('react')
var Picker = require('picker-mode').default
var sham = require('shamjs')
// import Picker from "picker-mode"
var jsonFormat = require('json-format')

var Item = React.createClass({
    render: function () {
        var self = this
        return (
            <label style={{cursor: 'pointer', display: 'block'}} >
                <input type="checkbox" checked={self.props.checked} onChange={function (e) {
                        self.props.onChange(self.props.id, e.target.checked)
                    }} />
                {
                    self.props.text
                }
            </label>
        )
    }
})
var list = new sham.List({
    dataCount: 123,
    generator: function (index) {
        var num = index + 1
        return {
            id: 'id-' + num,
            text: 'text-' + num
        }
    },
    onSearch: function (item, search) {
        return item.text.indexOf(search) !== -1
    }
})
var App = React.createClass({
    getInitialState: function () {
        return {
            data:[],
            page: 1
        }
    },
    picker: null,
    componentWillMount () {
        var self = this
        var state = self.state
        var listData = list.query({
            page: 1,
            pageSize: 5
        })
        state.dataCount = listData.dataCount
        state.data = listData.data
        self.picker = new Picker({
            data: state.data.map(function(item) {
                return {
                    id: item.id,
                    checked: false
                }
            }),
            getDataCount: function () {
                return self.state.dataCount
            },
            getViewData: function () {
                return self.state.data.map(function(item){
                    return item.id
                })
            },
            onChange: function (stat) {
                var state = self.state
                state.stat = stat
                self.setState(state)
            }
        })
        self.setState(state)
    },
    change: function (id, checked) {
        var self = this
        if (checked) {
            self.picker.check(id)
        }
        else {
            self.picker.uncheck(id)
        }
    },
    renderList: function (page, data) {
        var self = this
        var state = self.state
        state.page = page
        state.data = data
        self.picker.concat(data.map(function(item){
            return item.id
        }))
        self.setState(state)
    },
    next: function () {
        var self = this
        var state = self.state
        var page = self.state.page + 1
        var listData = list.query({
            page: page,
            pageSize: 5
        })
        if (page > listData.pageCount) {
            page = listData.pageCount
        }
        self.renderList(page, listData.data)
    },
    prev: function () {
        var self = this
        var state = self.state
        var page = self.state.page - 1
        if (page < 1) {
            page = 1
        }
        var listData = list.query({
            page: page,
            pageSize: 5
        })
        self.renderList(page, listData.data)
    },
    render: function () {
        var self = this
        return (
            <div>
                选中(
                    {
                        self.state.stat.mode === 'check'?
                        self.state.stat.checked.length:
                        self.state.dataCount - self.state.stat.uncheck.length
                    }
                )
                个
                <label>
                    <input type="checkbox" checked={self.state.stat.mode === 'uncheck' && self.state.stat.type === 'empty'} onChange={function (e) {
                            if (e.target.checked) {
                                self.picker.checkAll()
                            }
                            else {
                                self.picker.uncheckAll()
                            }
                        }} />选择所有
                </label>
                <label>
                    <input type="checkbox" checked={self.state.stat.viewDataCheckedAll} onChange={function (e) {
                            if (e.target.checked) {
                                self.picker.checkViewData()
                            }
                            else {
                                self.picker.uncheckViewData()
                            }
                        }} />选择当前页
                </label>
                {
                    self.state.data.map(function(item, key) {
                        let checked = self.state.stat.checked.indexOf(item.id) !== -1
                        return (
                            <Item key={key} id={item.id} text={item.text} checked={checked} onChange={self.change} />
                        )
                    })
                }
                <button type="button" onClick={self.prev} >prev({self.state.page})</button>
                <button type="button" onClick={self.next} >next({self.state.page})</button>
                <pre>{jsonFormat(self.state.stat)}</pre>
            </div>
        )
    }
})
module.exports = App
