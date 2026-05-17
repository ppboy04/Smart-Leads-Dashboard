import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const isValidMongoUri = (uri?: string): boolean => {
  if (!uri) return false;
  return uri.startsWith('mongodb://') || uri.startsWith('mongodb+srv://');
};

const startServer = async () => {
  try {
    if (!MONGODB_URI || !isValidMongoUri(MONGODB_URI)) {
      console.error('===========================================');
      console.error('ERROR: Invalid or missing MONGODB_URI');
      console.error(`Current value: "${MONGODB_URI || '(not set)'}"`);
      console.error('');
      console.error('Please set MONGODB_URI to a valid MongoDB connection string:');
      console.error('  mongodb+srv://user:pass@cluster.mongodb.net/smart-leads');
      console.error('');
      console.error('Get a free database at: https://cloud.mongodb.com');
      console.error('===========================================');
      
      // Start server anyway so health check works
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} (NO DATABASE - set MONGODB_URI)`);
      });
      return;
    }

    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

startServer();
