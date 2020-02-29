import React from 'react';
import {connect} from 'react-redux';
import { View } from 'react-native';
import {Divider, List} from 'react-native-paper';
import { removeTodo } from '../actions';

const TodoList = (props) => {
    return (
        <View >
            <List.Section>
                {props.todos.map((todo,index) => {
                    return (
                        <View key={`${index}-listitem`}>
                            <List.Item
                                title={todo ? todo.todo : ''}
                                key={todo? todo.current_id : 0}
                                onPress={() => props.removeTodo(todo)}
                            />
                            <Divider key={`${index}-divider`}/>
                        </View>
                    );
                })}
            </List.Section>
        </View >
    )
}

const mapStateToProps = (state=[]) => {
    return {
        todos: state.todos,
        current_id: state.current_id
    }
}

export default connect(mapStateToProps,{removeTodo})(TodoList);