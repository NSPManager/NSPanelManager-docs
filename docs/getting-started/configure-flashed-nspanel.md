---
title: Configure Flashed Sonoff NSPanel
sidebar_position: 4
---
import YouTubePlayer from '@site/src/components/YoutubePlayer';
import CenteredImage from '@site/src/components/CenteredImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure Flashed Sonoff NSPanel

:::note

Pre-requisite: You have to [flash the Sonoff NSPanel with our custom firmware](./flash-nspanel.md) first.

:::

## Connect to Wifi

After flashing your NSPanel:

1) Connect it to power
2) It will boot as an access point.
3) Check for a WIFI network called `NSPMPanel`.
4) Connect to it (no password required)
5) Visit http://192.168.1.1

You should see a page similar to this:

<CenteredImage src="/images/doc/configuration/sonoff-nspanel-configuration.png" alt="Simplified configuration page" figureNumber="1" />

## NSPanel Configuration

Let's setup the minimal configuration, the rest can be configured from NSPanel Manager directly.

1) Fill up the WiFi section with your Wifi information.
2) Complete the MQTT section.
3) Click the **Save** button.

After that the device will reboot and connect to your Wifi 
(it will no longer host a WiFi named `NSPMPanel` nor be reachable to the previous url).

If needed, you will still be able to connect to it via it's new IP from your own Wifi network. 
(Check in your Router to retrieve its IP)


At this stage, if your device could connect to your WiFi and to MQTT you can jump into 
the [installation of NSPanel Manager](./install/installation-guide-docker.md)