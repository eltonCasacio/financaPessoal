import {useState, useEffect} from 'react';
import {getEntries, saveEntries, deleteEntries} from '../services/Entries';

const useEntries = (days = 7, category) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntries(days, category);
      setEntries(data);
    };
    loadEntries();
  }, [days, category]);

  return [entries, saveEntries, deleteEntries];
};

export default useEntries;
