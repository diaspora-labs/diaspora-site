import axios from 'axios';

const DEFAULT_TIMEOUT = 2000;

export async function loadExtraContent<T = unknown>(
  url: string,
  nullable?: boolean
): Promise<T>;
export async function loadExtraContent<T = unknown>(
  url: string,
  nullable: true
): Promise<T | null>;

export async function loadExtraContent<T = unknown>(
  url: string,
  nullable?: boolean
) {
  if (nullable && !url) return null;
  try {
    const { data } = await axios.get<T>(url, { timeout: DEFAULT_TIMEOUT });
    return data;
  } catch {
    throw new Error(`unable to fetch json from url ${url}`);
  }
}
