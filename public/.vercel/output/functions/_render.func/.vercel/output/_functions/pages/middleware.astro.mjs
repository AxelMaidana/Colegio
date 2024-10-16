import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { a as app } from '../chunks/server_NbOeSSfT.mjs';
export { renderers } from '../renderers.mjs';

const auth = getAuth(app);
const db = getFirestore(app);
const checkAuth = async (cookies) => {
  const sessionCookie = cookies.get("__session")?.value;
  if (!sessionCookie) return null;
  try {
    const decodedCookie = await auth.verifySessionCookie(sessionCookie);
    return decodedCookie;
  } catch (error) {
    return null;
  }
};
const checkRole = async (cookies, requiredRole) => {
  const user = await checkAuth(cookies);
  if (!user) return null;
  const uid = user.uid;
  const userDoc = await db.collection("users").doc(uid).get();
  const userData = userDoc.data();
  return userData?.role === requiredRole;
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    checkAuth,
    checkRole
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
