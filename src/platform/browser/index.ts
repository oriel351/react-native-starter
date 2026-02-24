import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';

export async function openExternalBrowser(url: string) {
  await openBrowserAsync(url, {
    presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
  });
}
