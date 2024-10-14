import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "../../../firebase/server";

// Definir los tipos básicos para los parámetros
export async function checkUserRole(Astro: any, allowedRoles: string[]) {
    console.log("Starting checkUserRole");

    const auth = getAuth(app);
    const db = getFirestore(app);
    
    // Verificación de la existencia de la cookie de sesión:
    const sessionCookie = Astro.cookies.get("__session")?.value;
    if (!sessionCookie) {
        console.log("No session cookie found.");
        return null; // Retorna null en lugar de redirigir
    }

    try {
        console.log("Verifying session cookie");
        const decodedClaims = await auth.verifySessionCookie(sessionCookie);
        console.log("Decoded claims:", decodedClaims); // Log de claims decodificados

        const userDoc = await db.collection("users").doc(decodedClaims.uid).get();
        const userData = userDoc.data();
        console.log("User data retrieved:", userData); // Log de datos del usuario

        // Verificación de los datos del usuario y redirección si no se cumplen los requisitos:
        if (!userData || !allowedRoles.includes(userData.role)) {
            console.log("User role not allowed or user data missing, redirecting to signin");
            return null; // Retorna null si no cumple los requisitos
        }

        return userData;

    } catch (error) {
        console.error("Error verifying session cookie or fetching user data:", error);
        return null; // Retorna null en caso de error
    }
}
