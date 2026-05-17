import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from './app';

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const startServer = async () => {
  try {
    let connectionUri = MONGODB_URI;

    // Use memory server if no URI provided or if we want local isolated dev
    if (!connectionUri || connectionUri.includes('localhost')) {
      console.log('Starting local In-Memory MongoDB...');
      const mongoServer = await MongoMemoryServer.create();
      connectionUri = mongoServer.getUri();
    }

    await mongoose.connect(connectionUri);
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
