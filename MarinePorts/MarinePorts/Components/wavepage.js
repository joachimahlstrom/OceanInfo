import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";

const WavePage = () => {
  const [waveHeightData, setWaveHeightData] = useState([]);
  const [latitude, setLatitude] = useState("54.3213");
  const [longitude, setLongitude] = useState("10.1348");
  const [locationName, setLocationName] = useState("");

  const fetchDataForCoordinates = async (lat, long) => {
    try {
      const response = await fetch(
        `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${long}&hourly=wave_height`
      );
      const data = await response.json();
      const waveHeights = data.hourly.wave_height;
      setWaveHeightData(waveHeights);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLatitudeInput = (text) => {
    setLatitude(text);
  };

  const handleLongitudeInput = (text) => {
    setLongitude(text);
  };

  const handleFetchData = () => {
    fetchDataForCoordinates(latitude, longitude);
  };

  const fetchLocationName = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setLocationName(data.results[0].formatted_address);
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  useEffect(() => {
    fetchLocationName();
  }, [latitude, longitude]);

  const renderListItem = (item) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item}m</Text>
      </View>
    );
  };

  const renderDayData = ({ item, index }) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    const formattedDate = date.toDateString();
    if (index < 7) {
      return (
        <View style={styles.dayDataContainer} key={index}>
          <Text style={styles.dayText}>{formattedDate}</Text>
          {renderListItem(item)}
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{locationName}</Text>
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        value={latitude}
        onChangeText={handleLatitudeInput}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={longitude}
        onChangeText={handleLongitudeInput}
        keyboardType="default"
      />
      <View style={styles.buttonContainer}>
        <Button onPress={handleFetchData} title="Fetch Data" color="white" />
      </View>
      <ScrollView style={styles.listContainer}>
        {waveHeightData.map((dayData, index) => renderDayData({ item: dayData, index }))}
      </ScrollView>
      <Text style={styles.locationText}>{locationName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    marginTop: 20,
    width: "80%",
  },
  dayDataContainer: {
    marginBottom: 20,
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 16,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "blue",
  },
});

export default WavePage;
