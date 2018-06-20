
export default {
    namespace: 'portal',
    state: {
        list: []
    },
    reducers: {
        'save'(state, action) {
            return { list: action.data};
        },
        'delete'(state, { payload: id }) {
            let { list=[] } = state;
            list = list.filter(item => item.id !== id);
            return { list };
        },
    },
    effects: {
        *fetch({ payload }, { put, call }) {  // eslint-disable-line
            const list = [
                { name: 'name1', id: 1 },
                { name: 'name2', id: 2 },
                { name: 'name3', id: 3 },
                { name: 'name4', id: 4 },
                { name: 'name5', id: 5 },
            ];
            yield put({ type: 'save', data: list });
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            return history.listen(({ pathname }) => {
                if (/^\/portal/.test(pathname)) {
                    dispatch({ type: 'fetch' });
                }
            });
        },
    }, 
};
