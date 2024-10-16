import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { a as app } from '../../chunks/server_NbOeSSfT.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const db = getFirestore(app);
  const storage = getStorage(app);
  try {
    const formData = await request.formData();
    const userId = formData.get("userId")?.toString();
    const imageFile = formData.get("image");
    if (!userId || !imageFile || !(imageFile instanceof File)) {
      return new Response(
        JSON.stringify({ error: "User ID and image are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const uploadImageToFirebase = async (file) => {
      return new Promise(async (resolve, reject) => {
        const bucket = storage.bucket();
        const fileName = `profile-images/${userId}-${Date.now()}-${file.name}`;
        const fileRef = bucket.file(fileName);
        const buffer = Buffer.from(await file.arrayBuffer());
        await fileRef.save(buffer, {
          metadata: {
            contentType: file.type
          }
        });
        const [url] = await fileRef.getSignedUrl({
          action: "read",
          expires: "03-01-2500"
          // Fecha de expiración lejana
        });
        resolve(url);
      });
    };
    const imageUrl = await uploadImageToFirebase(imageFile);
    await db.collection("users").doc(userId).update({
      profileImageUrl: imageUrl
    });
    return new Response(
      JSON.stringify({ success: true, imageUrl }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Something went wrong" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
