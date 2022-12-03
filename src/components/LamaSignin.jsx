import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../firebase.config'
import { auth } from '../firebase.config';
import { signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from "firebase/auth";

const LamaSignin = () => {

    const [username, setUsername] = useState("");

    const signin = (event) => {
        const imageAsFile = event.target[1].files[0];
        event.preventDefault()

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log('auth', auth)
                console.log('result', result);

                const storageRef = ref(storage, `/${imageAsFile.name}`)
                // const uploadTask = uploadBytesResumable(storageRef, imageAsFile);

                const uploadTask = uploadBytesResumable(storageRef, imageAsFile);

                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion
                uploadTask.on('state_changed',
                    (snapshot) => {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        // Handle unsuccessful uploads
                    },
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('File available at', downloadURL);
                            console.log('username:', username);
                            updateProfile(result.user, {
                                displayName: username,
                                photoURL: downloadURL,
                            })
                        });
                    }
                );

            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    return (
        <>
            <form onSubmit={(event) => { signin(event); }}>
                <input
                    onChange={(event) => { setUsername(event.target.value); }}
                    className="username_input"
                    placeholder="type your name"
                    type="text" />
                <br />
                <input
                    className="profile_pic"
                    type="file" />
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default LamaSignin;