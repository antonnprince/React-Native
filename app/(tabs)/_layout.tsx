import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Tabs} from "expo-router"
// import {images} from "@/constants/images.ts"
import highlight from "../../assets/images/highlight.png";
import home from "../../assets/icons/home.png"

const TabIcon=({focused, icon, title}:any)=>{
    if(focused)
    return(
        <ImageBackground 
            source={highlight}
            className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 justify-center items-center rounded-full overflow-hidden'
        >

        <Image 
            source={icon}
            className="size-5"
            tintColor="#151312"
        />

        <Text
        className='text-secondary text-base font-semibold text-md'
        >{title}</Text>
        </ImageBackground>
    
    )

    return(
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={icon} tintColor="#151312" className='size-5' />
        </View>
    )
}

const _Layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarItemStyle:{
                width:'100%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center'
            },
            tabBarStyle:{
                backgroundColor:'#0f0D23',
                borderRadius:50,
                marginHorizontal:20,
                marginBottom:36,
                
            }
        }}
    >
        <Tabs.Screen 
        name='index'
        options={{
            title:"index",
            headerShown:false,
            tabBarIcon:({focused})=>(
                <TabIcon focused={focused} icon={home} title="Home"/>
            )
        }}
        />

        <Tabs.Screen 
            name='search'
            options={{
                title:'Search',
                headerShown:false,
                
            }}
        />

        <Tabs.Screen 
            name='profile'
            options={{
                title:'Profile',
                headerShown:false
            }}
        />

        <Tabs.Screen 
            name='saved'
            options={{
                title:'Saved',
                headerShown:false
            }}
        />
    </Tabs>
  )
}

export default _Layout

const styles = StyleSheet.create({})