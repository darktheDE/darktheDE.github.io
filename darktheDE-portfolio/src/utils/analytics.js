/**
 * Google Analytics 4 Tracking Utilities
 *
 * Measurement ID: G-5WVFWQ6TF9
 */

const GA_MEASUREMENT_ID = 'G-5WVFWQ6TF9';

/**
 * Initialize GA4 gtag function if not already defined
 */
const ensureGtag = () => {
  if (typeof window.gtag !== 'function') {
    console.warn('[GA4] gtag not initialized');
    return false;
  }
  return true;
};

/**
 * Track a custom event to Google Analytics 4
 * @param {string} action - The action name (e.g., 'click', 'view', 'scroll')
 * @param {string} category - Category of the event (e.g., 'Button', 'Project', 'Navigation')
 * @param {object} params - Additional parameters
 */
export const trackEvent = (action, category, params = {}) => {
  if (!ensureGtag()) return;

  window.gtag('event', action, {
    event_category: category,
    ...params,
  });
};

/**
 * Track page views
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (!ensureGtag()) return;

  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

/**
 * Track outbound link clicks
 * @param {string} url - The destination URL
 * @param {string} linkName - Descriptive name of the link
 */
export const trackOutboundLink = (url, linkName) => {
  if (!ensureGtag()) return;

  window.gtag('event', 'click', {
    event_category: 'Outbound Link',
    event_label: linkName,
    destination: url,
  });
};

/**
 * Track file downloads
 * @param {string} fileName - Name of the downloaded file
 * @param {string} fileType - Type of file (pdf, zip, etc.)
 */
export const trackFileDownload = (fileName, fileType) => {
  if (!ensureGtag()) return;

  window.gtag('event', 'file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

/**
 * Track project interactions
 * @param {string} projectTitle - Title of the project
 * @param {string} action - Action type: 'view', 'click_case_study', 'click_source'
 * @param {object} extra - Additional parameters
 */
export const trackProjectInteraction = (projectTitle, action, extra = {}) => {
  if (!ensureGtag()) return;

  const eventAction = {
    view: 'view_project',
    click_case_study: 'click_case_study',
    click_source: 'click_source',
  }[action] || action;

  window.gtag('event', eventAction, {
    event_category: 'Project',
    project_name: projectTitle,
    ...extra,
  });
};

/**
 * Track CTA button clicks
 * @param {string} buttonName - Name of the button
 * @param {string} location - Location of the button (hero, footer, etc.)
 */
export const trackCTA = (buttonName, location) => {
  if (!ensureGtag()) return;

  window.gtag('event', 'cta_click', {
    event_category: 'CTA',
    cta_name: buttonName,
    cta_location: location,
  });
};

/**
 * Track navigation clicks
 * @param {string} sectionName - Name of the navigated section
 */
export const trackNavigation = (sectionName) => {
  if (!ensureGtag()) return;

  window.gtag('event', 'navigation_click', {
    event_category: 'Navigation',
    section_name: sectionName,
  });
};

/**
 * Track filter usage
 * @param {string} filterName - Name of the filter
 */
export const trackFilter = (filterName) => {
  if (!ensureGtag()) return;

  window.gtag('event', 'filter_click', {
    event_category: 'Filter',
    filter_name: filterName,
  });
};

// Export measurement ID for reference
export { GA_MEASUREMENT_ID };
