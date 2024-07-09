import axios, { AxiosRequestConfig } from 'axios';
import { parseStringPromise, Builder } from 'xml2js';
import { ApiRequestConfig } from './types';

export async function sendRequest(config: ApiRequestConfig): Promise<any> {
  let requestData = config.data;

  if (config.requestFormat === 'xml' && config.data) {
    const builder = new Builder();
    requestData = builder.buildObject(config.data);
  }

  const axiosConfig: AxiosRequestConfig = {
    url: config.url,
    method: config.method,
    headers: {
      ...config.headers,
      'Content-Type': config.requestFormat === 'json' ? 'application/json' : 'application/xml',
      'Accept': config.responseFormat === 'json' ? 'application/json' : 'application/xml'
    },
    data: requestData
  };

  try {
    const response = await axios(axiosConfig);
    let responseData = response.data;

    if (config.responseFormat === 'xml' && typeof response.data === 'string') {
      responseData = await parseStringPromise(response.data);
    }

    return responseData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error making request: ${error.message}`);
    } else {
      throw new Error(`An unknown error occurred`);
    }
  }
}
