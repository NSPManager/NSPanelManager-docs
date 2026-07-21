---
title: Supported devices
sidebar_position: 2
---

# Supported devices

:::warning
NSPanelManager only support **ESP32** firmware based Sonoff NSPanel, for other devices, use the web app (more about this below).
:::

## Differentiate NSPanel vs NSPanel PRO

:::tip

![alt text](/images/doc/hardware/nspanel-vs-nspanelpro.png "Difference between NSPanel and NSPanel PRO")

- The PRO version has **no physical** buttons under the touch screen.
- The PRO version is generally more expensive
- The PRO version runs on Android OS.
- Some variants of the PRO version runs over Zigbee protocol, this is not the case of NSPanel (Only WIFI)

:::

## Devices compatible with NSPanel Manager firmware

| Image                                                                                 | Name               | Manufacturer | Affiliate links                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------- | ------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![alt text](/images/doc/hardware/supported/nspanel-eu-black.png "NSPanel (EU) Black") | NSPanel (EU) Black | Sonoff       | [Itead][itead-link-1]<br/>[AliExpress 1][aliexpress-link-1]<br/>[AliExpress 2][aliexpress-link-2]<br/>[AliExpress 3][aliexpress-link-3]<br/>[AliExpress 4][aliexpress-link-4]<br/>[Amazon 1][amazon-link-1]<br/>[Amazon 2][amazon-link-2] |
| ![alt text](/images/doc/hardware/supported/nspanel-eu-white.png "NSPanel (EU) White") | NSPanel (EU) White | Sonoff       | [Itead][itead-link-1]<br/>[AliExpress 1][aliexpress-link-1]<br/>[AliExpress 2][aliexpress-link-2]<br/>[AliExpress 3][aliexpress-link-3]<br/>[AliExpress 4][aliexpress-link-4]<br/>[Amazon 1][amazon-link-1]<br/>[Amazon 2][amazon-link-2] |
| ![alt text](/images/doc/hardware/supported/nspanel-us-black.png "NSPanel (US) Black") | NSPanel (US) Black | Sonoff       | [Itead][itead-link-1]<br/>[AliExpress 1][aliexpress-link-1]<br/>[AliExpress 2][aliexpress-link-2]<br/>[AliExpress 3][aliexpress-link-3]<br/>[AliExpress 4][aliexpress-link-4]<br/>[Amazon 1][amazon-link-1]<br/>[Amazon 2][amazon-link-2] |
| ![alt text](/images/doc/hardware/supported/nspanel-us-white.png "NSPanel (US) White") | NSPanel (US) White | Sonoff       | [Itead][itead-link-1]<br/>[AliExpress 1][aliexpress-link-1]<br/>[AliExpress 2][aliexpress-link-2]<br/>[AliExpress 3][aliexpress-link-3]<br/>[AliExpress 4][aliexpress-link-4]<br/>[Amazon 1][amazon-link-1]<br/>[Amazon 2][amazon-link-2] |

:::info
When you buy a device using these affiliate links, you support the project. Thank you!

More info on the [support page](/support)
:::

## Other devices

Devices such as the NSPanel pro and shelly wall displays cannot be handled by flashing a different firmware. These devices are often running Android, but as such, they can run a web interface or Android app.
A common usecase is to run the Home Assistant app on these devices. If you want to control your home using the NSPanel Manager controller and interface, you can now use the NSPanel Manager web app. This is available via the /webapp endpoint. To access it, open a browser and navigate to http://manager address:manager port/webapp. For example, if you are running the manager as a Home Assistant add-on and your home assistant installation is avaiable at homeassistant.local and you haven't changed the default port of 8000, then the web app can be accessed via http://homeassistant.local:8000/webapp. The web app, as with all devices that wishes to join the manager, will have to be accepted in the manager interface before the web app can be used. Please note that while the web app may be available in the stable releases, the particular feature is still to be considered to be a work in progress, ie. beta.

[itead-link-1]: https://itead.cc/product/sonoff-nspanel-smart-scene-wall-switch/ref/43/
[aliexpress-link-1]: https://s.click.aliexpress.com/e/_omACSTr
[aliexpress-link-2]: https://s.click.aliexpress.com/e/_oFSwCcp
[aliexpress-link-3]: https://s.click.aliexpress.com/e/_oDojEDL
[aliexpress-link-4]: https://s.click.aliexpress.com/e/_oBgD8ZT
[amazon-link-1]: https://amzn.to/4knptQp
[amazon-link-2]: https://amzn.to/4ks1qzS
