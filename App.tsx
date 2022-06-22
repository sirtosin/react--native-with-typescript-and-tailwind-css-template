import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="mt-6">
        <View>
          <View className="flex-1 items-center justify-center bg-red-500 m-2 rounded p-4">
            <Text className="text-white">tosin how fa</Text>
          </View>
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
