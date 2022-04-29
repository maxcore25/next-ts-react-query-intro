import { useQuery } from 'react-query';
import { CountryService, ICountry } from '../services/country.service';

export const useCountry = (id: string) => {
  const {
    isLoading,
    error,
    data: country,
  } = useQuery(['county list', id], () => CountryService.getById(id), {
    onError: (error: any) => {
      alert(error.message);
    },
    select: ({ data }): ICountry => data,
  });
  return { isLoading, country, error };
};
