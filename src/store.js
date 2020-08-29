import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './reducers/';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist:[
        'todos',
        'current_id'
    ],
    blacklist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {
    store,
    persistor
};