var ReactDOM = require('react-dom')
var render = ReactDOM.render

// viewDataCheckedAll
;(function (node) {
    if (!node) {return}
    require(['./viewDataCheckedAll.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__viewDataCheckedAll_node'))

// checkAll
;(function (node) {
    if (!node) {return}
    require(['./checkAll.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__checkAll_node'))
