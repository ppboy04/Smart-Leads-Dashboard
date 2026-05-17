import express from 'express';
import {
  createLead,
  getLeads,
  getLead,
  updateLead,
  deleteLead,
  exportLeads,
} from '../controllers/leadController';
import { protect, authorize } from '../middleware/authMiddleware';

const router = express.Router();

router.use(protect); // All lead routes are protected

router.post('/', createLead);
router.get('/', getLeads);
router.get('/export', exportLeads);
router.get('/:id', getLead);
router.put('/:id', updateLead);
router.delete('/:id', authorize('admin'), deleteLead); // Only admin can delete

export default router;
