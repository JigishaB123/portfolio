/** Fire-and-forget toast; rendered by <Toast /> mounted in App. */
export const showToast = (message) =>
  window.dispatchEvent(new CustomEvent('app:toast', { detail: message }));

export const copyToClipboard = async (text, message = 'Copied to clipboard') => {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    showToast('Copy failed — please copy manually');
  }
};
