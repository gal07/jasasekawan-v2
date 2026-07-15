import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Use service account for server-side access
const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_SA_KEY_B64 || '', 'base64').toString('utf8') || '{}'
);

let app: ReturnType<typeof initializeApp>;
if (!getApps().length) {
  app = initializeApp({
    credential: cert(serviceAccount),
    projectId: 'rev-streaming-8e34a',
  });
} else {
  app = getApps()[0] as ReturnType<typeof initializeApp>;
}

const adminDb = getFirestore(app);

export { adminDb };
