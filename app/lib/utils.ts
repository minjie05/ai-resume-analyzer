// import * as crypto from 'node:crypto';
import { v4 as uuidv4 } from 'uuid';

export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB'];
  const i: number = Math.floor(Math.log(bytes) / Math.log(1024));

  const size: number = bytes / Math.pow(1024, i);

  return `${size.toFixed(2)} ${sizes[i]}`;
}

export function generateUUID(): string {
  return uuidv4();
}

export function safeParseJson(text: string) {
  try {
    // 尝试直接解析
    return JSON.parse(text);
  } catch (e) {
    // 若失败，尝试清理后解析
    try {
      const cleaned = text.replace(/```(json)?/g, '').trim();
      
      return JSON.parse(cleaned);
    } catch (cleanError) {
      throw new Error(`无效的 JSON 格式: ${text.substring(0, 50)}...`);
    }
  }
}

