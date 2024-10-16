import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { a as app } from './server_NbOeSSfT.mjs';

async function checkUserRole(Astro, allowedRoles) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const sessionCookie = Astro.cookies.get("__session")?.value;
  if (!sessionCookie) {
    console.log("No session cookie found, redirecting to signin");
    return Astro.redirect("/signin");
  }
  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie);
    const userDoc = await db.collection("users").doc(decodedClaims.uid).get();
    const userData = userDoc.data();
    if (!userData || !allowedRoles.includes(userData.role)) {
      return Astro.redirect("/signin");
    }
    return userData;
  } catch (error) {
    console.error("Error verifying session cookie or fetching user data:", error);
    return Astro.redirect("/signin");
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    checkUserRole
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, checkUserRole as c };
