import express from 'express';
import { getAllLocals, getLocalById } from '../controllers/localsController';
const router = express.Router();

router.get("/", getAllLocals);
router.get("/:id", getLocalById);



module.exports = router;