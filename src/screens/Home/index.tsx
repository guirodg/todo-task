import { FlatList, Text, View, Image } from "react-native";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";

import clipBoard from "../../../assets/Clipboard.png";
import { useState } from "react";
import { TaskComponent } from "../../components/Task";

type Task = {
  id: number;
  done: boolean;
  frase: string;
};

export function Home() {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [checked, setChecked] = useState(false);
  const [done, setDone] = useState<number[]>([]);

  function handleAddTask() {
    if (taskDescription.trim() !== "") {
      const newTask: Task = {
        id: todoList.length + 1,
        done: false,
        frase: taskDescription,
      };
      setTodoList((prevState) => [...prevState, newTask]);
      setTaskDescription("");
    }
  }

  function handleRemoveTask(task: Task) {
    setTodoList((prevState) => prevState.filter((t) => t !== task));
  }

  function handleDoneTask(task: Task) {
    const taskIndex = done.findIndex((id) => id === task.id);

    if (taskIndex === -1) {
      setDone((prevState) => [...prevState, task.id]);
    } else {
      setDone((prevState) => prevState.filter((id) => id !== task.id));
    }
    setChecked(!checked);
  }

  const tarefasNaoConcluidas = todoList.filter(
    (task) => !done.includes(task.id)
  );

  return (
    <View className="bg-black flex-1 p-5 items-center">
      <Title />

      <Input
        colorButton="bg-[#1E6F9F]"
        onAddTask={handleAddTask}
        taskName={taskDescription}
        setTaskName={setTaskDescription}
      />

      <View className="flex-row space-x-40 border-solid border-b-2 border-sky-950">
        <Text className="text-[#4EA8DE] p-4">{`Criadas: ${tarefasNaoConcluidas.length}`}</Text>
        <Text className="text-[#5E60CE] p-4">{`Concluidas: ${
          done.length === 0 ? 0 : done
        }`}</Text>
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskComponent
            onDoneTask={() => handleDoneTask(item)}
            taskName={item.frase}
            onRemove={() => handleRemoveTask(item)}
            checked={checked}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <View className="flex-1 items-center mt-8">
              <Image source={clipBoard} />
            </View>

            <Text className="mt-3 text-[#808080] text-center font-bold text-base">
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text className="text-[#808080] text-center">
              Crie tarefas e organize seus itens a fazer
            </Text>
          </>
        )}
      />
    </View>
  );
}
