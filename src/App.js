import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'


function App() {
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState(0);
  const [curd, setCURD] = useState([]);
  const curdCollectionRef = collection(db, "curd")//IMPORT FROM FIREBASE CONFIG FILE

  // ADD INFORMATION
  const add = async () => {
    await addDoc(curdCollectionRef, { name: language, code: Number(code) });
  }


  // UPDATE INFORMATION
  const update = async (id, code) => {
    const curdDoc = doc(db, "curd", id)
    const newFields = { code: code + 1 }
    await updateDoc(curdDoc, newFields)
  }
  const dec = async (id, code) => {
    const curdDoc = doc(db, "curd", id)
    const newField = { code: code - 1 }
    await updateDoc(curdDoc, newField)
  }


  // DELETE INFORMATION
  const deleteInfo = async (id) => {
    const curdDoc = doc(db, "curd", id);
    await deleteDoc(curdDoc);
  }
  useEffect(() => {
    const getCURD = async () => {
      const data = await getDocs(curdCollectionRef)
      setCURD(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCURD()
  }, [])

  return (
    <div >
      <div className='add'>
        <input placeholder='Subject' onChange={(e) => { setLanguage(e.target.value) }}></input>
        <input placeholder='Subject Code' onChange={(e) => { setCode(e.target.value) }}></input>
        <button className='btn btn-outline-success' onClick={add}>Add language</button>
      </div>
      {curd.map((curd) => {
        return <div className="container">
          <h4>  {curd.name}</h4>
          <h5>  {curd.code}</h5>
          <button   className='btn btn-outline-warning up' onClick={() => { update(curd.id, curd.code) }}> ↑ </button>
          <button  className='btn btn-outline-warning down '  onClick={() => { dec(curd.id, curd.code) }}>↓</button>
          <button className='btn btn-outline-danger' onClick={() => { deleteInfo(curd.id) }}>
            Delete
          </button>

        </div>
      })}
    </div>
  );
}

export default App;
