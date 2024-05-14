import { Text, View, Image } from "react-native";
import rocket from "../../../assets/rocket.png";

export function Title() {
  return (
    <View className="flex-row items-center">
      <Image source={rocket} className="mr-2" />
      <Text className="text-4xl font-bold">
        <Text className="text-[#4EA8DE]">to</Text>
        <Text className="text-[#5E60CE]">do</Text>
      </Text>
    </View>
  );
}
