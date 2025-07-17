
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { styles } from "@/styles/_mainstyle"; 
import { router } from "expo-router";

export default function Index(){
  return(
    <SafeAreaProvider>
  <SafeAreaView style = {{ flex: 1}}>
    <ImageBackground
      source={require("@/assets/images/background-image.png")}
      style={styles.backgroundImageContainer}
      resizeMode="cover">

    <View style={styles.logoContainer}>
          <Image source={require("@/assets/images/Logo.png")} />
    </View>

    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Find your favorite place here</Text>
      <Text style={styles.titleSubText}>The best prices for over 2 </Text>
      <Text style={styles.titleSubText}>million properties worldwide</Text>
    </View>

    <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/join')}>
        <Text style={{ ...styles.buttonPrimaryText, color: "black"}}>Join here</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={() =>router.push('/signin')}>
        <Text style={ styles.buttonSecondaryText}>Sign In</Text>
      </TouchableOpacity>
    </View>

    <View style={{ alignItems: "center", paddingVertical: 20}}>
      <TouchableOpacity onPress={() =>router.push('/(home)')}>
        <Text style={{ color: "white"}}>Continue to home</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  </SafeAreaView>
</SafeAreaProvider>
  )
}
