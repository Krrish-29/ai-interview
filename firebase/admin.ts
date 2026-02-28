import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps(); 

  if (!apps.length) {
    if (!process.env.FIREBASE_PROJECT_ID) {
      console.error("Missing FIREBASE_PROJECT_ID environment variable");
    }
    if (!process.env.FIREBASE_CLIENT_EMAIL) {
      console.error("Missing FIREBASE_CLIENT_EMAIL environment variable");
    }
    if (!process.env.FIREBASE_PRIVATE_KEY) {
      console.error("Missing FIREBASE_PRIVATE_KEY environment variable");
    }

    try {
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
      });
    } catch (error: any) {
      console.error("Firebase Admin initialization error:", error.stack);
      // If initialization fails, we cannot proceed. Re-throw or handle gracefully.
      // For now, we want the user to see the configuration error.
      throw error;
    }
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
