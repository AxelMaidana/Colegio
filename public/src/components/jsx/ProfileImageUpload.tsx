import React, { useState, useRef } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

interface ProfileImageUploadProps {
  initialImageUrl: string;
}

export default function ProfileImageUpload({ initialImageUrl }: ProfileImageUploadProps) {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const storage = getStorage();
      const auth = getAuth();
      const db = getFirestore();

      if (!auth.currentUser) {
        throw new Error('No user is currently logged in');
      }

      const storageRef = ref(storage, `profile_images/${auth.currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        profileImage: downloadURL
      });

      setImageUrl(downloadURL);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt="Foto de perfil"
        className="w-72 h-72 rounded-full cursor-pointer"
        onClick={handleImageClick}
      />
      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}