

import axios from 'axios';

export const fetchIpAddress = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP:', error);
    return 'Unavailable';
  }
};

export const fetchCountry = async (ip: string): Promise<string> => {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    return data.country || 'Unknown'; 
  } catch (error) {
    console.error('Error fetching country:', error);
    return 'Unavailable';
  }
};