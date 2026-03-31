import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { health } from './controllers/healthController';
import authRoutes from './routes/authRoutes';
import courseRoutes from './routes/courseRoutes';
import liveRoutes from './routes/liveRoutes';
import quizRoutes from './routes/quizRoutes';
import certificateRoutes from './routes/certificateRoutes';
import chatRoutes from './routes/chatRoutes';
import aiRoutes from './routes/aiRoutes';
import notificationRoutes from './routes/notificationRoutes';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '2mb' }));

app.get('/health', health);
app.use('/v1/auth', authRoutes);
app.use('/v1/courses', courseRoutes);
app.use('/v1/live', liveRoutes);
app.use('/v1/quizzes', quizRoutes);
app.use('/v1/certificates', certificateRoutes);
app.use('/v1/chat', chatRoutes);
app.use('/v1/ai', aiRoutes);
app.use('/v1/notifications', notificationRoutes);
