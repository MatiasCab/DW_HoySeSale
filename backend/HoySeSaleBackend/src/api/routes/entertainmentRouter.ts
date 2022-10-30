import express from 'express';
import { getEntertainment } from '../controllers/entertainmentController';
import { getAllLocals } from '../controllers/localsController';

const router = express.Router();

router.get("/", getAllLocals);
router.get("/:id", getEntertainment);



module.exports = router;