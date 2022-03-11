import React from 'react';
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    overflow-y: auto;
`;

const TodoList = () => {
    return(
    <TodoListBlock>
        <TodoItem text="프로젝트 생성하기" done={true} />
    </TodoListBlock>
);
};

export default TodoList;