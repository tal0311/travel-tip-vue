
import { getCurrentInstance } from 'vue'

// by convention, composable function names start with "use"
export function useGlobals() {
  const { appContext } = getCurrentInstance()
  return appContext.config.globalProperties


}