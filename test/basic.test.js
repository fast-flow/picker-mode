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
        // 重复选择
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
        picker.clear()
        expect(data).toEqual(
            {
                checked: [],
                uncheck: [],
                type: 'empty'
            }
        )
    })
    it('uncheckAll', function () {

    })
})
