import { useEffect, useState } from 'react';
import { SnackbarUtilities } from '../helpers/snackbar-manager';
import { Product } from '../interfaces/product.interface';

interface DataListProps<T> {
  adapter?: (data: any) => T[];
  items?: Product[];
  service: () => Promise<any>;
}

export const useDataList = <T>({ adapter, items, service }: DataListProps<T>) => {
  const [list, setList] = useState<Product[]>(items || []);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const abortController = new AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (signal.aborted) return null;
        setIsDataLoading(true);
        const results = await service();
        let data = results.data;
        if (adapter) data = adapter(results.data);
        setList(data);
      } catch (e) {
        setError(e as Error);
        SnackbarUtilities.error('Ha ocurrido un error, intente de nuevo más tarde.');
        console.error(e);
      } finally {
        setIsDataLoading(false);
        abortController.abort();
      }
    };

    fetchData();

    return () => setList([]);
    //eslint-disable-next-line
  }, []);

  return { isDataLoading, list, error };
};
