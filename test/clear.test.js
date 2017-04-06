import Picker from "../lib/index"
const commonTestGetViewData = function () {
    return ['f23iuh23bff2', '3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3']
}
describe('clear', function () {
    it('clear', function () {
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
            viewDataCheckedAll: false,
            type: 'empty'
        })
        picker.checkAll()
        expect(data).toEqual({
            mode: 'uncheck',
            checked: ['f23iuh23bff2','3tufh23ifghuw', 'g24hg823hg232', 'g32igh2iughh3'],
            uncheck: [],
            viewDataCheckedAll: true,
            type: 'empty'
        })
        picker.clear()
        expect(data).toEqual({
            mode: 'check',
            checked: [],
            uncheck: [],
            viewDataCheckedAll: false,
            type: 'empty'
        })
    })
})
