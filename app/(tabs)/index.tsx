import { Text, View } from "react-native";
import {Link} from "expo-router"
import "../global.css"

export default function Index() {
  return (
    <View
     className="flex-1 justify-center items-center"
    >
    <Text className="font-bold text-[#030014] text-xl">Welcome man </Text>
    {/* <Link href="/movies/avengers">Go to Avengers</Link> */}
    <Text className="">New test text</Text>
    </View>
  );
}
