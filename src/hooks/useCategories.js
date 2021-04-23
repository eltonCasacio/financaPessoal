import {useState, useEffect} from 'react';
import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
  getInitCategories,
} from '../services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState();
  const [creditCategories, setCreditCategories] = useState();
  const [allCategories, setAllCategories] = useState();
  const [initCategory, setInitCategories] = useState();

  useEffect(() => {
    const loadDebit = async () => {
      const data = await getDebitCategories();
      setDebitCategories(data);
    };

    const loadCredit = async () => {
      const data = await getCreditCategories();
      setCreditCategories(data);
    };

    const loadAll = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };

    const loadInit = async () => {
      const data = await getInitCategories();
      setInitCategories(data);
    };

    loadDebit();
    loadCredit();
    loadAll();
    loadInit();
  }, []);

  return [debitCategories, creditCategories, allCategories, initCategory];
};

export default useCategories;
