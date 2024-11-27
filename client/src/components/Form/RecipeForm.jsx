import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  ingredientes: Yup.string().required("Los ingredientes son obligatorios"),
  instrucciones: Yup.string().required("Las instrucciones son obligatorias"),
  tiempoCoccion: Yup.number()
    .required("El tiempo de cocción es obligatorio")
    .min(1, "El tiempo de cocción debe ser al menos 1 minuto"),
});

const FormularioReceta = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      ingredientes: "",
      instrucciones: "",
      tiempoCoccion: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:8080/api/recetas", values);
        navigate("/");
      } catch (error) {
        console.error("¡Hubo un error al agregar la nueva receta!", error);
      }
    },
  });

  return (
    <Container className="mt-5 card p-4 shadow rounded">
      <h1 className="mb-4">Agrega una Nueva Receta</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Nombre de la Receta:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              isInvalid={formik.touched.nombre && formik.errors.nombre}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.nombre}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Ingredientes:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              name="ingredientes"
              value={formik.values.ingredientes}
              onChange={formik.handleChange}
              isInvalid={
                formik.touched.ingredientes && formik.errors.ingredientes
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.ingredientes}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Instrucciones:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              name="instrucciones"
              value={formik.values.instrucciones}
              onChange={formik.handleChange}
              isInvalid={
                formik.touched.instrucciones && formik.errors.instrucciones
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.instrucciones}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Tiempo de Cocción (en minutos):
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="number"
              name="tiempoCoccion"
              value={formik.values.tiempoCoccion}
              onChange={formik.handleChange}
              isInvalid={
                formik.touched.tiempoCoccion && formik.errors.tiempoCoccion
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.tiempoCoccion}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <div className="text-center">
          <Button type="submit" variant="primary">
            Agregar Receta
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormularioReceta;
