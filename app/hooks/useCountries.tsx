import { useQuery } from 'react-query';
import { CountryService, ICountry } from '../services/country.service';

export const useCountries = () => {
  const {
    isLoading,
    error,
    data: countries,
    refetch,
  } = useQuery('country list', () => CountryService.getAll(), {
    onError: (error: any) => {
      alert(error.message);
    },
    select: ({ data }): ICountry[] =>
      data.map(country => ({
        ...country,
        name: country.name + '!',
      })),
    enabled: false,
  });
  return { isLoading, countries, error, refetch };
};
