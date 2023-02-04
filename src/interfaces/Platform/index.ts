interface DevicePlatformInterface {
  platform: {OS: string}
  isAndroid(): boolean
  isIos(): boolean
}

export default DevicePlatformInterface
