export const trackLead = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
    console.log('Meta Pixel: Lead tracked');
  }
};
