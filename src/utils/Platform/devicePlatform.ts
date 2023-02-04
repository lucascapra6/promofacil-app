import DevicePlatformInterface from '@interfaces/Platform'
import {Platform} from 'react-native'

class DevicePlatform implements DevicePlatformInterface {
  readonly platform: {OS: string}

  constructor() {
    this.platform = Platform
  }

  isAndroid(): boolean {
    return this.platform.OS === 'android'
  }

  isIos(): boolean {
    return this.platform.OS === 'ios'
  }
}

export default DevicePlatform
