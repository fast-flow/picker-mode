import Picker from "../lib/index"

// localStorage 缓存选中项 (还需要缓存当前是全局选择模式)
const commonTestGetViewData = function () {
    return ['f23iuh23bff2', '3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3']
}
describe('basic.test.js', function () {
    it('checked', function () {
        let data
        var picker = new Picker({
            data: [
                {
                    id: 'f23iuh23bff2',
                    checked: false
                },
                {
                    id: '3tufh23ifghuw',
                    checked: false
                },
                {
                    id: 'g24hg823hg232',
                    checked: false
                },
                {
                    id: 'g32igh2iughh3',
                    checked: false
                }
            ],
            onChange: function (stat) {
                data = stat
            }
        })
        /*
        NOTE: onChange 在 `new Picker` 时候会立即调用， onChange 返回一个统计信息，{checked:Array, uncheck:Array, type: String}
             type 可以是 globalAll all some empty globalSome pickerAll
        */

        expect(data).toEqual(
            {
                mode : 'check',
                checked: [

                ],
                uncheck: [
                    'f23iuh23bff2',
                    '3tufh23ifghuw',
                    'g24hg823hg232',
                    'g32igh2iughh3'
                ],
                type: 'empty'
            }
        )
        // NOTE: 可通过 check 选中某项，调用后 onChange会立即回调
        picker.check('3tufh23ifghuw')
        expect(data).toEqual(
            {
                mode : 'check',
                checked: [
                    '3tufh23ifghuw',
                ],
                uncheck: [
                    'f23iuh23bff2',
                    'g24hg823hg232',
                    'g32igh2iughh3'
                ],
                type: 'some'
            }
        )

        // NOTE: check 只会选中某些项，如果 stat.checked 中存在这一项，则数据不会做任何改变，但 onChange会被回调
        picker.check('3tufh23ifghuw')
        expect(data).toEqual(
            {
                mode : 'check',
                checked: [
                    '3tufh23ifghuw',
                ],
                uncheck: [
                    'f23iuh23bff2',
                    'g24hg823hg232',
                    'g32igh2iughh3'
                ],
                type: 'some'
            }
        )
        // NOTE: check() 可以传入数组
        picker.check(['f23iuh23bff2', 'g24hg823hg232', 'g32igh2iughh3'])
        expect(data).toEqual(
            {
                mode : 'check',
                checked: [
                    'f23iuh23bff2',
                    '3tufh23ifghuw',
                    'g24hg823hg232',
                    'g32igh2iughh3'
                ],
                uncheck: [],
                type: 'all'
            }
        )
    })
    it('uncheck', function () {
        var data
        var picker = new Picker({
            data: [
                {
                    id: 'f23iuh23bff2',
                    checked: true
                },
                {
                    id: '3tufh23ifghuw',
                    checked: false
                },
                {
                    id: 'g24hg823hg232',
                    checked: true
                },
                {
                    id: 'g32igh2iughh3',
                    checked: false
                }
            ],
            onChange: function (stat) {
                data = stat
            }
        })
        expect(data).toEqual(
            {
                mode: 'check',
                checked: [
                    'f23iuh23bff2',
                    'g24hg823hg232'
                ],
                uncheck: [
                    '3tufh23ifghuw',
                    'g32igh2iughh3'
                ],
                type: 'some'
            }
        )
        // NOTE: 可通过 uncheck(id) 取消选中某项
        picker.uncheck('f23iuh23bff2')
        expect(data).toEqual(
            {
                mode: 'check',
                checked: [
                    "g24hg823hg232"
                ],
                uncheck: [
                    "f23iuh23bff2",
                    "3tufh23ifghuw",
                    "g32igh2iughh3"
                ],
                type:"some"
            }
        )
        picker.uncheck('g24hg823hg232')
        expect(data).toEqual(
            {
                mode: 'check',
                checked: [],
                uncheck: ['f23iuh23bff2', '3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
                type: 'empty'
            }
        )
        picker.check(['f23iuh23bff2', '3tufh23ifghuw'])
        expect(data).toEqual(
            {
                mode: 'check',
                checked: ['f23iuh23bff2', '3tufh23ifghuw'],
                uncheck: [ 'g24hg823hg232', 'g32igh2iughh3'],
                type: 'some'
            }
        )
        // NOTE: uncheck(id) 也支持数组
        picker.uncheck(['f23iuh23bff2', '3tufh23ifghuw'])
        expect(data).toEqual(
            {
                mode: 'check',
                checked: [],
                uncheck: ['f23iuh23bff2', '3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
                type: 'empty'
            }
        )
    })
    it('del', function () {
        var data
        var picker = new Picker({
            data: [
                {
                    id: 'f23iuh23bff2',
                    checked: false
                },
                {
                    id: '3tufh23ifghuw',
                    checked: false
                },
                {
                    id: 'g24hg823hg232',
                    checked: false
                },
                {
                    id: 'g32igh2iughh3',
                    checked: false
                }
            ],
            onChange: function (stat) {
                data = stat
            }
        })
        // NOTE: 用于删除某一项目， 一般是在用户点击删除某条数据时调用，删除所有数据请使用 picker.clear()
        picker.del('g24hg823hg232')
        expect(data).toEqual({
            mode: 'check',
            checked: [],
            uncheck: ['f23iuh23bff2','3tufh23ifghuw', 'g32igh2iughh3'],
            type: 'empty'
        })
        picker.check('3tufh23ifghuw')
        expect(data).toEqual({
            mode: 'check',
            checked: ['3tufh23ifghuw'],
            uncheck: ['f23iuh23bff2', 'g32igh2iughh3'],
            type: 'some'
        })
        picker.del('3tufh23ifghuw')
        expect(data).toEqual({
            mode: 'check',
            checked: [],
            uncheck: ['f23iuh23bff2', 'g32igh2iughh3'],
            type: 'empty'
        })
    })
    it('checkAll', function () {
        var data
        var picker = new Picker({
            data: [
                {
                    id: 'f23iuh23bff2',
                    checked: false
                },
                {
                    id: '3tufh23ifghuw',
                    checked: false
                },
                {
                    id: 'g24hg823hg232',
                    checked: false
                },
                {
                    id: 'g32igh2iughh3',
                    checked: false
                }
            ],
            // NOTE: getViewData 需要返回当前页面中显示数据的 id
            getViewData: commonTestGetViewData,
            onChange: function (stat) {
                data = stat
            }
        })
        expect(data).toEqual({
            mode: 'check',
            checked: [],
            uncheck: ['f23iuh23bff2','3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
            type: 'empty'
        })
        // NOTE: checkAll 用于选中所有数据，会使得 picker 进入反选模式
        picker.checkAll()
        expect(data).toEqual({
            mode: 'uncheck',
            checked: ['f23iuh23bff2','3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
            uncheck: [],
            type: 'all'
        })
    })
})
