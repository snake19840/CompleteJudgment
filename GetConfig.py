class GetConfig:
    def __init__(self, config_file=r'Config\config.conf'):
        self.config_file = config_file
        self.config = {}
        self.read_config()

    def read_config(self):
        with open(self.config_file, 'r') as f:
            for line in f:
                if line.strip().startswith('#') or not line.strip():
                    continue
                key, value = line.strip().split('=')
                self.config[key.strip()] = value.strip()

    def get_config(self, key):
        if key in self.config:
            return self.config[key]
        else:
            return None