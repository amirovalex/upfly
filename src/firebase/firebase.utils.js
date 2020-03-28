import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBiYugV9ddERGeHgk36ZP-mGYE5Do8YmN0",
    authDomain: "upfly-db.firebaseapp.com",
    databaseURL: "https://upfly-db.firebaseio.com",
    projectId: "upfly-db",
    storageBucket: "upfly-db.appspot.com",
    messagingSenderId: "464595487666",
    appId: "1:464595487666:web:1e0ffe07702015050f32ab",
    measurementId: "G-VSSNNGESS5"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get()
	if (!snapShot.exists) {
		const { displayName , email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user',error.message)
		}
	}

	return userRef;
	
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey)
	const batch = firestore.batch()
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	})

	return await batch.commit()
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;