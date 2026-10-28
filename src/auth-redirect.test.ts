import { describe, expect, it } from 'vitest'
import { getAuthRedirectUrl } from './auth-redirect'

describe('authentication redirect compatibility after repository rename', () => {
  it('keeps the established production email callback path', () => {
    expect(getAuthRedirectUrl('https://marvmarv08.github.io', '/StudyNest/', true))
      .toBe('https://marvmarv08.github.io/reviewer-organizer/')
  })

  it('uses the current base path for local development', () => {
    expect(getAuthRedirectUrl('http://localhost:5173', '/StudyNest/', false))
      .toBe('http://localhost:5173/StudyNest/')
  })

  it('retains the caller origin instead of accepting an external callback host', () => {
    expect(new URL(getAuthRedirectUrl('https://preview.example', '/StudyNest/', true)).origin)
      .toBe('https://preview.example')
  })
})
