import React from 'react';
import styles from './styles.module.css';
import {Meme} from '../Meme/Meme';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';

export const App = ()=> {
  return (
<div className={styles.container}>
  <h2>Meme Generator</h2>
<Routes>
  <Route exact path="/" element={<Meme />}></Route>
  <Route path="/generated" element={<MemeGenerated />}></Route>
</Routes>
</div>
  );
}
 
