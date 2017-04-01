var React = require('react')
var Picker = require('picker-mode').default
// import Picker from "picker-mode"

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
                id: 'g24hg823hg232',
                text: '999@gmail.com'
            },
            {
                id: 'g32igh2iughh3',
                text: 'wehfiu2q3@tom.cc'
            }
        ]
        state.data = data
        self.picker = new Picker({
            data: data,
            onChange: function (stat) {
                console.log(stat)
            }
        })

        self.setState(state)
    },
    change: function (id, checked) {
        const self = this
        if (checked) {
            self.picker.checked(id)
        }
        else {
            self.picker.uncheck(id)
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                {
                    self.state.data.map(function(item, key) {
                        return (
                            <Item key={key} id={item.id} text={item.text} checked={item.checked} onChange={self.change} />
                        )
                    })
                }
            </div>
        )
    }
})
module.exports = App
