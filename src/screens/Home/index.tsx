import { FlatList, Text, View, Image } from "react-native";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";

import clipBoard from "../../../assets/Clipboard.png";
import { useState } from "react";

export function Home() {
  const [todoList, setTodoList] = useState();

  function handleAddTask() {
    console.log("Clicou no botao");
  }

  return (
    <View className="bg-black flex-1 p-5 items-center">
      <Title />

      <Input colorButton="bg-[#1E6F9F]" onAddTask={handleAddTask} />

      <View className="flex-row space-x-40 border-solid border-b-2 border-sky-950">
        <Text className="text-[#4EA8DE] p-4">{`Criadas: 0`}</Text>
        <Text className="text-[#5E60CE] p-4">{`Concluidas: 0`}</Text>
      </View>

      <FlatList
        data={null}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text className="text-white">{item}</Text>}
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
