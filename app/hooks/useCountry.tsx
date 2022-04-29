import { useQuery } from 'react-query';
import { CountryService, ICountry } from '../services/country.service';

export const useCountry = (id: string) => {
  const {
    isLoading,
    error,
    data: countries,
  } = useQuery('county list', () => CountryService.getAll(), {
    onError: (error: any) => {
      alert(error.message);
    },
    select: ({ data }): ICountry[] =>
      data.map(country => ({
        ...country,
        name: country.name + '!',
      })),
  });
  return { isLoading, countries, error };
};
