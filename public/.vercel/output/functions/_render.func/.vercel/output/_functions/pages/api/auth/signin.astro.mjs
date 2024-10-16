import { a as app } from '../../../chunks/server_NbOeSSfT.mjs';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response("No token found", { status: 401 });
  }
  let decodedToken;
  try {
    decodedToken = await auth.verifyIdToken(idToken);
  } catch (error) {
    return new Response("Invalid token", { status: 401 });
  }
  const uid = decodedToken.uid;
  const userDoc = await db.collection("users").doc(uid).get();
  const userData = userDoc.data();
  if (!userData) {
    return new Response(
      JSON.stringify({ error: "La cuenta no existe." }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }
  const fiveDays = 60 * 60 * 24 * 5 * 1e3;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays
    // Establecer la expiración de la cookie
  });
  cookies.set("__session", sessionCookie, { path: "/" });
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
