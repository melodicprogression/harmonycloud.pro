import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

function initializeFirebaseAdmin() {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  if (process.env.NODE_ENV !== "production") {
    const serviceAccountPath = join(process.cwd(), "service-account.json");
    if (existsSync(serviceAccountPath)) {
      const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));
      return initializeApp({ credential: cert(serviceAccount) });
    }
  }

  return initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID });
}

const app = initializeFirebaseAdmin();
export const db = getFirestore(app, "marketing");

