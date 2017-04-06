import Picker from "../lib/index"
describe('del', function () {
    it('del', function () {
        var data
        var attr
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
            onChange: function (stat, selfdata) {
                data = stat
                attr = selfdata
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
        expect(attr).toEqual({
            "data": [
                {
                    "id": "f23iuh23bff2",
                    "checked": false
                },
                {
                    "id": "3tufh23ifghuw",
                    "checked": false
                },
                {
                    "id": "g32igh2iughh3",
                    "checked": false
                }
            ],
            "mode": "check"
        })
    })
})
