import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Colors } from "../../../theme/Colors";
import ApartmentCard from "../components/ApartmentCard";
import Apartment from "../../../types/Apartment";
import { API } from "../../../api/Endpoints";

const Apartments = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const getApartments = async () => {
    try {
      const response = await axios.get(`${API.BASE_URL}/${API.APARTMENTS}`);
      setApartments(response.data.apartments);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerButtonText}>{subtitle}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        )}
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error.message}</Text>
          </View>
        )}
        {!loading && apartments.length === 0 ? (
          <View style={styles.noApartmentsContainer}>
            <Text style={styles.noApartmentsText}>
              No apartments available.
            </Text>
          </View>
        ) : (
          <View style={styles.apartmentContainer}>
            {apartments.map((item: Apartment, index: number) => (
              <ApartmentCard key={index} item={item} />
            ))}
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerButtonText: {
    fontSize: 14,
    color: Colors.link,
  },
  apartmentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: Colors.error,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noApartmentsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noApartmentsText: {
    fontSize: 18,
    color: Colors.primary,
  },
});

export default Apartments;
