import { Text, View, Image, TouchableOpacity, Task } from "react-native";
import { Checkbox } from "react-native-paper";

import trash from "../../../assets/tash.png";
import { useState } from "react";

type Props = {
  taskName: string;
  onRemove: () => void;
  onDoneTask: () => void;
  checked: boolean;
};

export function TaskComponent({
  taskName,
  onRemove,
  onDoneTask,
  checked,
}: Props) {
  const lineThroughText = "text-white line-through";

  return (
    <View className="mt-2 flex-row items-center w-80">
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          onDoneTask();
        }}
        color="#4EA8DE"
        theme={{ roundness: 3 }}
      />

      <Text className={`${checked ? lineThroughText : "text-white"}`}>
        {taskName}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Image className="ml-4" source={trash} />
      </TouchableOpacity>
    </View>
  );
}
