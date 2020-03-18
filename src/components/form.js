import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Document from "./Document";
import { PDFDownloadLink } from "@react-pdf/renderer";

class FormUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePattern = this.handleChangePattern.bind(this);
    this.formRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const obj = {
      genre: form.genre.value,
      pattern: form.pattern.value,
      name: form.name.value,
      birthday: form.birthday.value,
      address: form.address.value,
      city: form.city.value
    };

    localStorage.setItem("user", JSON.stringify(obj));

    this.props.handleform(obj);
  }

  handleChange(e) {
    let form = this.props.form;
    form.genre = e.target.value;
    this.setState({ form });
  }

  handleChangePattern(e) {
    let form = this.props.form;
    form.pattern = e.target.value;
    this.setState({ form });
  }

  render() {
    return (
      <Container className="paper">
        <Row>
          <Col xs={12} className="section text-center">
            <h1>Formulaire</h1>
            <h2>Attestation de déplacement dérogatoire</h2>
          </Col>
          <Col xs={12} className="section">
            <Form
              ref={this.formRef}
              className="text-right"
              onSubmit={this.handleSubmit}
            >
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check
                    className="text-left"
                    type="radio"
                    name="genre"
                    value="Mme"
                    label="Mme"
                    checked={this.props.form.genre === "Mme"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    className="text-left"
                    type="radio"
                    name="genre"
                    value="M."
                    label="M."
                    checked={this.props.form.genre === "M."}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2" className="d-none d-sm-block">
                  Nom, Prénom
                </Form.Label>
                <Form.Label
                  column
                  sm="2"
                  className="d-block d-sm-none text-left"
                >
                  Nom, Prénom
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    defaultValue={this.props.form.name}
                    placeholder="Nom, prénom"
                    name="name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2" className="d-none d-sm-block">
                  Né(e) le :
                </Form.Label>
                <Form.Label
                  column
                  sm="2"
                  className="d-block d-sm-none text-left"
                >
                  Né(e) le :
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="date"
                    name="birthday"
                    defaultValue={this.props.form.birthday}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2" className="d-none d-sm-block">
                  Demeurant :
                </Form.Label>
                <Form.Label
                  column
                  sm="2"
                  className="d-block d-sm-none text-left"
                >
                  Demeurant :
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Adresse complète"
                    name="address"
                    defaultValue={this.props.form.address}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2" className="d-none d-sm-block">
                  Fait à :
                </Form.Label>
                <Form.Label
                  column
                  sm="2"
                  className="d-block d-sm-none text-left"
                >
                  Fait à :
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Ville"
                    name="city"
                    defaultValue={this.props.form.city}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2" className="d-none d-sm-block">
                  Motif :
                </Form.Label>
                <Form.Label
                  column
                  sm="2"
                  className="d-block d-sm-none text-left"
                >
                  Motif :
                </Form.Label>
                <Col sm="10">
                  <Form.Check
                    className="text-left"
                    type="radio"
                    name="pattern"
                    value="professionnelle"
                    checked={this.props.form.pattern === "professionnelle"}
                    onChange={this.handleChangePattern}
                    label=" Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle, lorsqu’ils sont indispensables à l’exercice d’activités ne pouvant être organisées sous forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant être différés;"
                  />

                  <Form.Check
                    className="text-left"
                    type="radio"
                    name="pattern"
                    value="achats"
                    checked={this.props.form.pattern === "achats"}
                    onChange={this.handleChangePattern}
                    label=" Déplacements pour effectuer des achats de première nécessité dans des établissements autorisés (liste sur gouvernement.fr);"
                  />

                  <Form.Check
                    className="text-left"
                    type="radio"
                    name="pattern"
                    value="santé"
                    checked={this.props.form.pattern === "santé"}
                    onChange={this.handleChangePattern}
                    label=" Déplacements pour motif de santé;"
                  />

                  <Form.Check
                    className="text-left"
                    type="radio"
                    name="pattern"
                    value="familial"
                    checked={this.props.form.pattern === "familial"}
                    onChange={this.handleChangePattern}
                    label=" Déplacements pour motif familial impérieux, pour l’assistance aux personnes vulnérables ou la garde d’enfants;"
                  />

                  <Form.Check
                    className="text-left"
                    type="radio"
                    name="pattern"
                    value="brefs"
                    checked={this.props.form.pattern === "brefs"}
                    onChange={this.handleChangePattern}
                    label=" Déplacements brefs, à proximité du domicile, liés à l’activité physique individuelle des personnes, à l’exclusion de toute pratique sportive collective, et aux besoins des animaux de compagnie."
                  />
                </Col>
              </Form.Group>
              <Col
                sm={{ span: 10, offset: 2 }}
                className="text-left p0 d-none d-sm-block"
              >
                <Button variant="primary" type="submit">
                  Aperçu
                </Button>
              </Col>
            </Form>

            {this.props.form.pattern && (
              <Col sm={{ span: 10, offset: 2 }} className="p0 mt20">
                <PDFDownloadLink
                  document={<Document form={this.props.form} />}
                  fileName="Attestation_de_déplacement_dérogatoire.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? (
                      "Loading document..."
                    ) : (
                      <Button
                        variant="info"
                        type="submit"
                        onClick={() =>
                          this.formRef.current.dispatchEvent(
                            new Event("submit")
                          )
                        }
                      >
                        Télécharger
                      </Button>
                    )
                  }
                </PDFDownloadLink>
              </Col>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormUser;
