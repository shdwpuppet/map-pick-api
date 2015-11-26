#Map Pick API
A backend only, automatically updating panel to ingest JSON data from
[TF2 Map Picker](http://tf2atgxl.com/map_pick). This bundle does no display
on its own, is dependent on a front-end map-pick view. I recommend
[Erynnb's excellent tf-mapvote](https://github.com/erynnb/tf-mapvote).

### Installation
Download and unzip to nodecg/bundles/
Alternatively run:
```
nodecg install shdwpuppet/map-pick-api
```
Because this bundle includes an extension, you cannot hot load this bundle.
Nodecg must be restarted first.
### Usage
Using is just as easy as installing. First go to [TF2 Map Picker](http://tf2atgxl.com/map_pick), start a map pick with the dead easy form,
put the API ID, located at the bottom of your map pick instance, into the nodecg
panel and hit update. Then, start polling. The polling will happen every 10 seconds
until you press stop polling.

### Credits
Alexander "Dr.shdwpuppet" Williams
