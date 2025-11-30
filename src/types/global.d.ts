declare global {
  interface Window {
    fbq?: FbqFunction;
  }

  type FbqEvent =
    | 'PageView'
    | 'ViewContent'
    | 'Lead'
    | 'AddToCart'
    | 'Purchase'
    | string;

  interface FbqFunction {
    (command: 'track', event: FbqEvent, data?: Record<string, unknown>): void;
    (command: string, ...args: unknown[]): void;
    queue?: unknown[];
    loaded?: boolean;
    version?: string;
  }
}

export {};
