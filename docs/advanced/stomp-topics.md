---
title: STOMP Topics
sidebar_position: 15
---

import Centered from '@site/src/components/Centered';
import Label from '@site/src/components/Label';

# STOMP Topics <Label value="beta"/>

The web interface makes use of the STOMP protocol to communicate with the MQTTManager in the background. STOMP is being used over websocket and can be connected to via http://<manager_address>:<manager_port>/websocket/stomp. When a stomp connection has been established the following topics can be used:

| Topic                               | Payload                                                                  | Description                                                                                                                                                                                                                                                                                                             |
| ----------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nspanel/\<mac_address\>/command     | 'reboot', 'firmware_update' or 'gui_update'                              | Reboot, update firmware or update the GUI of the NSPanel.                                                                                                                                                                                                                                                               |
| nspanel/\<mac_address\>/status      | JSON-encoded status object.                                              | The MQTTManager will send out a JSON-encoded status object when it changes for the specified NSPanel. NSPanel.                                                                                                                                                                                                          |
| nspanel/\<mac_address\>/log         | Stream of JSON-encoded log messages from the NSPanel.                    | When a log message is received from the NSPanel it will be decoded and sent out to this topic as a JSON-encoded object.                                                                                                                                                                                                 |
| nspanel/\<mac_address\>/log_backlog | Stream of JSON-encoded log messages from the NSPanel log buffer backlog. | The MQTTManager will buffer a given amount of logs in memory. When connecting to this topic the MQTTManager will send out all buffered logs as a JSON-encoded object. This topic is only ment to be subscribed to, get the log backlog, then unsubscribe and get new logs from the 'nspanel/\<mac_address\>/log' topic. |
