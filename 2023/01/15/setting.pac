function FindProxyForURL(url, host) {
    if (isInNet(host, "192.168.0.0", "255.255.255.0")) {
        return "DIRECT";
    } else {
        return "PROXY 192.168.0.108:7890; DIRECT";
    }
}


