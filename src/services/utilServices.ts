import axios, { AxiosResponse } from 'axios';

interface CallApiParams {
  endpoint: string;
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
  params?: any;
}

export const callApi = async ({ endpoint, method = 'get', params }: CallApiParams): Promise<AxiosResponse> => {
  let api = `http://localhost:3001/${endpoint}`;
  if (/https|http?/.test(endpoint)) api = endpoint;

  try {
    const response = await axios({
      method,
      url: api,
      data: params,
    });

    return { ...response };
  } catch (error) {
    throw error;
  }
};
