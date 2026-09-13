/**
 * Encode a FormData object for a Netlify Forms submission.
 *
 * Netlify expects application/x-www-form-urlencoded. File entries are skipped
 * because they cannot be represented in a urlencoded body.
 */
export function encodeFormData(formData: FormData): string {
  const params = new URLSearchParams();
  formData.forEach((value, key) => {
    if (typeof value === 'string') {
      params.append(key, value);
    }
  });
  return params.toString();
}
