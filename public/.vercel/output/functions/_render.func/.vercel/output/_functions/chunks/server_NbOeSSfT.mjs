import { getApps, initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

const activeApps = getApps();
const initApp = () => {
  {
    console.info("PROD env detected. Using default service account.");
    return initializeApp();
  }
};
const app = activeApps.length === 0 ? initApp() : activeApps[0];
getStorage(app);

export { app as a };
