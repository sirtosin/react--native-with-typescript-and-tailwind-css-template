import {StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
const Home = () => {
    return (
        <View style={
            tw`mt-7`
        }>
            <Text style={tw`text-blue-400 font-bold text-xl`}>Home screen is now live</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
