import React from 'react';
import { View } from 'react-native';
import { Appbar, DefaultTheme,  Provider as PaperProvider } from 'react-native-paper';
// redux stuff
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store'
import {Provider} from 'react-redux';

import AddTodo from './src/components/AddTodo';
import TodoList from './src/components/TodoList';


export default function App () {
    
    return (
        <PaperProvider theme={theme}>
            <View>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Appbar.Header>
                            <Appbar.Content 
                                title="Stuff we gotta get done today"
                                subtitle="Your focus determines your reality"    
                            />                               
                        </Appbar.Header>
                        <AddTodo/>
                        <TodoList/>
                    </PersistGate>
                </Provider>
            </View>
        </PaperProvider>
    );
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FCF4A3',
    }
}

