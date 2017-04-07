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
            data:[]
        }
    },
    picker: null,
    componentWillMount () {
        var self = this
        var state = self.state
        var data = list.query({
            page: 1,
            pageSize: 10
        }).data
        console.log(list.query({
            page: 1,
            pageSize: 10
        }))
        state.data = data
        self.picker = new Picker({
            data: state.data.map(function(item) {
                return {
                    id: item.id,
                    checked: false
                }
            }),
            getViewData: function () {
                return state.data.map(function(item){
                    return item.id
                })
            },
            onChange: function (stat) {
                state.stat = stat
                self.setState(state)
            }
        })
        self.setState(state)
    },
    change: function (id, checked) {
        const self = this
        if (checked) {
            self.picker.check(id)
        }
        else {
            self.picker.uncheck(id)
        }
    },
    render: function () {
        var self = this
        return (
            <div>
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
                <pre>{jsonFormat(self.state.stat)}</pre>
                <button type="button" onClick={self.next} >next</button>
            </div>
        )
    }
})
module.exports = App
