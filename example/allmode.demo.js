var React = require('react')
var Picker = require('picker-mode').default
// import Picker from "picker-mode"
var jsonFormat = require('json-format')

var Item = React.createClass({
    render: function () {
        var self = this
        var checked = self.props.checked
        if (self.props.stat.viewDataCheckedAll) {
            checked = false
        }
        return (
            <label style={{cursor: 'pointer', display: 'block'}} >
                <input type="checkbox" checked={checked} onChange={function (e) {
                        self.props.onChange(self.props.id, e.target.checked)
                    }} />
                {
                    self.props.text
                }
            </label>
        )
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
        var data = [
            {
                id: 'f23iuh23bff2',
                text:'mail@qq.com'
            },
            {
                id: '3tufh23ifghuw',
                text: 'abc@163.com'
            },
            {
                id: 'g24hg823hg`232',
                text: '999@gmail.com'
            },
            {
                id: 'g32igh2iughh3',
                text: 'wehfiu2q3@tom.cc'
            }
        ]
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
        if (self.state.stat.viewDataCheckedAll && checked) {
            self.picker.uncheckViewData()
            self.picker.check(id)
        }
        else {
            if (checked) {
                self.picker.check(id)
            }
            else {
                self.picker.uncheck(id)
            }
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
                        }} />选择全部
                </label>
                {
                    self.state.data.map(function(item, key) {
                        let checked = self.state.stat.checked.indexOf(item.id) !== -1
                        return (
                            <Item stat={self.state.stat} key={key} id={item.id} text={item.text} checked={checked} onChange={self.change} />
                        )
                    })
                }
                <pre>{jsonFormat(self.state.stat)}</pre>
            </div>
        )
    }
})
module.exports = App
