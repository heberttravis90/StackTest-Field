import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Network } from '@capacitor/network';

const workflowOrder = ['clientplant', 'prejob', 'prelims', 'field', 'crewtime', 'results', 'complete'];

function isVisible(el) {
  return !!el && !el.classList.contains('hidden');
}

async function setupNativeRuntime() {
  if (!Capacitor.isNativePlatform()) return;

  document.documentElement.classList.add('stp-native');
  window.STP_NATIVE = true;

  try {
    const status = await Network.getStatus();
    window.dispatchEvent(new CustomEvent('stp:native-network', { detail: status }));
  } catch (error) {
    console.warn('STP native network bootstrap:', error);
  }

  Network.addListener('networkStatusChange', status => {
    window.dispatchEvent(new CustomEvent('stp:native-network', { detail: status }));
    window.dispatchEvent(new Event(status.connected ? 'online' : 'offline'));
  }).catch(error => console.warn('STP native network listener:', error));

  App.addListener('backButton', async ({ canGoBack }) => {
    const modal = document.getElementById('methodModal');
    if (isVisible(modal)) {
      document.getElementById('closeMethodModal')?.click();
      return;
    }

    const drawer = document.getElementById('sideDrawer');
    if (drawer?.classList.contains('open')) {
      document.getElementById('drawerClose')?.click();
      return;
    }

    const active = document.querySelector('.view.active');
    const activeId = active?.id || '';
    const index = workflowOrder.indexOf(activeId);
    if (index > 0 && typeof window.navigateStackTest === 'function') {
      window.navigateStackTest(workflowOrder[index - 1]);
      return;
    }

    if (activeId && index < 0 && typeof window.navigateStackTest === 'function') {
      window.navigateStackTest('clientplant');
      return;
    }

    if (canGoBack && window.history.length > 1) {
      window.history.back();
      return;
    }

    try {
      await App.minimizeApp();
    } catch (error) {
      console.warn('STP native back button:', error);
    }
  }).catch(error => console.warn('STP native back listener:', error));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupNativeRuntime, { once: true });
} else {
  setupNativeRuntime();
}
