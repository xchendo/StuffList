import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

class AddTodo extends Component {
    state = {todo: ''};

    render = () => {
        return (
            <View>
                <TextInput
                    value={this.state.todo}
                    onChangeText={(todo) => {
                        this.setState({todo});
                    }}
                    style={styles.todoInput}
                    mode='outlined'
                />
                <Button
                    mode='contained'
                    icon='plus'
                    color='#000080'
                    onPress={() => {
                        this.props.addTodo(this.state.todo);
                        this.setState({todo: ''});
                    }}>
                    Get it done!
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoInput: {
        marginBottom: 10,
        marginTop: 5
    }
})

export default connect(null,{addTodo})(AddTodo);