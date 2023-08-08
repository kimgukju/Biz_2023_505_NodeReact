import TodoInput from "../comps/TodoInput";
import TodoList from "../comps/TodoList";

const TodoMain = () => {
  return (
    <>
      <h1>메모 입력</h1>
      <TodoInput />
      <TodoList />
    </>
  );
};

export default TodoMain;
