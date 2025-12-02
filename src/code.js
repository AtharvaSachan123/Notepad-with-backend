// supports-color/index.js
function supportsColor(stream) {
  if (process.env.FORCE_COLOR === '0') return 0;

  if (process.platform === 'win32' && process.versions.node >= 8) {
    const osRelease = process.versions.os.split('.');
    if (osRelease[0] >= 10 && osRelease[2] >= 14931) return 3;
    if (osRelease[2] >= 10586) return 2;
  }

  // Add more checks for other environments
  return process.stdout.isTTY ? 1 : 0;
}

module.exports = supportsColor;