import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  View,
  StyleSheet
} from "@react-pdf/renderer";
import checkbox from "../assets/checkbox.png";
import checked from "../assets/checked.png";
import signature from "../assets/signature.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 65,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  subtitle: {
    marginTop: "15px",
    fontSize: 12,
    textAlign: "center",
    padding: "10px 20px"
  },
  soussign: {
    marginTop: "40px",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: 14
  },
  bold: {
    fontWeight: "bold",
    fontSize: 14,
    margin: "5px 0"
  },
  paragraph: {
    marginTop: "40px",
    marginBottom: "20px",
    textAlign: "justify",
    fontSize: 14
  },
  check: {
    marginTop: "5px",
    fontSize: 14,
    textAlign: "justify",
    paddingRight: "30px",
    flexGrow: 1
  },
  image: {
    width: "25px",
    height: "25px",
    paddingTop: "7px",
    paddingRight: "5px"
  },
  row: {
    flexDirection: "row",
    marginTop: "5px"
  },
  createdAt: {
    marginTop: "40px",
    fontSize: 14,
    textAlign: "right"
  },
  sign: {
    marginTop: "40px",
    width: 100,
    height: "auto",
    marginVertical: 15,
    marginHorizontal: 300
  }
});

const Checkbox = ({ value, pattern }) => {
  if (value === pattern) return <Image style={styles.image} src={checked} />;
  else return <Image style={styles.image} src={checkbox} />;
};

const MyDocument = ({ form }) => {
  console.log({ form });
  const birdthday = new Date(form.birthday);
  const today = new Date();

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.title}>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</Text>
        <Text style={styles.subtitle}>
          En application de l’article 1er du décret du 16 mars 2020 portant
          réglementation des déplacements dans le cadre de la lutte contre la
          propagation du virus Covid-19 :
        </Text>
        <Text style={styles.soussign}>Je soussigné(e)</Text>
        <Text style={styles.bold}>
          {form.genre} {form.name}
        </Text>
        <Text style={styles.bold}>
          Né(e) le : {birdthday.getDate()} / {birdthday.getMonth() + 1} /{" "}
          {birdthday.getFullYear()}
        </Text>
        <Text style={styles.bold}>Demeurant : {form.address}</Text>
        <Text style={styles.paragraph}>
          Certifie que mon déplacement est lié au motif suivant (cocher la case)
          autorisé par l’article 1er du décret du 16 mars 2020 portant
          réglementation des déplacements dans le cadre de la lutte contre la
          propagation du virus Covid-19 :
        </Text>
        <View style={styles.row}>
          <Checkbox value="professionnelle" pattern={form.pattern} />
          <Text style={styles.check}>
            déplacements entre le domicile et le lieu d’exercice de l’activité
            professionnelle, lorsqu’ils sont indispensables à l’exercice
            d’activités ne pouvant être organisées sous forme de télétravail
            (sur justificatif permanent) ou déplacements professionnels ne
            pouvant être différés;
          </Text>
        </View>
        <View style={styles.row}>
          <Checkbox value="achats" pattern={form.pattern} />
          <Text style={styles.check}>
            déplacements pour effectuer des achats de première nécessité dans
            des établissements autorisés (liste sur gouvernement.fr);
          </Text>
        </View>
        <View style={styles.row}>
          <Checkbox value="santé" pattern={form.pattern} />
          <Text style={styles.check}>déplacements pour motif de santé;</Text>
        </View>
        <View style={styles.row}>
          <Checkbox value="familial" pattern={form.pattern} />
          <Text style={styles.check}>
            déplacements pour motif familial impérieux, pour l’assistance aux
            personnes vulnérables ou la garde d’enfants;
          </Text>
        </View>
        <View style={styles.row}>
          <Checkbox value="brefs" pattern={form.pattern} />
          <Text style={styles.check}>
            déplacements brefs, à proximité du domicile, liés à l’activité
            physique individuelle des personnes, à l’exclusion de toute pratique
            sportive collective, et aux besoins des animaux de compagnie.
          </Text>
        </View>
        <Text style={styles.createdAt}>
          Fait à {form.city}, le {today.getDate()} / {today.getMonth() + 1} /
          2020
        </Text>
        <Image style={styles.sign} src={signature} />
      </Page>
    </Document>
  );
};

export default MyDocument;
