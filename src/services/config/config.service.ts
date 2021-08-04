import { Config } from '@/lib/config'
import configs from '@/lib/config'

interface Env {
  NETWORK: string
}

export default class ConfigService {
  public get env(): Env {
    return {
      NETWORK: '137'
    }
  }

  public get network(): Config {
    return configs[this.env.NETWORK]
  }

  public getNetworkConfig(key: string): Config {
    return configs[key]
  }
}

export const configService = new ConfigService()
