import type { FlashSession } from './getFlashSession'

export const useFlash = (session: FlashSession) => {
  console.log('useFlash', { session })
  const { flash = null } = session
  delete session.flash
  return flash
}
