import { v4 as uuidv4 } from "uuid";

const reducer = (currentTodos, action) => {
  switch (action.type) {
    case "added": {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.newTitle,
        details: action.payload.newDetails,
        isCompleted: false,
      };

      const updatedTodos = [...currentTodos, newTodo];

      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    }

    default: {
      throw Error("Unknown Action " + action.type);
    }
  }
  return [];
};

export default reducer;
