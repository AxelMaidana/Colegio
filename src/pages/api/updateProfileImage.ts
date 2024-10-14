import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { app } from "../../firebase/server";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const db = getFirestore(app);
    const storage = getStorage(app);

    try {
        const formData = await request.formData();
        const userId = formData.get("userId")?.toString();
        const imageFile = formData.get("image");

        // Verificamos que imageFile sea una instancia de File
        if (!userId || !imageFile || !(imageFile instanceof File)) {
            return new Response(
                JSON.stringify({ error: "User ID and image are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Función para subir la imagen a Firebase
        const uploadImageToFirebase = async (file: File) => {
            return new Promise(async (resolve, reject) => {
                const bucket = storage.bucket();
                const fileName = `profile-images/${userId}-${Date.now()}-${file.name}`; // Usamos file.name
                const fileRef = bucket.file(fileName);

                const buffer = Buffer.from(await file.arrayBuffer());

                // Sube el archivo
                await fileRef.save(buffer, {
                    metadata: {
                        contentType: file.type,
                    },
                });

                // Obtiene la URL pública de la imagen
                const [url] = await fileRef.getSignedUrl({
                    action: 'read',
                    expires: '03-01-2500', // Fecha de expiración lejana
                });

                resolve(url);
            });
        };

        const imageUrl = await uploadImageToFirebase(imageFile);

        // Actualiza el perfil del usuario en Firestore
        await db.collection("users").doc(userId).update({
            profileImageUrl: imageUrl,
        });

        return new Response(
            JSON.stringify({ success: true, imageUrl: imageUrl }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: error.message || "Something went wrong" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};
