---
title: MQTT Topics
sidebar_position: 10
---

import Centered from '@site/src/components/Centered';
import Label from '@site/src/components/Label';

# MQTT Topics <Label value="beta"/>

Below table is a description of all MQTT topics that might be of use by a user. Replace `<mac>` with the MAC-address of your NSPanel:

| Topic                                        | Payload             | Description                                                                                                                                                                                             |
| -------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nspanel/\<mac\>/screen_cmd                   | 1 or 0              | Send a 1 or 0 to turn on/off the display.                                                                                                                                                               |
| nspanel/\<mac\>/screen_state                 | 1 or 0              | Current state of the screen.                                                                                                                                                                            |
| nspanel/\<mac\>/brightness_cmd               | 1 to 100            | Control the brightness of the screen.                                                                                                                                                                   |
| nspanel/\<mac\>/brightness_state             | 1 to 100            | Current state of the brightness of the screen.                                                                                                                                                          |
| nspanel/\<mac\>/brightness_screensaver_cmd   | 0 to 100            | Control the brightness of the screensaver.                                                                                                                                                              |
| nspanel/\<mac\>/brightness_screensaver_state | 0 to 100            | State of the brightness of the screensaver.                                                                                                                                                             |
| nspanel/\<mac\>/relay1_cmd                   | 1 or 0              | Send a 1 or 0 to turn on/off relay 1.                                                                                                                                                                   |
| nspanel/\<mac\>/relay1_state                 | 1 or 0              | The current state of relay 1.                                                                                                                                                                           |
| nspanel/\<mac\>/relay2_cmd                   | 1 or 0              | Send a 1 or 0 to turn on/off relay 2.                                                                                                                                                                   |
| nspanel/\<mac\>/relay2_state                 | 1 or 0              | The current state of relay 2.                                                                                                                                                                           |
| nspanel/\<mac\>/temperature                  | Current temperature | The current temperature reading.                                                                                                                                                                        |
| nspanel/\<mac\>/screensaver_mode_cmd         | screensaver mode    | Select what screensaver to display <br/> Choose from the following: <br/>- with_background<br/>-without_background<br/>-datetime_with_background<br/>-datetime_without_background<br/>or no_screensaver |
| nspanel/\<mac\>/screensaver_mode_state       | screensaver mode    | The currently selected screensaver mode                                                                                                                                                                 |
| nspanel/\<mac\>/log                          | Log message         | The panel will send live logs on this topic.                                                                                                                                                            |

Below are more topics that are used internally. Replace `<manager_address>` with the IP address of the manager container.

| Topic                                                                       | Payload          | Description                                                                                                                 |
| --------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| nspanel/mqttmanager\_\<manager_address\>/status/time                        | Time as a string | Current time sent by MQTTManager.                                                                                           |
| nspanel/mqttmanager\_\<manager_address\>/status/date                        | Date as a string | Current date sent by MQTTManager.                                                                                           |
| nspanel/mqttmanager\_\<manager_address\>/status/weather                     | Protobuf         | A protobuf representation of the current weather and weather forecast.                                                      |
| nspanel/\<mac\>/status_report                                               | Protobuf         | Protobuf payload with current state of the panel.                                                                           |
| nspanel/\<mac\>/status                                                      | JSON             | JSON payload with current online/offline state of the panel.                                                                |
| nspanel/\<mac\>/command                                                     | JSON             | JSON payload with a command for the panel to execute.                                                                       |
| nspanel/mqttmanager\_\<manager_address\>/command                            | Protobuf         | Protobuf payload from panel with a command for MQTTManager to perform.                                                      |
| nspanel/mqttmanager\_\<manager_address\>/room/\<room_id\>/state             | Protobuf         | Protobuf payload from the manager that represents the "Home page" state to display on the NSPanel for the given room.       |
| nspanel/mqttmanager\_\<manager_address\>/all_rooms_state                    | Protobuf         | Protobuf payload from the manager that represents the "Home page" state to display on the NSPanel when in "All rooms" mode. |
| nspanel/mqttmanager\_\<manager_address\>/all_rooms_state                    | Protobuf         | Protobuf payload from the manager that represents the "Home page" state to display on the NSPanel when in "All rooms" mode. |
| nspanel/mqttmanager\_\<manager_address\>/entity_pages/\<page_id\>/state     | Protobuf         | Protobuf payload from the manager that represents the "Entities"/"Scenes" state to display on the NSPanel when.             |
| nspanel/mqttmanager\_\<manager_address\>/relay_groups/\<group_id\>/state    | 1 or 0           | Current state of the relay group binding 1 for "ON" and 0 for "OFF".                                                        |
| nspanel/mqttmanager\_\<manager_address\>/entities/lights/\<light_id\>/state | Protobuf         | Current state of the light.                                                                                                 |
