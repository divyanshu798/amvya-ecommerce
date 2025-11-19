// Utility to load Razorpay script and create order
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    // Check if Razorpay is already loaded
    if (typeof window !== 'undefined' && window.Razorpay) {
      resolve(true);
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      console.log('Razorpay script loaded successfully');
      resolve(true);
    };
    script.onerror = () => {
      console.error('Failed to load Razorpay script');
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export function getTestRazorpayKey(): string {
  // This is a demo Razorpay test key - replace with your actual test key
  // Get your test key from: https://dashboard.razorpay.com/app/keys
  return process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1DP5mmOlF5G5ag';
}

// For testing without backend, we'll use a simpler approach
export function createTestOrder(amount: number) {
  return {
    amount: amount,
    currency: 'INR',
    receipt: `receipt_${Date.now()}`,
  };
}
