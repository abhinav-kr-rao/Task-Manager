
import { useEffect, useState } from 'react';
import TodoForm from './TodoForm'
import { TodoProvider } from '../contexts/TodoContext';
import TodoItem from './TodoItem'

export default function Home() {

    const [todos, setTodos] = useState([]);



    const addTodo = (currTodo) => {
        currTodo.todo = currTodo.todo.trim();

        if (!currTodo || currTodo.todo.length == 0)
            return;
        setTodos((prevValues) => [...prevValues, { id: Date.now(), ...currTodo }]);
    }

    const editTodo = (id, currTodo) => {
        const newTodos = todos.map((todo) => {
            return (todo.id === id ? currTodo : todo);
        })

        setTodos(newTodos);
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((val) => val.id !== id))
        localStorage.setItem("todos", todos);
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    useEffect(() => {
        const allTodos = JSON.parse(localStorage.getItem('todos'));
        if (allTodos && allTodos.length > 0)
            setTodos(allTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])


    return (
        <TodoProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete }}>

            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Tasks</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => {
                            return (<div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

