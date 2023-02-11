import { useState } from 'react';

type CopiedValue = string | null;
type CopyFunction = (text: string) => Promise<boolean>; // Return success
type UseCopyToClipboard = {
  handleCopy: CopyFunction;
  copiedText: CopiedValue;
};

// REF: https://usehooks-ts.com/react-hook/use-copy-to-clipboard
function useCopyToClipboard(): UseCopyToClipboard {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const handleCopy: CopyFunction = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    // Try to save to clipboard, then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  return { handleCopy, copiedText };
}

export default useCopyToClipboard;
