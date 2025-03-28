import {Image, View, Text,TextInput  } from 'react-native'
import React from 'react'
import search from "../assets/icons/search.png"


interface Props {
    placeholder:string,
    onPress?:()=>void
}

const Search = ({placeholder, onPress}: Props) => {
  return (
    <View
    className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'
    >   
        <Image 
            source={search}
            className='size-5'
            resizeMode='contain'
            tintColor="#ab8bff"
        />

        <TextInput 
            onPress={onPress}
            placeholder={placeholder}
            value=''
            onChangeText={()=>{}}
            placeholderTextColor="#ab8bff"
            className='flex-1 ml-2 text-white'
        />
      <Text>Search</Text>
    </View>
  )
}

export default Search