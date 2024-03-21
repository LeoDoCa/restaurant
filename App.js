import {} from 'react';
import Navigation from './src/config/navigation/Navigation';
import { app, auth, db } from './src/config/utils/firebaseConnection';
import Notification from './src/modules/notifications/Notification';

export default function App() {
  return (
   <Navigation />
  );
}
