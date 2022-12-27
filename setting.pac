if (isResolvable(192.168.0.104)) {
  return "PROXY 192.168.0.104:7890";
} else {
  return "DIRECT";
}