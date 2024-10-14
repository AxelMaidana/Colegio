import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    const auth = getAuth(app);
    const db = getFirestore(app);

    // Intenta obtener el token del encabezado de autorización
    let idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
    
    // Si no está en el encabezado, busca en los parámetros de consulta
    if (!idToken) {
        const url = new URL(request.url);
        idToken = url.searchParams.get("token");
    }

    if (!idToken) {
        return new Response("No token found", { status: 401 });
    }

    try {
        const decodedToken = await auth.verifyIdToken(idToken);
        const uid = decodedToken.uid;
        const userDoc = await db.collection("users").doc(uid).get();
        const userData = userDoc.data();

        if (!userData) {
            return new Response(
                JSON.stringify({ error: "La cuenta no existe." }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        const fiveDays = 60 * 60 * 24 * 5 * 1000;
        const sessionCookie = await auth.createSessionCookie(idToken, {
            expiresIn: fiveDays,
        });

        cookies.set("__session", sessionCookie, { path: "/" });

        let redirectUrl = "/";
        if (userData.role === "admin") {
            redirectUrl = "/roles/dashboardAdmin";
        } else if (userData.role === "user") {
            redirectUrl = "/roles/dashboardUser";
        } else {
            redirectUrl = "/roles/dashboardGuest";
        }

        return new Response(JSON.stringify({ success: true, redirectUrl }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error("Error al procesar el inicio de sesión:", error);
        return new Response(
            JSON.stringify({ error: "Error al procesar el inicio de sesión" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};