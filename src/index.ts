import { sendRequest } from './apiRequest';
import { ApiRequestConfig } from './types';

// Exemplo de configuração para obter informações em JSON
const jsonConfig: ApiRequestConfig = {
  url: 'https://httpbin.org/get',
  method: 'GET',
  requestFormat: 'json',
  responseFormat: 'json'
};

// Exemplo de configuração para obter informações em XML
const xmlConfig: ApiRequestConfig = {
  url: 'https://httpbin.org/xml',
  method: 'GET',
  requestFormat: 'json', // A requisição será feita em JSON, mas a resposta será em XML
  responseFormat: 'xml'
};

// Exemplo de configuração para enviar requisição em XML e obter resposta em JSON
const xmlToJsonConfig: ApiRequestConfig = {
  url: 'https://httpbin.org/post',
  method: 'POST',
  data: {
    root: {
      element: 'value'
    }
  },
  requestFormat: 'xml',
  responseFormat: 'json'
};

// Exemplo de configuração para enviar requisição em XML e obter resposta em XML
const xmlToXmlConfig: ApiRequestConfig = {
  url: 'https://httpbin.org/post',
  method: 'POST',
  data: {
    root: {
      element: 'value'
    }
  },
  requestFormat: 'xml',
  responseFormat: 'xml'
};

async function fetchJsonData() {
  try {
    const jsonResponse = await sendRequest(jsonConfig);
    console.log('JSON Response:', jsonResponse);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error (JSON):', error.message);
    } else {
      console.error('An unknown error occurred (JSON)');
    }
  }
}

async function fetchXmlData() {
  try {
    const xmlResponse = await sendRequest(xmlConfig);
    console.log('XML Response:', xmlResponse);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error (XML):', error.message);
    } else {
      console.error('An unknown error occurred (XML)');
    }
  }
}

async function fetchXmlToJsonData() {
  try {
    const xmlToJsonResponse = await sendRequest(xmlToJsonConfig);
    console.log('XML to JSON Response:', xmlToJsonResponse);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error (XML to JSON):', error.message);
    } else {
      console.error('An unknown error occurred (XML to JSON)');
    }
  }
}

async function fetchXmlToXmlData() {
  try {
    const xmlToXmlResponse = await sendRequest(xmlToXmlConfig);
    console.log('XML to XML Response:', xmlToXmlResponse);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error (XML to XML):', error.message);
    } else {
      console.error('An unknown error occurred (XML to XML)');
    }
  }
}

async function testRequests() {
  await Promise.all([fetchJsonData(), fetchXmlData(), fetchXmlToJsonData(), fetchXmlToXmlData()]);
}

testRequests();
