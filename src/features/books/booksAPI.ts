import axios from 'axios';

export async function fetchBooks<T>(
  url: string,
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH'
): Promise<T> {
  const providedMethod = method ? method : 'GET';
  const response = (await axios(url, {
    method: providedMethod,
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus: () => true,
  })) as any;

  return (await response.data) as T;
}
