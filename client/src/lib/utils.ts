import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(value: string): string {
  let cleaned = value.replace(/\D/g, '');
  if (cleaned.startsWith('8')) cleaned = '7' + cleaned.slice(1);
  if (cleaned.startsWith('7')) cleaned = cleaned.slice(1);
  
  if (cleaned.length >= 10) {
    cleaned = cleaned.slice(0, 10);
    return `+7 (${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6,8)}-${cleaned.slice(8,10)}`;
  }
  
  return value;
}

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
