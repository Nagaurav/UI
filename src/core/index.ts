export interface AppConfig {
  mode: 'cli' | 'react-native';
  debug: boolean;
}

export class AppCore {
  private config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
  }

  async initialize() {
    if (this.config.debug) {
      console.log(`Initializing in ${this.config.mode} mode`);
    }
    // Add your initialization logic here
  }

  async start() {
    if (this.config.debug) {
      console.log(`Starting in ${this.config.mode} mode`);
    }
    // Add your start logic here
  }

  async stop() {
    if (this.config.debug) {
      console.log(`Stopping in ${this.config.mode} mode`);
    }
    // Add your stop logic here
  }
} 