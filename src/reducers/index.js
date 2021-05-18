const events = (state = [], action ) => {
    //state = []　stateが未定義だった場合
    switch(action.type){
        case 'CREATE_EVENT':
            const event= {title: action.title, body: action.body}
            const length = state.length //　IDが空かを長さで判定
            let id
            if(length === 0 ){ //からの場合
                //IDがからっぽ
                id = 1
            } else {
                //最後の要素のidに依存
                //最後の要素から−１してid二＋一でも止める
                id = state[length - 1].id + 1
            }
            return [...state, { id, ...event }]
        case 'DELETE_EVENT':
            return state
        case 'DELETE_ALL_EVENT':
            return []

        default:
            return state
    }
}

export default events