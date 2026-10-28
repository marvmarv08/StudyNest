/** Keep existing Supabase email links valid through the legacy Pages redirect. */
export function getAuthRedirectUrl(origin: string, baseUrl: string, production: boolean): string {
  const callbackPath = production ? '/reviewer-organizer/' : baseUrl
  return new URL(callbackPath, origin).href
}
