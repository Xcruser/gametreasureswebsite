interface Window {
  gtag?: (command: string, action: string, params: object) => void;
  fbq?: (command: string, action: string) => void;
}
