---
title: Logs
sidebar_position: 5
---
import CenteredImage from '@site/src/components/CenteredImage';

# Logs

Once the NSPanel is connected to MQTT, it sends its logs on the topic `nspanel/<mac>/log`, where `<mac>` is the MAC address of the panel.
These are the logs you see in the live log view on the NSPanel page in the web interface, and the log level is set on the
settings page on the panel itself.

Logs created while the panel isn't connected to MQTT, for example during boot or before WiFi has connected, can't reach the
manager, so they're written to the serial port instead.

## Serial log setting

The **Serial log** setting on the panel's own settings page controls when log lines are also written to the serial port:

- **Auto (only while not connected to MQTT)** - The default. Lines go to the serial port only while they can't be sent over
  MQTT. Writing to the serial port slows the panel down, so it is skipped once the logs reach the manager.
- **Always** - Every line is written to the serial port as well. Useful when debugging with a serial cable attached.
- **Never** - Nothing is written to the serial port.

## Read the serial log

If you wish to look at the logs going over serial, you can use programs like Putty. 

Connect to the NSPanel with the serial programmer as usual but don’t connect `IO0` to `GND`. 

In Putty enter your serial port in the "Serial line" box and choose baud `115200`. 

You should then be able to connect by pressing the "Open"-button.

:::info
On Windows `/dev/ttyUSB0` will have to be replaced by something like `COM4`. If using MacOS or Linux the port
will be something similar to `/dev/ttyUSB0`.
:::

Example:

<CenteredImage src="/images/doc/putty_serial.png" alt="Connecting to Serial with Putty" figureNumber={10} />

## Event loop watchdog

If the panel stops responding to touches while it still shows as online in the manager, look for `LoopWatchdog` lines in its
log. The panel logs these when its main event loop has stalled for 15 seconds or more: one line per task, each with a backtrace.
They are useful to include in a bug report.
