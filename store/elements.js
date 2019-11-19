export const state = () => ({
    list: [
        {
            "blockID": 12345,
            "bName": "Желтый блок",
            "bText": "Любая компания-производитель связывает с каждой своей новой моделью определенные надежды. Зачастую в связи с этим звучат громкие и красивые заявления - прорыв, революция, законодатель моды на ближайшее десятилетие... Но время тут - единственный по-настоящему объективный эксперт.",
            "bgColor": '#f0fff0',
            "settings": [
                {
                    "ID": 36,
                    "Name": "Ширина",
                    "type": "width",
                    "stringType": "int",
                    "filedType": "input",
                    "fieldValue": "100%",
                    "fieldSize": 4,
                },
                {
                    "ID": 37,
                    "Name": "Высота",
                    "type": "height",
                    "stringType": "int",
                    "filedType": "input",
                    "fieldValue": "300px",
                    "fieldSize": 4,
                }
            ],
        },
        {
            "blockID": 12346,
            "bName": "Желтый блок",
            "bgColor": '#fffacd',
            "bText": "Любая компания-производитель связывает с каждой своей новой моделью определенные надежды. Зачастую в связи с этим звучат громкие и красивые заявления - прорыв, революция, законодатель моды на ближайшее десятилетие... Но время тут - единственный по-настоящему объективный эксперт.",
            "settings": [
                {
                    "ID": 36,
                    "Name": "Ширина",
                    "type": "width",
                    "stringType": "int",
                    "filedType": "input",
                    "fieldValue": "100%",
                    "fieldSize": 4,
                },
                {
                    "ID": 37,
                    "Name": "Высота",
                    "type": "height",
                    "stringType": "int",
                    "filedType": "input",
                    "fieldValue": "250px",
                    "fieldSize": 4,
                }
            ],
        }
    ],
    sizes: []
});

export const mutations = {
    SET_SIZE: (state, payload) => {
        if (payload.type === 'width') {
            state.list[0].settings[0].fieldValue = payload.value
        } else if (payload.type === 'height') {
            state.list[0].settings[1].fieldValue = payload.value
        }
    }
};
export const actions = {
    async sendSize({commit}, payload) {
        await this.$axios.post('/api/save', payload)
    },
    async sendAnswer({commit}, payload) {
       await this.$axios.post('/api/save', payload)
    },
    newSize({commit}, payload) {
        commit('SET_SIZE', payload)
    },
};

