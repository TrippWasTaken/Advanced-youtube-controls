console.log('content for loaded');

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import('./components/Main');
