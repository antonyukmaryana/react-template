iimport React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from "react-router-dom";

const render = (Component) => {
    var bodyStyle={backgroundColor: 'black'};
    document.body.style.backgroundColor = "lightyellow";
    document.body.style.margin="0";

    ReactDOM.render(
        <AppContainer style={bodyStyle}>
            <HashRouter>
                <Component/>
            </HashRouter>
        </AppContainer>,
        document.getElementById('react-app-root')
    );
};

render(App);
/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    });
}
/*eslint-enable */