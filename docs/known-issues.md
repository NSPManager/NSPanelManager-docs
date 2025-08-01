---
title: Known issues
sidebar_position: 5
---

import CenteredImage from '@site/src/components/CenteredImage';
import Label from '@site/src/components/Label';

# Known issues

This chapter describes all known issues with NSPanel Manager. For up to date list of bugs, enhancements and other issues, please visit the [GitHub repository](https://github.com/NSPManager/NSPanelManager/issues). This list simply describes bugs that we cannot fix.

- If using OpenHAB and something else triggers a light to turn off, OpenHAB will not send out a new state for the light that the brightness has changed to 0 (turned off). This makes it so that if you have a light added to OpenHAB, then add it to NSPanel Manager but control the light from something else other than OpenHAB or NSPanel Manager the NSPanel will not always have the correct state of a light. Please see [issue #125](https://github.com/NSPManager/NSPanelManager/issues/125)
