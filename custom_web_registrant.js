// Workaround for the sign_in_with_apple_web issue
// This file is a simple workaround that creates a dummy SignInWithApplePlugin object
// so the web build doesn't fail when looking for it

if (typeof window !== 'undefined') {
  // Create a dummy object that will be used instead of the actual plugin
  window.SignInWithApplePlugin = {
    registerWith: function() {
      console.warn('SignInWithApplePlugin: Using dummy implementation');
    }
  };
} 