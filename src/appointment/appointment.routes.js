import { Router } from "express";
import { saveAppointment, listAppointmentsByUser, updateAppointment, deleteAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, cancelAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/listAppointments/:userId", listAppointmentsByUser);
router.put("/updateAppointment/:id", updateAppointment, updateAppointment);
router.delete("/cancelAppointment/:appointmentId", cancelAppointmentValidator, deleteAppointment);
export default router;