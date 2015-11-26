'use strict';
var maps = [];
var updating = false;
var intid;
var api_id;

function update() {
  $.get('/map-pick/update/' + api_id, function(newMaps) {
        maps = newMaps
        nodecg.sendMessage('update_maps', {maps:maps})
        console.log(maps)

        var blue_picks = maps.blue_picks
        var red_picks = maps.red_picks
        var blue_bans = maps.blue_bans
        var red_bans = maps.red_bans
        var default_picks = maps.default_picks
        console.log(blue_bans)
        $('#blue_pick').html('')
        $('#red_pick').html('')
        $('#blue_ban').html('')
        $('#red_ban').html('')
        $('#default_pick').html('')

        blue_picks.forEach(function(map) {
            $('#blue_pick').append(map+'<br>')
        });
        blue_bans.forEach(function(map) {
            $('#blue_ban').append(map+'<br>')
        });
        red_picks.forEach(function(map) {
            $('#red_pick').append(map+'<br>')
        });
        red_bans.forEach(function(map) {
            $('#red_ban').append(map+'<br>')
        });
        default_picks.forEach(function(map) {
            $('#default_pick').append(map+'<br>')
        });

  });
}
$('#map-pick_update').click(function() {
  api_id = $('#api_id').val();
  console.log(api_id)
});

$('#map-pick_start').click(function() {
    update();
    intid = setInterval(update, 10000);
});

$('#map-pick_stop').click(function() {
    clearInterval(intid)
});
function update_maps(maps) {

}
