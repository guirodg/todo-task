import { Text, TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  colorButton: string;
  onAddTask: () => void;
};

export function Input({ colorButton, onAddTask }: Props) {
  return (
    <View className="w-full flex-row mt-4 mb-11">
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#f1f1f1"}
        className="bg-slate-800 h-14 rounded-md text-gray-50 p-5 text-base flex-1 mr-2"
      />

      <TouchableOpacity
        className={`items-center justify-center w-14 h-14 rounded-md ${colorButton}`}
        onPress={onAddTask}
      >
        <Text className="text-gray-50 text-2xl">+</Text>
      </TouchableOpacity>
    </View>
  );
}
