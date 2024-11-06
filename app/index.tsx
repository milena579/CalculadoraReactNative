import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "../components/row";
import Button from "../components/button";
import calculator, { initialState } from "../util/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export default function Mostrar() {
    const [current, setCurrent] = useState<string>("")
    
    function handleTap({value} : {value : string}){
        setCurrent(current + value);
    }

    return(
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(current).toLocaleString()}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => handleTap({value : "C"})}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => handleTap({value : "+/-"})}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => handleTap({value : "%"})}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => handleTap({value : "/"})}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => handleTap({value : "7"})} />
            <Button text="8" onPress={() =>  handleTap({value : "8"})} />
            <Button text="9" onPress={() =>  handleTap({value : "9"})} />
            <Button
              text="x"
              theme="accent"
              onPress={() =>  handleTap({value : "*"})}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => handleTap({value : "4"})} />
            <Button text="5" onPress={() => handleTap({value : "5"})} />
            <Button text="6" onPress={() => handleTap({value : "6"})} />
            <Button
              text="-"
              theme="accent"
              onPress={() => handleTap({value : "-"})}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => handleTap({value : "1"})} />
            <Button text="2" onPress={() => handleTap({value : "2"})} />
            <Button text="3" onPress={() => handleTap({value : "3"})} />
            <Button
              text="+"
              theme="accent"
              onPress={() => handleTap({value : "+"})}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => handleTap({value : "0"})}
            />
            <Button text="." onPress={() => handleTap({value : "0"})} />
            <Button
              text="="
              theme="accent"
              onPress={() => handleTap({value : "="})}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
}

