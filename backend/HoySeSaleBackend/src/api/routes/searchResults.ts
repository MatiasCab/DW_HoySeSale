import express from 'express';
import { getAllSearchResults } from '../controllers/searchController';

const router = express.Router();

router.get("/", getAllSearchResults);



module.exports = router;