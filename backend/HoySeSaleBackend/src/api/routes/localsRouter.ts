import express from 'express';
import { getAllLocals } from '../controllers/localsController';
const router = express.Router();

router.get("/", getAllLocals);



module.exports = router;