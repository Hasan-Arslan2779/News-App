import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInRight,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("@/assets/images/getting-started.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.wrapper}>
          <Animated.Text
            entering={FadeInRight.delay(0).duration(500)}
            style={styles.tittle}
          >
            Stay updated!
          </Animated.Text>
          <Animated.Text
            entering={FadeInRight.delay(700).duration(500)}
            style={styles.description}
          >
            Get breaking news and personalized updates directly to your feed.
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => router.replace("/(tabs)")}
            >
              <Text style={styles.btnText}>Get Stardet</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 30,
    gap: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  tittle: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 36,
    textAlign: "center",
  },
  description: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: "center",
  },
  btn: {
    paddingVertical: 15,
    backgroundColor: Colors.tint,
    marginVertical: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    color: Colors.white,
    fontWeight: "700",
  },
});