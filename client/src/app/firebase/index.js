import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

import * as env  from '../environments/environment';

firebase.initializeApp( env.firebaseConfig );

export const auth      = firebase.auth( );
export const store     = firebase.firestore( );
export const storage   = firebase.storage( );
export const functions = firebase.functions( );
export const FirebaseTimestamp = firebase.firestore.Timestamp;