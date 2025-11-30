export function useFbq() {
  const track = (event: FbqEvent, data?: Record<string, unknown>) => {
    window.fbq?.('track', event, data);
  };

  return { track };
}
