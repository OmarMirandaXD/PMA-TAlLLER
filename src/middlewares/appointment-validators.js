import { body } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { param } from "express-validator";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const updateAppointmentValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("status").isIn(["pending", "confirmed", "cancelled"]).withMessage("Estado no válido"),
    validarCampos,
    handleErrors
];

export const cancelAppointmentValidator = [
    param("appointmentId").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];