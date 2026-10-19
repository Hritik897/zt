/**
 * Utility to strip tracking parameters (UTM tags, analytics tokens, ref IDs)
 * from URLs to produce clean, shareable canonical links.
 */

function cleanShareUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    const trackingParams = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'fbclid',
      'gclid',
      'msclkid',
      'mc_cid',
      'mc_eid',
      '_ga',
      '_gl',
      'ref',
      'ref_src'
    ];

    trackingParams.forEach(param => url.searchParams.delete(param));
    return url.toString();
  } catch (e) {
    return rawUrl;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { cleanShareUrl };
}
