import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('photo-profile-1');
    const userResponse = await createUser('Guillaume', 'Salva');
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    console.error('Error in asyncUploadUser:', error);
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
