import mongoose, { Schema, Document } from 'mongoose';
import { ILead } from '../types/lead';

export interface ILeadDocument extends ILead, Document {
  _id: any;
}

const LeadSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Qualified', 'Lost'],
      default: 'New',
    },
    source: {
      type: String,
      enum: ['Website', 'Instagram', 'Referral'],
      required: true,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

// Index for search
LeadSchema.index({ name: 'text', email: 'text' });

export default mongoose.model<ILeadDocument>('Lead', LeadSchema);
