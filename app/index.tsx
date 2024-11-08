import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image } from "react-native";

import Row from "../components/row";
import Button from "../components/button";
import calculator, { initialState } from "../util/calculator";


export default function Mostrar() {
  const [current, setCurrent] = useState<string>(""); // Estado para a entrada atual
  const [previous, setPrevious] = useState<string>(""); // Estado para armazenar o valor anterior
  const [operator, setOperator] = useState<string>(""); // Estado para o operador atual
  const [calculadoraCientifica, setientifica] = useState<boolean>(false);

  function handleCalculator(calculadoraCientifica : boolean) {
    if(calculadoraCientifica === false) {
      setientifica(true);
    }

    if(calculadoraCientifica === true) {
      setientifica(false);
    }
  }

  function clear() {
    setCurrent("");
  }

  const handleTap = ({ value }: { value: string }) => {
    if (value === "=") {
      if (current && previous && operator) {
        const result = calculator(previous, current, operator); 
        console.log(result)
        setCurrent(result.toString()); 
        setOperator(""); 
      }
    } 
    else if (value === "C") {
      setCurrent("");
      setPrevious("");
      setOperator("");
    } 
    else if (value === "+/-") {
      setCurrent((prev) => (parseFloat(prev) * -1).toString());
    } 
    else if (value === "%") {
      setCurrent((prev) => (parseFloat(prev) / 100).toString());
    } 
    else if (["+", "-", "*", "/"].includes(value)) {
      if (current) {
        setPrevious(current);
        setOperator(value);
        setCurrent(current + value); 
      }
    } else {
      setCurrent((prev) => prev + value);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {current}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              style={styles.btn}
              onPress={() => clear()}
            />
            <Button
              text="+/-"
              theme="secondary"
              style={styles.btn}
              onPress={() => handleTap({ value : "+/-" })}
            />
            <Button
              text="%"
              theme="secondary"
              style={styles.btn}
              onPress={() => handleTap({ value : "%" })}
            />
            <Button
              text="/"
              theme="accent"
              style={styles.btn}
              onPress={() => handleTap({ value : "/" })}
            />
            {calculadoraCientifica ? (
              <Button
                text="x²"
                theme="accent"
                onPress={() => handleTap({ value : "/" })}
              />
            ) : null}
          </Row>

          <Row>
            <Button text="7" style={styles.btn} onPress={() => handleTap({ value : "7" })} />
            <Button text="8" style={styles.btn} onPress={() => handleTap({ value : "8" })} />
            <Button text="9" style={styles.btn} onPress={() => handleTap({ value : "9" })} />
            <Button
              text="x"
              theme="accent"
              style={styles.btn}
              onPress={() => handleTap({ value : "*" })}
            />
            {calculadoraCientifica ? (
              <Button
                text="x³"
                theme="accent"
                onPress={() => handleTap({ value : "/" })}
              />
            ) : null}
          </Row>

          <Row>
            <Button text="4" style={styles.btn} onPress={() => handleTap({ value : "4" })} />
            <Button text="5" style={styles.btn} onPress={() => handleTap({ value : "5" })} />
            <Button text="6" style={styles.btn} onPress={() => handleTap({ value : "6" })} />
            <Button
              text="-"
              theme="accent"
              style={styles.btn}
              onPress={() => handleTap({ value : "-" })}
            />
            {calculadoraCientifica ? (
              <Button
                text="√"
                theme="accent"
                style={styles.btn}
                onPress={() => handleTap({ value : "/" })}
              />
            ) : null}
          </Row>

          <Row>
            <Button text="1" style={styles.btn} onPress={() => handleTap({ value : "1" })} />
            <Button text="2" style={styles.btn} onPress={() => handleTap({ value : "2" })} />
            <Button text="3" style={styles.btn} onPress={() => handleTap({ value : "3" })} />
            <Button
              text="+"
              theme="accent"
              style={styles.btn}
              onPress={() => handleTap({ value : "+" })}
            />
            {calculadoraCientifica ? (
              <Button
                text="π"
                theme="accent"
                style={{ display: calculadoraCientifica ? 'flex' : 'none' }}
                onPress={() => handleTap({ value : "/" })}
              />
            ) : null}
          </Row>

          <Row>
            <TouchableOpacity style={styles.calculator} onPress={() => handleCalculator(calculadoraCientifica)}>
              {/* <Image source={require("../assets/images/calculator.svg")} style={styles.img}/> */}
            </TouchableOpacity>
            <Button
              text="0"
              size="accent"
              style={styles.btn}
              onPress={() => handleTap({ value : "0" })}
            />
            <Button text="." onPress={() => handleTap({ value : "." })} />
            <Button
              text="="
              theme="accent"
              style={styles.btn}
              onPress={() => handleTap({ value : "=" })}
            />
          </Row>
        </SafeAreaView>
      </View>
    </>
  );
}

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
  },
  btn: {
    width: 20,
    height: 20
  },
  img: {
    width: 50,
    height: 50,
  },
  calculator: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(50 + 30),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(50),
    margin: 5
  },
  btnC: {
    width: 20,
    height: 20
  }
});
