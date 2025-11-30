export function initFakeFbq() {
  if (typeof window === 'undefined') return;

  if (!window.fbq) {
    const fakeFbq: FbqFunction = (command, event, data) => {
      console.log('FB Pixel mock:', command, event, data);
    };

    window.fbq = fakeFbq;
  }
}
