export type RequestFormat = 'json' | 'xml';
export type ResponseFormat = 'json' | 'xml';

export interface ApiRequestConfig {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  data?: any;
  requestFormat: RequestFormat;
  responseFormat: ResponseFormat;
}
