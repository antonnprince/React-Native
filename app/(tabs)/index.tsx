import { Text, View,Image,ScrollView } from "react-native";
import {Link} from "expo-router"
import "../global.css"
import bg from "../../assets/images/bg.png"
import logo from "../../assets/icons/logo.png"
import Search from "../../components/Search"
import { useRouter } from "expo-router";

export default function Index() {
  
  const router = useRouter()
  
  return (
    <View
     className="flex-1 bg-primary"
    >
    <Text className="font-bold text-[#030014] text-xl">Welcome man </Text>

      <Image
      source={bg}
      className="absolute w-full z-0"
      />

      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{minHeight:'100%', paddingBottom:10}} //applies styleing to the content inside scrollview
      className="flex-1 px-5">
          <Image 
            source={logo}
            className="w-12 h-10 mt-20 mb-5 mx-auto"
          />


          <View>
            <Search
              onPress={ ()=> router.push('/search') }
              placeholder="Search for movie"
            />
          </View>
      </ScrollView>

    </View>
  );
}
