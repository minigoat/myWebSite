import dva from 'dva';
// import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva({
    onError(err, dispatch) {
        console.error(err);
    },
});

// 2. Plugins
// app.use(createLoading({ namespace: 'loading' }));

// 3. Model
app.model(require('./models/portal').default);
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
