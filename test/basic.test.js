import Picker from "../lib/index"

// localStorage 缓存选中项 (还需要缓存当前是全局选择模式)

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
        // NOTE: 可通过 checked 选中某项，调用后 onChange会立即回调
        picker.checked('3tufh23ifghuw')
        expect(data).toEqual(
            {
                checked: [
                    '3tufh23ifghuw'
                ],
                uncheck: [
                    'f23iuh23bff2',
                    'g24hg823hg232',
                    'g32igh2iughh3'
                ],
                type: 'some'
            }
        )
        picker.checked('f23iuh23bff2')
        expect(data).toEqual(
            {
                checked: [
                    'f23iuh23bff2',
                    '3tufh23ifghuw',

                ],
                uncheck: [
                    'g24hg823hg232',
                    'g32igh2iughh3'
                ],
                type: 'some'
            }
        )
        picker.checked('g24hg823hg232')
        expect(data).toEqual(
            {
                checked: [
                    'f23iuh23bff2',
                    '3tufh23ifghuw',
                    'g24hg823hg232'

                ],
                uncheck: [
                    'g32igh2iughh3'
                ],
                type: 'some'
            }
        )
        picker.checked('g32igh2iughh3')
        expect(data).toEqual(
            {
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
        // NOTE: checked 只会选中某些项，如果 stat.checked 中存在这一项，则数据不会做任何改变，但 onChange会被回调
        picker.checked('g32igh2iughh3')
        expect(data).toEqual(
            {
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
                checked: [],
                uncheck: ['f23iuh23bff2', '3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
                type: 'empty'
            }
        )
        picker.checked('f23iuh23bff2')
        expect(data).toEqual(
            {
                checked: ['f23iuh23bff2'],
                uncheck: ['3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
                type: 'some'
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
            checked: [],
            uncheck: ['f23iuh23bff2','3tufh23ifghuw', 'g32igh2iughh3'],
            type: 'empty'
        })
        picker.checked('3tufh23ifghuw')
        expect(data).toEqual({
            checked: ['3tufh23ifghuw'],
            uncheck: ['f23iuh23bff2', 'g32igh2iughh3'],
            type: 'some'
        })
        picker.del('3tufh23ifghuw')
        expect(data).toEqual({
            checked: [],
            uncheck: ['f23iuh23bff2', 'g32igh2iughh3'],
            type: 'empty'
        })
    })
    it('clear', function () {
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
        // NOTE: clear 用于清除所有数据，一般在删除列表所有内容的时候才需要调用
        picker.clear()
        expect(data).toEqual(
            {
                checked: [],
                uncheck: [],
                type: 'empty'
            }
        )
    })
    it('checkedAll', function () {
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
            // NOTE: viewData 是当前页面中显示数据的 id （用于与 picker.checkedAll state.type="pickerAll" 关联）
            viewData: function () {
                return [
                    '3tufh23ifghuw',
                    'g24hg823hg232',
                    'g32igh2iughh3'
                ]
            },
            onChange: function (stat) {
                data = stat
            }
        })
        expect(data).toEqual({
            checked: [],
            uncheck: ['f23iuh23bff2','3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
            type: 'empty'
        })
        // NOTE: checkedAll 用于选中 viewData 中的数据，选中所有数据请使用 picker.checkedGlobalAll()
        picker.checkedAll()
        expect(data).toEqual({
            checked: ['3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
            uncheck: ['f23iuh23bff2'],
            type: 'some'
        })
    })
    it('checkedGlobalAll', function () {
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
            viewData: function () {
                return [
                    '3tufh23ifghuw',
                    'g24hg823hg232',
                    'g32igh2iughh3'
                ]
            },
            onChange: function (stat) {
                data = stat
            }
        })
        expect(data).toEqual({
            checked: [],
            uncheck: ['f23iuh23bff2','3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
            type: 'empty'
        })
        picker.checkedGlobalAll()
        expect(data).toEqual({
            checked: ['f23iuh23bff2','3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
            uncheck: [],
            type: 'globalAll'
        })
        picker.uncheck('3tufh23ifghuw')
        expect(data).toEqual({
            checked: ['f23iuh23bff2', 'g24hg823hg232', 'g32igh2iughh3'],
            uncheck: ['3tufh23ifghuw'],
            type: 'globalSome'
        })
        picker.uncheck('f23iuh23bff2')
        picker.uncheck('g24hg823hg232')
        picker.uncheck('g32igh2iughh3')
        expect(data).toEqual({
            checked: [],
            uncheck: ['f23iuh23bff2','3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
            type: 'empty'
        })
        picker.checked('f23iuh23bff2')
        // 此处逻辑需要确认
        expect(data).toEqual({
            checked: ['f23iuh23bff2'],
            uncheck: ['3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
            type: 'globalSome'
        })
    })
})
