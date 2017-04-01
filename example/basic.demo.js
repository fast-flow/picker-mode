var React = require('react')
var Pickermode = require('picker-mode').default
var App = React.createClass({
    getInitialState: function () {
        return {
            show: true
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                {
                    self.state.show?
                    (
                        <Pickermode onClose={function() {
                                self.setState({
                                    show: false
                                })
                            }} >basic</Pickermode>
                    ):null
                }
            </div>
        )
    }
})
module.exports = App
